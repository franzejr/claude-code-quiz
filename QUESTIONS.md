# Quiz Questions

All questions in the Claude Code Quiz. Edit `quiz.js` to add or change questions, then run `node generate-questions.js` to update this file.

---

**1. Which CLAUDE.md file is generated with the /init command and shared with other engineers?**

- **CLAUDE.md** ✓
- CLAUDE.local.md
- ~/.claude/CLAUDE.md
- .claude/config.md

> CLAUDE.md is the project-level file created with /init. It's committed to source control so the whole team shares the same instructions.

---

**2. Where should you put personal instructions that you don't want to share with your team?**

- CLAUDE.md
- ~/.claude/CLAUDE.md
- **CLAUDE.local.md** ✓
- .gitignore

> CLAUDE.local.md is for personal instructions and customizations that aren't shared with other engineers.

---

**3. Which file applies your instructions across ALL projects on your machine?**

- CLAUDE.md
- CLAUDE.local.md
- ~/.config/claude.yml
- **~/.claude/CLAUDE.md** ✓

> ~/.claude/CLAUDE.md is the global file. Instructions here apply to every project you open with Claude Code on your machine.

---

**4. What does the # shortcut do in Claude Code?**

- Adds a comment to your code
- **Opens memory mode to edit CLAUDE.md files** ✓
- Clears the conversation history
- Starts a new terminal session

> The # command enters 'memory mode', which lets you add instructions to your CLAUDE.md files. Claude merges the instruction automatically.

---

**5. How do you include a specific file's contents in your request to Claude?**

- Use the #include directive
- Use the /file command
- **Use the @ symbol followed by the file path** ✓
- Copy and paste the file contents

> The @ symbol followed by a file path automatically includes that file's contents in your request. For example: @src/auth.ts

---

**6. What happens when you reference a file with @ in your CLAUDE.md?**

- The file is only loaded when you explicitly ask about it
- **The file contents are included in every request automatically** ✓
- The file is copied into the CLAUDE.md
- A symlink is created to the file

> Files referenced with @ in CLAUDE.md are automatically included in every conversation, so Claude always has that context available.

---

**7. What is the recommended first step when Claude's response is going in the wrong direction?**

- Wait for it to finish, then explain the error
- Type /clear to reset everything
- **Press Escape to stop the current response** ✓
- Close and reopen Claude Code

> Press Escape to immediately stop the response. Then use # to save a memory about the correct approach, and continue with corrected information.

---

**8. What does the /clear command do?**

- Deletes all files in the current directory
- **Resets the conversation context** ✓
- Clears the CLAUDE.md file
- Removes all custom commands

> /clear resets the conversation context. It's useful when switching tasks so Claude starts fresh without prior conversation history.

---

**9. How do custom commands accept dynamic input?**

- Using {input} placeholders
- **Using $ARGUMENTS placeholder** ✓
- Using %args% variables
- Using <param> tags

> Custom commands use the $ARGUMENTS placeholder, which gets replaced with whatever text you provide after the command name.

---

**10. After pressing Escape to stop a wrong response, what should you do before continuing?**

- Run /clear to start fresh
- Delete the CLAUDE.md file
- **Use # to add a memory about the correct approach** ✓
- Restart Claude Code

> After stopping with Escape, use the # shortcut to save a memory about the correct approach. This teaches Claude for future interactions before you continue.

---

**11. Where do you store custom slash commands that are shared with your whole team?**

- ~/.claude/commands/
- **.claude/commands/** ✓
- CLAUDE.md
- .github/commands/

> .claude/commands/ is the project-level directory for custom commands. Commit it to source control so every team member can use the same commands.

---

**12. Where do you store personal custom slash commands that only you use?**

- .claude/commands/
- CLAUDE.local.md
- **~/.claude/commands/** ✓
- ~/.bashrc

> ~/.claude/commands/ is the global directory for personal commands that apply across all your projects.

---

**13. How do you invoke a project-level custom command called deploy.md?**

- /deploy
- /run deploy
- **/project:deploy** ✓
- /cmd:deploy

> Project-level commands are invoked with the /project: prefix, e.g. /project:deploy.

---

**14. What is the purpose of the /compact command?**

- Minifies your code
- **Compresses conversation history to save context space** ✓
- Removes unused imports
- Shrinks image assets

> /compact summarizes the conversation history into a shorter form, freeing up context window space while preserving key information.

---

**15. Which flag runs Claude Code in a non-interactive mode suitable for scripts and CI pipelines?**

- --silent
- --batch
- **--print (-p)** ✓
- --headless

> The --print (or -p) flag outputs the response and exits immediately without interactive prompts, making it ideal for scripting and CI.

---

**16. What does the /doctor command do?**

- Checks your code for bugs
- Validates your CLAUDE.md syntax
- **Diagnoses your Claude Code installation and environment** ✓
- Runs your test suite

> /doctor checks your Claude Code installation, API key, and environment configuration to help diagnose setup issues.

---

**17. What is the Model Context Protocol (MCP)?**

- A way to limit Claude's response length
- **A standard for connecting Claude to external tools and data sources** ✓
- A file format for storing conversation history
- A protocol for encrypting CLAUDE.md files

> MCP (Model Context Protocol) is an open standard that lets Claude connect to external tools, APIs, databases, and services through MCP servers.

---

**18. How do you add an MCP server to Claude Code?**

- Add it to CLAUDE.md with @mcp syntax
- **Run claude mcp add <name> <command>** ✓
- Edit ~/.claude/config.json manually
- Use the /mcp install command

> Use `claude mcp add <name> <command>` to register an MCP server. Claude Code will start it automatically when needed.

---

**19. What does the --allowedTools flag do when running Claude Code?**

- Lists all available tools
- **Restricts which tools Claude is allowed to use in that session** ✓
- Grants admin permissions to all tools
- Disables built-in tools

> --allowedTools lets you whitelist specific tools for a session, which is useful for automation and security when you want Claude to only use certain capabilities.

---

**20. What is a Claude Code hook?**

- A keyboard shortcut binding
- **A shell command that runs automatically on specific Claude Code events** ✓
- A way to attach files to a conversation
- A plugin for VS Code

> Hooks are shell commands configured to run automatically at specific points in Claude's lifecycle, such as before or after a tool call.

---

**21. Which hook event fires after every tool call Claude makes?**

- **PostToolUse** ✓
- AfterTool
- OnToolComplete
- ToolFinished

> PostToolUse fires after each tool call. You can use it to log activity, run formatters, or trigger side effects after Claude uses a tool.

---

**22. What does a non-zero exit code from a PreToolUse hook cause Claude to do?**

- Retry the tool call
- **Block the tool call from executing** ✓
- Switch to a different model
- Clear the conversation

> If a PreToolUse hook exits with a non-zero code, Claude Code blocks the tool call. This lets you enforce policies before tools run.

---

**23. How do you start Claude Code with a specific model?**

- **--model <model-id>** ✓
- --use <model-id>
- --engine <model-id>
- --claude <model-id>

> Use the --model flag followed by the model ID, e.g. `claude --model claude-opus-4-6`.

---

**24. What is the /init command used for?**

- Initializes a new git repository
- **Creates a CLAUDE.md file tailored to your project** ✓
- Installs Claude Code globally
- Resets all Claude Code settings

> /init analyzes your project and generates a CLAUDE.md file with relevant context and instructions for Claude to follow in that project.

---

**25. Which hook event fires before Claude executes a tool?**

- **PreToolUse** ✓
- BeforeTool
- OnToolStart
- ToolRequest

> PreToolUse fires before each tool call. Exiting with a non-zero code blocks the tool; exiting with zero allows it to proceed.

---
