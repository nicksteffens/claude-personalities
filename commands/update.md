---
description: Update the claude-personalities plugin to the latest version
disable-model-invocation: true
---

# Update Plugin

Fetch the latest version of the claude-personalities plugin from the marketplace.

## Instructions

1. **Snapshot current personalities**: Find the list-personalities script by globbing for `**/claude-personalities/scripts/list-personalities.js` starting from `~/.claude/plugins/`. Use the most recent version (highest version number in the path). Run `node <path>/scripts/list-personalities.js` and save the list of personality names for comparison later.

2. **Update the marketplace index**: Execute the following command in the user's shell:

```bash
claude plugin marketplace update
```

3. **Update the installed plugin**: Execute the following command to pull the latest plugin version:

```bash
claude plugin update claude-personalities@claude-personalities
```

4. **List new personalities**: Find the list-personalities script again (glob fresh — the path will have a new version number after update). Run it and compare against the snapshot from step 1. Display results as a table:

```
### Updated Personalities

| Character | Tag | Universe | Description |
|-----------|-----|----------|-------------|
| **{name}** | `{tag}` | {universe} | {description} |
```

If there are new personalities not in the original snapshot, highlight them with a "NEW" marker. If no new personalities, say "You're up to date — no new personalities added."

5. **Remind to reload**: Tell the user to run `/reload-plugins` or restart Claude Code to pick up the changes, then try `/claude-personalities:browse` to explore.
