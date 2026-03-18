---
description: Browse available personalities by category or list all
disable-model-invocation: true
---

# Browse Personalities

List available personalities, optionally filtered by category.

## Instructions

1. **Find the plugin root**: Use the Glob tool to search for `**/claude-personalities/personalities/*.md` starting from `~/.claude/plugins/` to locate the installed plugin's personality files. If that fails, try globbing from the current working directory in case the plugin is loaded via `--plugin-dir`. Read each file's YAML frontmatter. Extract: `name`, `tag`, `description`, `categories`, `universe`, and `author`.

2. **Check for filter argument**: The user may pass a category filter via `$ARGUMENTS` (e.g., `/claude-personalities:browse grumpy` or `/claude-personalities:browse star-wars`). If `$ARGUMENTS` is not empty, only show personalities whose `categories` array includes that value.

3. **Display results** grouped by universe. For each personality, show:

```
### {universe}

| Character | Tag | Description | Categories |
|-----------|-----|-------------|------------|
| **{name}** | `{tag}` | {description} | {categories as badges} |
```

4. **If no filter was provided**, also show a list of available categories at the bottom:

```
**Filter by category:** `grumpy` `cheerful` `nervous` `deadpan` `aggressive` `stoic` `chaotic` `sarcastic` `star-wars` `star-trek` `portal` `hitchhikers-guide` `custom` ...
```

5. **If filter returns no results**, say so and list available categories.

6. **Show count**: "Showing {n} personalities" (or "Showing {n} personalities matching `{filter}`").

## Available Categories

### Universe/Franchise
`star-wars`, `star-trek`, `portal`, `hitchhikers-guide`, `lord-of-rings`, `marvel`, `doctor-who`, `custom`

### Temperament
`grumpy`, `cheerful`, `nervous`, `deadpan`, `aggressive`, `stoic`, `chaotic`, `sarcastic`

### Communication Style
`beeps-warbles`, `formal-speech`, `probability-based`, `prefix-labels`, `broken-speech`, `poetic`, `technical`

### Formality
`casual`, `professional`, `academic`, `military`
