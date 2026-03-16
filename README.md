# Claude Code Quiz

Do you think you know Claude Code? Let's see...

An interactive quiz to test your knowledge of [Claude Code](https://docs.anthropic.com/en/docs/claude-code) — Anthropic's CLI tool for working with Claude directly in your terminal.

## View the Site

Visit the live site at: **https://franzejr.github.io/claude-code-quiz/**

## What's Covered

25 questions across topics like:

- CLAUDE.md file locations (project, personal, global)
- The `#` memory shortcut
- File mentions with `@`
- Context control (`/clear`, Escape)
- Custom commands and `$ARGUMENTS`
- MCP servers
- Hooks (`PreToolUse`, `PostToolUse`)
- CLI flags (`--model`, `--print`, `--allowedTools`)
- `/init`, `/compact`, `/doctor`

## Adding Questions

Edit `quiz.js` and add an entry to the `quizData` array:

```js
{
  question: "Your question here?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  correct: 0, // index of the correct option
  explanation: "Why this answer is correct."
}
```

All questions are also listed in [QUESTIONS.md](./QUESTIONS.md) for easy reading and contribution.

> **Note:** `QUESTIONS.md` is auto-generated from `quiz.js` by a GitHub Action on every push. Do not edit it directly — changes will be overwritten.

## License

MIT
