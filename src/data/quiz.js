export const quizQuestions = [
  {
    question: "When you see a bug in production, what's your first reaction?",
    options: [
      { text: "Check logs immediately 🔍", type: "senior" },
      { text: "Say 'It works on my machine' 🤷‍♂️", type: "junior" },
      { text: "Ask AI to fix it 🤖", type: "ai-dependent" },
      { text: "Start crying 😭", type: "noob" },
    ],
  },
  {
    question: "How do you name your variables?",
    options: [
      { text: "Meaningful names (camelCase) ✨", type: "senior" },
      { text: "x, y, data, temp 📝", type: "junior" },
      { text: "Whatever AI suggests 🤖", type: "ai-dependent" },
      { text: "a1, b2, test123 💀", type: "noob" },
    ],
  },
  {
    question: "How often do you commit code?",
    options: [
      { text: "Small, logical commits 📂", type: "senior" },
      { text: "Once at the end of the day 🕕", type: "junior" },
      { text: "Whenever I remember 🤷‍♂️", type: "noob" },
      { text: "AI handles my git 🤖", type: "ai-dependent" },
    ],
  },
  {
    question: "Favorite way to debug?",
    options: [
      { text: "Debugger & Breakpoints 🛑", type: "senior" },
      { text: "console.log() everywhere 🪵", type: "junior" },
      { text: "Asking ChatGPT 'What's wrong?' 🤖", type: "ai-dependent" },
      { text: "Restarting VS Code 🔄", type: "noob" },
    ],
  },
];

export const results = {
  senior: {
    title: "The Senior Developer 👑",
    description: "You are the Backbone! You write clean code, debug like a pro, and probably drink a lot of coffee.",
  },
  junior: {
    title: "The Junior Developer 🍼",
    description: "You're learning fast! 'It works on my machine' is your favorite quote, but you'll get there.",
  },
  "ai-dependent": {
    title: "The AI Dependent Ninja 🤖",
    description: "Your best friend is ChatGPT. You don't write code, you prompt it! Prompt Engineering is your superpower.",
  },
  noob: {
    title: "The Lost Soul 💀",
    description: "Are you sure you're a developer? Maybe try marketing? Just kidding, keep grinding!",
  },
};
