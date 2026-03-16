const quizData = [
  {
    question: "Which CLAUDE.md file is generated with the /init command and shared with other engineers?",
    options: [
      "CLAUDE.md",
      "CLAUDE.local.md",
      "~/.claude/CLAUDE.md",
      ".claude/config.md"
    ],
    correct: 0,
    explanation: "CLAUDE.md is the project-level file created with /init. It's committed to source control so the whole team shares the same instructions."
  },
  {
    question: "Where should you put personal instructions that you don't want to share with your team?",
    options: [
      "CLAUDE.md",
      "~/.claude/CLAUDE.md",
      "CLAUDE.local.md",
      ".gitignore"
    ],
    correct: 2,
    explanation: "CLAUDE.local.md is for personal instructions and customizations that aren't shared with other engineers."
  },
  {
    question: "Which file applies your instructions across ALL projects on your machine?",
    options: [
      "CLAUDE.md",
      "CLAUDE.local.md",
      "~/.config/claude.yml",
      "~/.claude/CLAUDE.md"
    ],
    correct: 3,
    explanation: "~/.claude/CLAUDE.md is the global file. Instructions here apply to every project you open with Claude Code on your machine."
  },
  {
    question: "What does the # shortcut do in Claude Code?",
    options: [
      "Adds a comment to your code",
      "Opens memory mode to edit CLAUDE.md files",
      "Clears the conversation history",
      "Starts a new terminal session"
    ],
    correct: 1,
    explanation: "The # command enters 'memory mode', which lets you add instructions to your CLAUDE.md files. Claude merges the instruction automatically."
  },
  {
    question: "How do you include a specific file's contents in your request to Claude?",
    options: [
      "Use the #include directive",
      "Use the /file command",
      "Use the @ symbol followed by the file path",
      "Copy and paste the file contents"
    ],
    correct: 2,
    explanation: "The @ symbol followed by a file path automatically includes that file's contents in your request. For example: @src/auth.ts"
  },
  {
    question: "What happens when you reference a file with @ in your CLAUDE.md?",
    options: [
      "The file is only loaded when you explicitly ask about it",
      "The file contents are included in every request automatically",
      "The file is copied into the CLAUDE.md",
      "A symlink is created to the file"
    ],
    correct: 1,
    explanation: "Files referenced with @ in CLAUDE.md are automatically included in every conversation, so Claude always has that context available."
  },
  {
    question: "What is the recommended first step when Claude's response is going in the wrong direction?",
    options: [
      "Wait for it to finish, then explain the error",
      "Type /clear to reset everything",
      "Press Escape to stop the current response",
      "Close and reopen Claude Code"
    ],
    correct: 2,
    explanation: "Press Escape to immediately stop the response. Then use # to save a memory about the correct approach, and continue with corrected information."
  },
  {
    question: "What does the /clear command do?",
    options: [
      "Deletes all files in the current directory",
      "Resets the conversation context",
      "Clears the CLAUDE.md file",
      "Removes all custom commands"
    ],
    correct: 1,
    explanation: "/clear resets the conversation context. It's useful when switching tasks so Claude starts fresh without prior conversation history."
  },
  {
    question: "How do custom commands accept dynamic input?",
    options: [
      "Using {input} placeholders",
      "Using $ARGUMENTS placeholder",
      "Using %args% variables",
      "Using <param> tags"
    ],
    correct: 1,
    explanation: "Custom commands use the $ARGUMENTS placeholder, which gets replaced with whatever text you provide after the command name."
  },
  {
    question: "After pressing Escape to stop a wrong response, what should you do before continuing?",
    options: [
      "Run /clear to start fresh",
      "Delete the CLAUDE.md file",
      "Use # to add a memory about the correct approach",
      "Restart Claude Code"
    ],
    correct: 2,
    explanation: "After stopping with Escape, use the # shortcut to save a memory about the correct approach. This teaches Claude for future interactions before you continue."
  },
  {
    question: "Where do you store custom slash commands that are shared with your whole team?",
    options: [
      "~/.claude/commands/",
      ".claude/commands/",
      "CLAUDE.md",
      ".github/commands/"
    ],
    correct: 1,
    explanation: ".claude/commands/ is the project-level directory for custom commands. Commit it to source control so every team member can use the same commands."
  },
  {
    question: "Where do you store personal custom slash commands that only you use?",
    options: [
      ".claude/commands/",
      "CLAUDE.local.md",
      "~/.claude/commands/",
      "~/.bashrc"
    ],
    correct: 2,
    explanation: "~/.claude/commands/ is the global directory for personal commands that apply across all your projects."
  },
  {
    question: "How do you invoke a project-level custom command called deploy.md?",
    options: [
      "/deploy",
      "/run deploy",
      "/project:deploy",
      "/cmd:deploy"
    ],
    correct: 2,
    explanation: "Project-level commands are invoked with the /project: prefix, e.g. /project:deploy."
  },
  {
    question: "What is the purpose of the /compact command?",
    options: [
      "Minifies your code",
      "Compresses conversation history to save context space",
      "Removes unused imports",
      "Shrinks image assets"
    ],
    correct: 1,
    explanation: "/compact summarizes the conversation history into a shorter form, freeing up context window space while preserving key information."
  },
  {
    question: "Which flag runs Claude Code in a non-interactive mode suitable for scripts and CI pipelines?",
    options: [
      "--silent",
      "--batch",
      "--print (-p)",
      "--headless"
    ],
    correct: 2,
    explanation: "The --print (or -p) flag outputs the response and exits immediately without interactive prompts, making it ideal for scripting and CI."
  },
  {
    question: "What does the /doctor command do?",
    options: [
      "Checks your code for bugs",
      "Validates your CLAUDE.md syntax",
      "Diagnoses your Claude Code installation and environment",
      "Runs your test suite"
    ],
    correct: 2,
    explanation: "/doctor checks your Claude Code installation, API key, and environment configuration to help diagnose setup issues."
  },
  {
    question: "What is the Model Context Protocol (MCP)?",
    options: [
      "A way to limit Claude's response length",
      "A standard for connecting Claude to external tools and data sources",
      "A file format for storing conversation history",
      "A protocol for encrypting CLAUDE.md files"
    ],
    correct: 1,
    explanation: "MCP (Model Context Protocol) is an open standard that lets Claude connect to external tools, APIs, databases, and services through MCP servers."
  },
  {
    question: "How do you add an MCP server to Claude Code?",
    options: [
      "Add it to CLAUDE.md with @mcp syntax",
      "Run claude mcp add <name> <command>",
      "Edit ~/.claude/config.json manually",
      "Use the /mcp install command"
    ],
    correct: 1,
    explanation: "Use `claude mcp add <name> <command>` to register an MCP server. Claude Code will start it automatically when needed."
  },
  {
    question: "What does the --allowedTools flag do when running Claude Code?",
    options: [
      "Lists all available tools",
      "Restricts which tools Claude is allowed to use in that session",
      "Grants admin permissions to all tools",
      "Disables built-in tools"
    ],
    correct: 1,
    explanation: "--allowedTools lets you whitelist specific tools for a session, which is useful for automation and security when you want Claude to only use certain capabilities."
  },
  {
    question: "What is a Claude Code hook?",
    options: [
      "A keyboard shortcut binding",
      "A shell command that runs automatically on specific Claude Code events",
      "A way to attach files to a conversation",
      "A plugin for VS Code"
    ],
    correct: 1,
    explanation: "Hooks are shell commands configured to run automatically at specific points in Claude's lifecycle, such as before or after a tool call."
  },
  {
    question: "Which hook event fires after every tool call Claude makes?",
    options: [
      "PostToolUse",
      "AfterTool",
      "OnToolComplete",
      "ToolFinished"
    ],
    correct: 0,
    explanation: "PostToolUse fires after each tool call. You can use it to log activity, run formatters, or trigger side effects after Claude uses a tool."
  },
  {
    question: "What does a non-zero exit code from a PreToolUse hook cause Claude to do?",
    options: [
      "Retry the tool call",
      "Block the tool call from executing",
      "Switch to a different model",
      "Clear the conversation"
    ],
    correct: 1,
    explanation: "If a PreToolUse hook exits with a non-zero code, Claude Code blocks the tool call. This lets you enforce policies before tools run."
  },
  {
    question: "How do you start Claude Code with a specific model?",
    options: [
      "--model <model-id>",
      "--use <model-id>",
      "--engine <model-id>",
      "--claude <model-id>"
    ],
    correct: 0,
    explanation: "Use the --model flag followed by the model ID, e.g. `claude --model claude-opus-4-6`."
  },
  {
    question: "What is the /init command used for?",
    options: [
      "Initializes a new git repository",
      "Creates a CLAUDE.md file tailored to your project",
      "Installs Claude Code globally",
      "Resets all Claude Code settings"
    ],
    correct: 1,
    explanation: "/init analyzes your project and generates a CLAUDE.md file with relevant context and instructions for Claude to follow in that project."
  },
  {
    question: "Which hook event fires before Claude executes a tool?",
    options: [
      "PreToolUse",
      "BeforeTool",
      "OnToolStart",
      "ToolRequest"
    ],
    correct: 0,
    explanation: "PreToolUse fires before each tool call. Exiting with a non-zero code blocks the tool; exiting with zero allows it to proceed."
  }
];

let userAnswers = {};

function renderQuiz() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";
  userAnswers = {};

  quizData.forEach((q, index) => {
    const questionEl = document.createElement("div");
    questionEl.className = "quiz-question";
    questionEl.innerHTML = `
      <span class="question-number">Question ${index + 1} of ${quizData.length}</span>
      <p>${q.question}</p>
      <div class="quiz-options">
        ${q.options.map((opt, optIndex) => `
          <label class="quiz-option" id="q${index}-opt${optIndex}" onclick="selectAnswer(${index}, ${optIndex})">
            <input type="radio" name="q${index}" value="${optIndex}">
            <span>${opt}</span>
          </label>
        `).join("")}
      </div>
      <div class="quiz-explanation" id="q${index}-explanation">${q.explanation}</div>
    `;
    container.appendChild(questionEl);
  });

  document.getElementById("quiz-submit").style.display = "inline-block";
  document.getElementById("quiz-results").style.display = "none";
}

function selectAnswer(questionIndex, optionIndex) {
  userAnswers[questionIndex] = optionIndex;

  const options = document.querySelectorAll(`[id^="q${questionIndex}-opt"]`);
  options.forEach((opt) => opt.classList.remove("selected"));
  document.getElementById(`q${questionIndex}-opt${optionIndex}`).classList.add("selected");
}

function submitQuiz() {
  let score = 0;
  const total = quizData.length;

  quizData.forEach((q, index) => {
    const userAnswer = userAnswers[index];
    const options = document.querySelectorAll(`[id^="q${index}-opt"]`);

    options.forEach((opt) => {
      opt.style.pointerEvents = "none";
      opt.classList.remove("selected");
    });

    document.getElementById(`q${index}-opt${q.correct}`).classList.add("correct");

    if (userAnswer !== undefined && userAnswer !== q.correct) {
      document.getElementById(`q${index}-opt${userAnswer}`).classList.add("incorrect");
    }

    if (userAnswer === q.correct) score++;

    document.getElementById(`q${index}-explanation`).classList.add("visible");
  });

  const resultsEl = document.getElementById("quiz-results");
  const feedbackEl = document.getElementById("quiz-feedback");

  document.getElementById("quiz-score").textContent = `${score} / ${total}`;

  if (score === total) {
    feedbackEl.innerHTML = "<p>Perfect score! You're a Claude Code expert.</p>";
  } else if (score >= total * 0.7) {
    feedbackEl.innerHTML = "<p>Great job! You know your way around Claude Code.</p>";
  } else if (score >= total * 0.4) {
    feedbackEl.innerHTML = "<p>Good start! Try again to fill in the gaps.</p>";
  } else {
    feedbackEl.innerHTML = "<p>Time to study up! Read the docs and try again.</p>";
  }

  resultsEl.style.display = "block";
  document.getElementById("quiz-submit").style.display = "none";
  resultsEl.scrollIntoView({ behavior: "smooth", block: "center" });
}

function resetQuiz() {
  renderQuiz();
  document.getElementById("quiz").scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", renderQuiz);
