#!/usr/bin/env node
// Generates QUESTIONS.md from the quizData in quiz.js.
// Run: node generate-questions.js

const fs = require("fs");
const vm = require("vm");

const src = fs.readFileSync("quiz.js", "utf8");
const sandbox = {};
const dataOnly = src
  .substring(0, src.indexOf("let userAnswers"))
  .replace("const quizData", "quizData");
vm.runInNewContext(dataOnly, sandbox);
const quizData = sandbox.quizData;

if (!quizData) {
  console.error("Could not find quizData in quiz.js");
  process.exit(1);
}

const lines = [
  "# Quiz Questions",
  "",
  "All questions in the Claude Code Quiz. Edit `quiz.js` to add or change questions, then run `node generate-questions.js` to update this file.",
  "",
  "---",
  "",
];

quizData.forEach((q, i) => {
  lines.push(`**${i + 1}. ${q.question}**`);
  lines.push("");
  q.options.forEach((opt, idx) => {
    const marker = idx === q.correct ? "✓" : " ";
    lines.push(`- ${marker === "✓" ? `**${opt}** ✓` : opt}`);
  });
  lines.push("");
  lines.push(`> ${q.explanation}`);
  lines.push("");
  lines.push("---");
  lines.push("");
});

fs.writeFileSync("QUESTIONS.md", lines.join("\n"));
console.log(`QUESTIONS.md updated with ${quizData.length} questions.`);
