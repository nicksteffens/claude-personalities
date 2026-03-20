# Claude Personalities Plugin

Community personality packs for Claude Code — character-driven tone, statusline quips, and spinner verbs.

## Repo Structure

```
personalities/       # Official personality .md files (kebab-case filenames)
commands/            # Plugin slash commands (browse, swap, create, update)
scripts/             # Node.js tooling (list, validate, generate-index)
.claude-plugin/      # Plugin manifest and marketplace config
```

Custom (user-created) personalities live in `~/.claude/personalities/` and are not part of this repo.

## Personality File Format

Every `.md` file in `personalities/` must have:

**Frontmatter** (YAML between `---` fences):
- `name` — Character name (required)
- `tag` — 3-10 character statusline tag, e.g. `GLaDOS` (required)
- `description` — One-line summary (required)
- `author` — GitHub username
- `universe` — Franchise name or "Original"
- `categories` — Array, at least one from the category lists in CONTRIBUTING.md

**Sections** (all required):
- `## Tone` — 5-7 bullet points. Must include "Still technically excellent" and "Don't overdo it" variants
- `## Spinner Verbs` — Exactly 7 present-tense verbs
- `## Quips` — 4 subsections (`### angry`, `### grumpy`, `### annoyed`, `### fresh`), exactly 4 quips each

## Commands

| Command | What it does |
|---------|-------------|
| `npm test` | Lint all personality files — run before committing (also `npm run validate`) |
| `npm run list` | Output JSON index of all personalities (official + custom) |
| `npm run generate` | Regenerate PERSONALITIES.md (automated by CI on personality changes) |

Always run `npm test` before committing changes to personality files.

## Commit Conventions

This repo uses [Conventional Commits](https://www.conventionalcommits.org/), enforced by commitlint in CI (lints PR titles).

```
feat: add GLaDOS personality       # new personality
fix: correct HK-47 quip typo      # corrections
docs: update category list         # documentation
chore: maintenance tasks           # tooling, config
```

## CI Workflows

- **commitlint** — Lints PR title against conventional commit format
- **validate-personalities** — Runs `validate-personalities.js` on changed personality files
- **validate-plugin** — Checks `.claude-plugin/` manifest compliance
- **generate-index** — Auto-regenerates `PERSONALITIES.md` when personalities change
- **release** — Auto-releases on merge to main (via release-it, conventional changelog)

## Package Manager

Uses `npm` (no volta, no yarn). Node 20.

## PR Guidelines

- PR titles must be conventional commits (they're linted)
- Run `npm test` locally before pushing
- See CONTRIBUTING.md for the full personality template and PR checklist
- `PERSONALITIES.md` is auto-generated — do not edit manually
