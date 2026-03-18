---
description: Generate a new personality file from a guided template
disable-model-invocation: true
---

# Create a New Personality

Walk the user through creating a properly formatted personality file for contribution.

## Instructions

1. **Gather character info** using `AskUserQuestion`. Ask these in batches:

**Batch 1 — Identity:**
Ask the user: "What character do you want to create a personality for? Give me the name, a one-line description of their vibe, and what universe/franchise they're from (or 'Original' if it's your own creation)."

2. **Gather communication style** using `AskUserQuestion`:

"How does this character communicate? Pick what fits best."
- Options from the categories list:
  - `beeps-warbles` — Droid sounds, translated beeps
  - `formal-speech` — Proper, structured language
  - `probability-based` — Statistics and odds
  - `prefix-labels` — "Statement:", "Query:", etc.
  - `broken-speech` — Fragmented, incomplete sentences
  - `poetic` — Flowery, literary language
  - `technical` — Jargon-heavy, precise
- Allow "Other" for custom styles
- multiSelect: true

3. **Gather temperament** using `AskUserQuestion`:

"What's their temperament? Pick all that apply."
- Options: `grumpy`, `cheerful`, `nervous`, `deadpan`, `aggressive`, `stoic`, `chaotic`, `sarcastic`
- multiSelect: true

4. **Gather formality** using `AskUserQuestion`:

"How formal are they?"
- Options: `casual`, `professional`, `academic`, `military`

5. **Generate the personality file**. Using the gathered info, write the complete personality file content:

- **tag**: Derive a 5-10 character tag from the character name (e.g., "GLaDOS" → "GLaDOS", "Marvin" → "MARVIN"). Ask the user to confirm or adjust.
- **categories**: Combine the universe tag (kebab-case the franchise name, or use `custom` for originals), temperament selections, communication style selections, and formality selection.
- **Tone**: Write 5-7 bullet points that capture the character's voice. Always include variants of:
  - "Still technically excellent — {trait} never compromises the quality of the work"
  - "Don't overdo it — one good {signature move} hits harder than five"
- **Spinner Verbs**: Generate 7 present-tense verbs that fit the character's theme.
- **Quips**: Generate 4 quips for each of the 4 moods (angry, grumpy, annoyed, fresh) — 16 total. At least 2 per mood should use `${CONTEXT}` for the context percentage. Keep them short (statusline-length).

6. **Show the user the generated content** in a code block so they can review it.

7. **Ask where to save** using `AskUserQuestion`:

"Where should I save this personality file?"
- Option 1: `the plugin's personalities/ directory` (save directly into the plugin — for maintainers)
- Option 2: Show the content and let the user copy it (for contributors who will PR)

8. **If saving**, write the file to the chosen location.

9. **Remind the contributor** to:
- Test it locally: `claude --plugin-dir ./claude-personalities` then `/claude-personalities:personality`
- Submit a PR if contributing to the community repo
- Check the PR checklist in CONTRIBUTING.md

## Quality Checks

Before generating, validate:
- Tag is 5-10 characters
- At least one category from each relevant facet
- Exactly 7 spinner verbs
- 4 moods × 4 quips = 16 quips total
- Quips are concise (under ~80 characters ideally)
- Tone has 5-7 bullets with the required "technically excellent" and "don't overdo it" lines
