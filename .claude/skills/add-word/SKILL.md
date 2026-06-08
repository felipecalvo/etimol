---
name: add-word
description: Use when the user wants to add new daily words to the etimol game. Takes a plain-text list of Spanish headwords (typically src/words.txt), fetches RAE definitions and etymology for each, drafts five clues per word in the data.ts hint style, and assigns a difficulty (1-5). Output is a review-ready draft, not a direct write to data.ts.
---

# add-word: draft new etimol words from a list

## When to use

The user has a list of Spanish words (one per line, no other content) — typically in `src/words.txt` — and wants RAE-backed drafts to review before merging into `src/data.ts`.

## Workflow

### 1. Read the word list

```bash
cat src/words.txt
```

The file should be one headword per line. Confirm with the user if the format looks different.

### 2. Fetch RAE for each word

`dle.rae.es` is behind Cloudflare — plain `curl` and the `WebFetch` tool both return 403. Use the Python `cloudscraper` library (already installed in this environment via `pip install --user cloudscraper`).

Bulk fetcher script: write to `/tmp/fetch_rae.py`:

```python
#!/usr/bin/env python3
import cloudscraper, re, html as htmllib, json, sys, time

def parse_rae(scraper, word):
    r = scraper.get(f'https://dle.rae.es/{word}', timeout=30)
    if r.status_code != 200:
        return {"word": word, "error": f"HTTP {r.status_code}", "etyms": [], "defs": []}
    h = r.text
    etyms = []
    for m in re.finditer(r'<div class="n2 c-text-intro">(.*?)</div>', h, re.DOTALL):
        txt = re.sub(r'<[^>]+>', '', m.group(1))
        txt = re.sub(r'\s+', ' ', htmllib.unescape(txt)).strip()
        etyms.append(txt)
    items = re.findall(r'<li[^>]*class="j[^"]*"[^>]*>(.*?)</li>', h, re.DOTALL)
    defs = []
    for it in items:
        inner = re.search(r'<div class="c-definitions__item" role="definition">\s*<div>(.*?)</div>', it, re.DOTALL)
        if not inner:
            continue
        raw = re.sub(r'<span class="n_acep">[^<]+</span>', '', inner.group(1))
        text = re.sub(r'<[^>]+>', '', raw)
        text = re.sub(r'\s+', ' ', htmllib.unescape(text)).strip()
        defs.append(text)
    return {"word": word, "etyms": etyms, "defs": defs}

if __name__ == "__main__":
    words = [w.strip() for w in open(sys.argv[1]) if w.strip()]
    out = []
    s = cloudscraper.create_scraper()
    for i, w in enumerate(words, 1):
        print(f"[{i}/{len(words)}] {w}", file=sys.stderr, flush=True)
        try:
            out.append(parse_rae(s, w))
        except Exception as e:
            out.append({"word": w, "error": str(e), "etyms": [], "defs": []})
        time.sleep(0.5)
    print(json.dumps(out, ensure_ascii=False, indent=2))
```

Run it: `python3 /tmp/fetch_rae.py src/words.txt > /tmp/rae_results.json`

A handful of words (≤60) takes ~30s. Larger batches: budget ~0.5s per word.

### 3. Draft each entry

For every word, write a single entry in `src/words.txt` matching the `data.ts` shape (minus the `date`, since that's a deploy-time concern). Use this template:

```js
// N. <answer> — <one-line note if anything is unusual>
{
  answer: "<answer>",
  definition: "<RAE first def, verbatim, with the grammar tag like `m.`, `f.`, `tr.`>",
  difficulty: <1-5>,
  etymology: [
    { word: "<oldest>", language: "<lang>" },
    // ... more steps, oldest → newest
  ],
  hints: [
    // see hint patterns below
  ],
},
```

**Definitions:** paste RAE's first definition verbatim, *including* the grammar tag. Override only when the first sense is clearly not the common modern meaning (see "Cases to flag"). When overriding, add a `// NOTE:` comment above the entry explaining why.

**Etymology order is reversed from RAE.** RAE prints newest → oldest ("Del fr. X, y este del lat. Y"). The `etymology` array goes oldest → newest (just before the modern Spanish word). Include *every* step RAE lists. Don't drop intermediate languages.

For compound etymologies (e.g., `xocoatl = xoco + atl`), use the `parts` field — see the `chocolate` entry in `data.ts` for the exact shape.

For words that come from combining two words (i.e. Tecla: Cruce del b. lat. *thecula, dim. del lat. theca 'caja', y el ár. hisp. táqra, y este del berb. tegra 'cuenco'.), you can use multiple `language` + `word` pairs in the `etymology` array. See `meñique` in `data.ts` for an example of a three-step chain with two pairs of etymons. In a more complex one like the `tecla` example, you can use `parts` to break down the compound etymon into its components, and then list the source languages for each component in the `etymology` array. The key is to capture all the etymological information RAE provides without losing any steps.

### 4. Design five clues per word

Mirror the hint patterns already in `data.ts`. Every entry has exactly 5 hints; pick a mix from these types:

| Type | Template example | Spoiler |
|---|---|---|
| `etymology` (single) | `Del latín «{spoiler}»` | the etymon |
| `etymology` (paired) | `Del latín «{spoiler}», y del latín vulgar «{spoiler}»` | `[etym1, etym2]` |
| `letter_count` | `Tiene {spoiler} letras` | the count |
| `starts_with` | `Empieza con {spoiler}` | the first letter(s) |
| `ends_with` | `Termina con {spoiler}` | the last letter(s) |
| `["starts_with", "ends_with"]` | `Empieza con {spoiler} y termina con {spoiler}` | `[first, last]` |
| `definition` (original meaning) | `En latín originalmente significaba «{spoiler}» o «{spoiler}»` | the gloss(es) — etymon stays hidden in a separate hint |
| `definition` (modern) | `Es un {spoiler}` / `Significa «{spoiler}»` | substantive content of the definition |
| `definition` (unusual letter) | `Contiene la letra {spoiler}` | the letter (e.g., `ñ`, `x`, `k`) |

Hard rules:

**4a. Every etymology step in the array must appear in at least one hint.** Two ways to handle multi-step chains:
- *Separate hints* when the etymons are phonetically/visually distinct (e.g., `fleukka` (fráncico) vs. `flèche` (francés) — clearly different).
- *Combined hint* via an array spoiler when the etymons are near-identical (e.g., `cirrus` / `cirra`, `gummi` / `gumma`, `columella` / `columellus`). The template uses two `{spoiler}` placeholders and `spoilerText` is `[etym1, etym2]`. Saves a slot without losing information.

**4b. No asterisks in etymons.** RAE prints reconstructed forms as `*safunnárya`, `*pĕttĭa`, `*buccŭla`. Drop the `*` — it confuses players. Keep macrons, breves, and diacritics (`ĭ`, `ē`, `‘`, `ǧ`).

**4c. No inline glosses in etymology hints.** Don't write `Del latín «cirrus» (‘rizo, mechón’)`. Either omit the meaning, or move it to a separate `definition`-type hint:
```
{ type: "etymology", template: "Del latín «{spoiler}»", spoilerText: "cirrus" }
{ type: "definition", template: "En latín originalmente significaba «{spoiler}» o «{spoiler}»",
  spoilerText: ["rizo", "mechón de crin"] }
```
The "originalmente significaba" hint is a great way to convey a fun semantic shift (e.g., `tortuga` ← 'habitante del Tártaro', `faraón` ← 'casa grande') without revealing the etymon.

**4d. Templates must hide substance.** What's visible *before* the spoiler is revealed must not narrow the field too much:
- ❌ `Es una parte {spoiler} de un cuerpo` → reveals "body part" upfront.
- ❌ `Sirve para desenredar el {spoiler}` → reveals the function.
- ❌ `Es un rollo de hojas de {spoiler}` → basically tells the player "rolled leaves of X".
- ✅ `Es {spoiler}` with spoiler `"un calzado que no pasa del tobillo"` — visible is just "Es _". The gender is not revealed because it would be confusing; in this case, the word (bota) is feminine, but it would show "Es un" instead of "Es una".
- ✅ `Significa «{spoiler}»` — visible is "Significa _".

**4e. Words where the etymon equals/resembles the answer get special structure.** Examples: `tsunami` ← jp. *tsunami*, `sapo` ← prerr. *sapo*. A standard `Del X «{spoiler}»` hint would give it away with a flash of the answer-shaped word. Instead:
- Lead with a `definition` hint about the *original meaning* (`"En japonés es una composición de «puerto» + «ola»"`).
- Hold the etymon-shaped hints for later in the reveal order.
- Same trick for compound etymons via `parts` — see `tsunami` and `tamaño` in the drafts/data.

**4f. Highlight unusual letters when the word has one.** `ñ`, `x`, `k`, `w`, or unusual diacritics deserve their own clue: `Contiene la letra {spoiler}`. Use as a final-ish hint — it's a strong narrowing signal.

**General guidance:**
- Use one slot per etymology step (separate or paired). Always include `letter_count` and at least one of `starts_with` / `ends_with`.
- For longer chains (3+ steps), combine the closest-together etymons and push `letter_count` earlier.
- The order in the `hints` array is the reveal order. Hint 1 is the default-shown one, so it should be a "strong but not solving" clue — usually the oldest etymology step.
- A modern-meaning `definition` hint makes a strong final reveal. Don't make it the first hint.

### 5. Assign difficulty (1-5)

`difficulty` measures **how hard it is to land the answer from the clues** — not how rare the word is. The dominant axis is **etymon-to-answer distance**: if the revealed etymons don't resemble the answer, the etymology hints (most of the reveal) give the player no traction, and even a household word is hard. Word frequency and length are secondary modifiers.

The bands, calibrated against the entries in `data.ts`:

- **1 — muy fácil**: ubiquitous, short word that the clues converge on almost immediately — the definition is unmistakable and/or an etymon is close. The exotic source doesn't matter when the word is this common. E.g., `zapato` (← turco *zabata*), `bota` (← fr. *botte*).
- **2 — fácil**: common, usually short word with one wrinkle — a slightly opaque etymon, or an etymon that equals the answer so it falls the moment any etymology shows. E.g., `feo` (← lat. *foedus*), `buzo`, `tsunami` (etymon = answer).
- **3 — media**: common word whose single Latin/Romance root is recognizable *once shown* — you can work back from the etymon. E.g., `cocina` (← lat. *coquere*), `llave` (← lat. *clavis*), `imán` (← fr. *aimant*).
- **4 — difícil** *(the default landing spot)*: any one of — an exotic/surprising source language (`cigarro` ← maya, `flecha` ← fráncico, `sandía` ← ár., vía topónimo *Sind*); a misleading semantic shift (`ángulo` ← 'encorvado', `rascar` ← 'raer, afeitar'); or an etymon you can't reverse-engineer the answer from, on a word of medium familiarity (`meñique`, `zanahoria`, `cetro`, `sembrar`).
- **5 — muy difícil**: the clues leave the field wide open. This happens **even for common words** when the etymon is phonetically unrecognizable from the answer — the etymology hints do nothing and only the (late) definition pins it down: `peine` (← lat. *pecten*), `costumbre` (← lat. *consuetūdo*), `cerda` (← lat. *cirrus* 'rizo'), `buche` (← lat. *bucca* 'boca'), `hebilla` (← lat. *fibŭla*). Also: long all-foreign chains (`ajedrez`: sánscrito → pelvi → árabe) and proper-noun/toponym origins (`jinete` ← ár. hisp. *zanáti*, gentilicio of a Berber tribe).

**Quick adjustments:**

- Push **up** (land at 4–5): etymon shares few letters/sounds with the answer (`fibŭla`→hebilla, `pecten`→peine); exotic source language or proper-noun/toponym origin; original meaning misleads; the clued sense isn't the word's most common sense (`cerda`, `buche`); long multi-step foreign chain.
- Push **down** (toward 1–3): a revealed etymon resembles or equals the answer (`tsunami`, `clavis`→llave); very common *and* short; single recognizable Latin/Romance root.

When in doubt, lean to **4** — the 1–3 bands are reserved for words genuinely easy to land from the clues. A word's commonness does **not** rescue it from a 5 if its etymon is opaque (`peine`, `costumbre` are both 5).

### 6. Report unusual cases to the user

After writing `words.txt`, output a brief summary to chat covering:

- Any word where you used a definition other than RAE def 1, with reason.
- Words with multiple etymologies in RAE (e.g., `bota`, `buzo`, `ducha`) — flag which etym you picked and why.
- Self-referential definitions (`pulgar` → "dedo pulgar") where you paraphrased.
- Any RAE entry where the etymology was missing or marked "or. inc." — let the user decide.

Keep this report tight: one bullet per word, only the ones worth attention. Don't enumerate the words that processed cleanly.

## Cases to flag (recurring patterns)

These are the kinds of words that almost always need a manual override:

- **Self-referential defs** (`pulgar`, `meñique`): RAE def 1 is "dedo X" for many body-part words. Paraphrase to a concrete description.
- **Plant vs. product** (`tabaco`, `café`): the first def is usually the plant; the common meaning is the product/result.
- **Multiple lemmas** (`bota`, `buzo`, `ducha`): RAE prints multiple `Del …` blocks when the headword is two different words that converged in spelling. Pick the etym that matches the sense you want to use.
- **Abstract first def** (`ducha`: "acción y efecto de duchar"): if def 1 is a circular gerund, jump to the next concrete sense.
- **Anachronistic / desusado first defs**: rare but happens; pick the modern sense.

## What NOT to do

- Don't write entries directly to `src/data.ts`. The user reviews `src/words.txt` first and assigns dates at deploy time.
- Don't drop etymology steps to keep the chain short. If RAE lists `gr → lat → lat. vulg.`, all three go in the array (the `hints` may combine adjacent steps via array spoilers, but the `etymology` field stays complete).
- Don't invent etymons RAE doesn't list. If you're unsure, fetch again or flag for review — never fabricate.
- Don't translate / modernize the definition. Paste it verbatim from RAE, preserving the grammar abbreviation (`m.`, `f.`, `tr.`, `adj.`, etc.).
- Don't keep the `*` on reconstructed etymons (`*safunnárya` → `safunnárya`). But keep all other diacritics — macrons, breves, Greek script with transliteration in parentheses, Arabic transliteration with diacritics. The existing `data.ts` entries are the format reference.
- Don't inline glosses in etymology templates (`Del latín «cirrus» (‘rizo’)`). Use a separate `definition`-type hint with the "originalmente significaba" pattern.
- Don't write hint templates that reveal substantive information before the spoiler — push the content *into* the spoiler.
