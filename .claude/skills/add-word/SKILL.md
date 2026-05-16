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
- ✅ `Es un {spoiler}` with spoiler `"calzado que no pasa del tobillo"` — visible is just "Es un _".
- ✅ `Significa «{spoiler}»` — visible is "Significa _".

The article `un`/`una` matches the gender of the noun *inside* the spoiler, not the answer — so a feminine answer can still take `Es un {spoiler}` if the spoiler starts with a masculine noun. (Mixing genders can even be a small misdirection.)

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

`difficulty` is the *expected number of guesses*, not the hint count:

- **1 — muy fácil**: very common word + transparent etymology + short. The first hint usually gives it away. E.g., `feo` (← lat. *foedus*), `fe` (← lat. *fides*).
- **2 — fácil**: common everyday word with a recognizable etymology. E.g., `peine`, `tejer`, `llave`.
- **3 — media**: common word with a non-obvious etymology, or a less-frequent word with clear roots. Most words land here. E.g., `zapato` (turco), `cigarro` (maya), `golpe` (griego).
- **4 — difícil**: surprising etymology that misleads (`tortuga` ← 'demonio'), unusual source language (`pizarra` ← vasco), or a long uncommon word.
- **5 — muy difícil**: rare word, very obscure etymon, or one where every clue still leaves a lot of plausible options.

When in doubt, lean to 3. Difficulty is meant to set expectations, not gatekeep.

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
