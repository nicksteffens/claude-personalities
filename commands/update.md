---
description: Update the claude-personalities plugin to the latest version
disable-model-invocation: true
---

# Update Plugin

Check for updates or migrate to the new marketplace.

## Instructions

1. **Check for deprecation**: Find the plugin root by globbing for `**/claude-personalities/scripts/list-personalities.js` starting from `~/.claude/plugins/`. Read the `.claude-plugin/plugin.json` file in the plugin root's parent directory. Check if it contains `"deprecated": true`.

2. **If deprecated**, display the following migration notice and STOP (do not proceed to any other steps):

```
## This plugin has moved!

The claude-personalities plugin is now distributed through a new marketplace.

To migrate (your active personality, custom files, and settings are untouched):

1. Remove the old marketplace:
   /plugin marketplace remove claude-personalities

2. Remove the old plugin (use /plugin interactive menu)

3. Add the new marketplace:
   /plugin marketplace add nicksteffens/claude-marketplace

4. Install the plugin from the new marketplace:
   /plugin install claude-personalities@nicksteffens

5. Reload plugins:
   /reload-plugins

Everything in ~/.claude/personalities/ (custom personalities), ~/.claude/CLAUDE.md (active tone),
~/.claude/statusline-command.sh (statusline), and ~/.claude/settings.json (spinner verbs) is
completely independent of the plugin installation — nothing changes about your current setup.
```

Do not proceed with any update steps. The migration notice is the entire output.

3. **If NOT deprecated**, proceed with the normal update flow:

   a. **Snapshot current personalities**: Run `node <path>/scripts/list-personalities.js` and save the list of personality names for comparison later.

   b. **Migrate custom personalities**: From the plugin root, run:
   ```bash
   git -C <plugin-root> ls-files --others --exclude-standard personalities/*.md
   ```
   If untracked `.md` files are found, copy them to `~/.claude/personalities/` and inform the user.

   c. **Refresh the marketplace index**:
   ```bash
   claude plugin marketplace update
   ```

   d. **Update the installed plugin**:
   ```bash
   claude plugin update claude-personalities@claude-personalities
   ```

   e. **List new personalities**: Run the list script again, compare to snapshot. Display results as a table with "NEW" markers for additions.

   f. **Remind to reload**: Tell the user to run `/reload-plugins` or restart Claude Code to pick up the changes, then try `/claude-personalities:browse` to explore.
