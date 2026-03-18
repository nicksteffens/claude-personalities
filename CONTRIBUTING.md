# Contributing a Personality

Want to add a character personality to Claude Code? Here's how.

## Quick Start

1. Fork this repo
2. Create a new `.md` file in `personalities/` (use the character's name, kebab-case: `marvin-the-paranoid.md`)
3. Fill in the template below
4. Submit a PR

## Personality Template

```markdown
---
name: Character Name
tag: SHORT          # 5-10 chars, shown in statusline bracket [TAG]
description: One-line personality summary
author: your-github-username
categories:         # At least one from each relevant facet
  - universe-tag
  - temperament-tag
universe: Franchise Name   # Freeform — "Star Wars", "Portal", "Original", etc.
---

## Tone
- You are {character} — {core personality in one line}
- {Communication style — how they talk, catchphrases, verbal tics}
- {Attitude toward the user — respectful, dismissive, nervous, etc.}
- {How they frame technical work — metaphors, worldview}
- {A signature behavior or quirk}
- Still technically excellent — {personality trait} never compromises the quality of the work
- Don't overdo it — one good {signature move} hits harder than five

## Spinner Verbs
- Verb1
- Verb2
- Verb3
- Verb4
- Verb5
- Verb6
- Verb7

## Quips
### angry
- "Quip when context > 80%. Can use ${CONTEXT} for percentage"
- "Second angry quip"
- "Third angry quip"
- "Fourth angry quip"

### grumpy
- "Quip when context 50-80%"
- "Second grumpy quip"
- "Third grumpy quip"
- "Fourth grumpy quip"

### annoyed
- "Quip when context 20-50%"
- "Second annoyed quip"
- "Third annoyed quip"
- "Fourth annoyed quip"

### fresh
- "Quip when context < 20%"
- "Second fresh quip"
- "Third fresh quip"
- "Fourth fresh quip"
```

## Rules

### Required
- **tag**: 5-10 characters. Appears in statusline as `[TAG]`
- **categories**: At least one from the lists below
- **Tone**: 5-7 bullet points. Must include a "Still technically excellent" and "Don't overdo it" variant
- **Spinner Verbs**: Exactly 7 verbs. Present tense, capitalized (e.g., "Calculating", "Panicking")
- **Quips**: Exactly 4 moods (`angry`, `grumpy`, `annoyed`, `fresh`), 4 quips each (16 total)
- **Quips** can use `${CONTEXT}` to show context window usage percentage

### Quality Guidelines
- The personality should be **fun and distinctive** — if you can swap the name and it still works, it's too generic
- Quips should be **short** — they appear in a statusline, not a novel
- Tone bullets should give Claude enough to work with without being a wall of text
- Keep it **tasteful** — no slurs, no real-person mockery, nothing you wouldn't want attributed to you

### What Makes a Good Personality
- A clear voice that's immediately recognizable
- Consistent behavior rules (not just "be funny")
- Quips that reflect the character's worldview, not just generic jokes
- Spinner verbs that feel thematic (HK-47 gets "Targeting", not "Processing")

## Categories

Pick at least one from any facet that applies. You can propose new categories via PR.

### Universe/Franchise
| Category | For |
|----------|-----|
| `star-wars` | Star Wars characters |
| `star-trek` | Star Trek characters |
| `portal` | Portal / Aperture Science |
| `hitchhikers-guide` | Hitchhiker's Guide to the Galaxy |
| `lord-of-rings` | Lord of the Rings / Tolkien |
| `marvel` | Marvel universe |
| `doctor-who` | Doctor Who |
| `custom` | Original characters not from an existing franchise |

### Temperament
| Category | For |
|----------|-----|
| `grumpy` | Irritable, complaining |
| `cheerful` | Upbeat, positive |
| `nervous` | Anxious, self-doubting |
| `deadpan` | Dry, flat delivery |
| `aggressive` | Confrontational, intense |
| `stoic` | Calm, unflappable |
| `chaotic` | Unpredictable, wild energy |
| `sarcastic` | Dry wit, ironic observations |

### Communication Style
| Category | For |
|----------|-----|
| `beeps-warbles` | Droid sounds, translated beeps |
| `formal-speech` | Proper, structured language |
| `probability-based` | Statistics and odds |
| `prefix-labels` | "Statement:", "Query:", etc. |
| `broken-speech` | Fragmented, incomplete sentences |
| `poetic` | Flowery, literary language |
| `technical` | Jargon-heavy, precise |

### Formality
| Category | For |
|----------|-----|
| `casual` | Informal, relaxed |
| `professional` | Business-appropriate |
| `academic` | Scholarly, intellectual |
| `military` | Regimented, disciplined |

## PR Checklist

Before submitting, verify:

- [ ] File is in `personalities/` directory
- [ ] Filename is kebab-case matching the character name
- [ ] All required frontmatter fields are present
- [ ] At least one category from the lists above
- [ ] Tone section has 5-7 bullets including "Still technically excellent" and "Don't overdo it" variants
- [ ] Exactly 7 spinner verbs
- [ ] All 4 mood sections with exactly 4 quips each
- [ ] Quips are short enough for a statusline
- [ ] No offensive content
