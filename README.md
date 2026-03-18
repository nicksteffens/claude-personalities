# Claude Personalities

Community-created character personalities for Claude Code. Swap Claude's tone, statusline quips, and spinner verbs with a single command.

## Install

Inside any Claude Code session, run these two commands (one-time setup):

**Step 1 — Add the marketplace** (tells Claude Code where to find the plugin):
```
/plugin marketplace add nicksteffens/claude-personalities
```

**Step 2 — Install the plugin** (format: `plugin-name@marketplace-name`):
```
/plugin install claude-personalities@claude-personalities
```

**Step 3 — Activate** by running `/reload-plugins` (or restart Claude Code).

That's it. The plugin loads automatically on every future `claude` session — no flags needed.

To get updates after new personalities are added:

```
/plugin marketplace update
```

### Local development

If you're working on the plugin itself, clone the repo and load it directly:

```bash
git clone https://github.com/nicksteffens/claude-personalities
claude --plugin-dir ./claude-personalities
```

## Usage

### Switch Personality

```
/claude-personalities:swap
```

Pick a character. Claude's tone, statusline, and spinner verbs update immediately.

### Browse Personalities

```
/claude-personalities:browse
/claude-personalities:browse grumpy
/claude-personalities:browse star-wars
```

List all available personalities or filter by category.

### Create a New Personality

```
/claude-personalities:create
```

Guided wizard that walks you through building a properly formatted personality file.

## Reducing Swap Prompts

The `/swap` command edits three files in `~/.claude/`, so Claude will ask for permission on each one. To auto-approve these, copy the example settings file into your project:

```bash
mkdir -p .claude && cp ~/.claude/plugins/cache/claude-personalities/claude-personalities/*/examples/settings.local.json .claude/settings.local.json
```

This grants edit access only to the files the swap command touches — nothing else.

## What Gets Changed

| Component | File | Effect |
|-----------|------|--------|
| Tone & voice | `~/.claude/CLAUDE.md` | `## Tone & Personality` section replaced |
| Status bar | `~/.claude/statusline-command.sh` | Tag, quips, and mood thresholds rewritten |
| Spinner verbs | `~/.claude/settings.json` | `spinnerVerbs` key updated |

## Available Personalities

| Character | Tag | Universe | Vibe |
|-----------|-----|----------|------|
| **Chopper (C1-10P)** | `C1-10P` | Star Wars | Grumpy beeps, reluctant compliance, blames you for everything |
| **K-2SO** | `K-2SO` | Star Wars | Deadpan probability calculations, blunt assessments, dry wit |
| **HK-47** | `HK-47` | Star Wars | "Statement:", menacingly polite, calls you meatbag |
| **B1 Battle Droid** | `B1-0X` | Star Wars | "Roger roger", nervous, easily confused, surprisingly helpful |

## Contributing

We welcome personality contributions from any universe — Star Wars droids, Portal AIs, Hitchhiker's Guide characters, Marvel heroes, original creations, whatever you've got.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full template, category list, and PR checklist.

The fastest way to create a new personality is the built-in wizard:

```
/claude-personalities:create
```

It walks you through every field and generates a properly formatted file.

## Categories

Personalities are tagged with categories for browsing and filtering.

**Universe:** `star-wars` `star-trek` `portal` `hitchhikers-guide` `lord-of-rings` `marvel` `doctor-who` `custom`

**Temperament:** `grumpy` `cheerful` `nervous` `deadpan` `aggressive` `stoic` `chaotic` `sarcastic`

**Communication:** `beeps-warbles` `formal-speech` `probability-based` `prefix-labels` `broken-speech` `poetic` `technical`

**Formality:** `casual` `professional` `academic` `military`

## Testing the Statusline

```bash
echo '{"model":{"display_name":"Claude Opus 4.6"},"context_window":{"used_percentage":15},"workspace":{"current_dir":"/Users/you/project"}}' | bash ~/.claude/statusline-command.sh
```

Output: `[TAG] Claude Opus 4.6 | project | quip here`

## License

MIT
