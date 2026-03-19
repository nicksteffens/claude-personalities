---
description: Update the claude-personalities plugin to the latest version
disable-model-invocation: true
---

# Update Plugin

Fetch the latest version of the claude-personalities plugin from the marketplace.

## Instructions

1. **Run the marketplace update command**: Execute the following command in the user's shell:

```bash
claude /plugin marketplace update
```

If that fails, try:

```bash
claude plugin marketplace update
```

2. **Reload plugins**: After the update completes, tell the user to run `/reload-plugins` or restart Claude Code to pick up the changes.

3. **Check for new personalities**: Run the list-personalities script to show what's available. Find it by globbing for `**/claude-personalities/scripts/list-personalities.js` starting from `~/.claude/plugins/`. If found, run `node <path>/scripts/list-personalities.js` and display the results as a table so the user can see if any new personalities were added.

4. **Confirm**: Let the user know the update is complete and suggest they try `/claude-personalities:browse` to see what's new.
