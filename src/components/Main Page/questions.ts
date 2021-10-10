const questions = [
  {
    questionText: "How many people contract cancer in their life?",
    answerOptions: [
      { answerText: "1 in 2", isCorrect: true, feedback: "answer" },
      { answerText: "1 in 3", isCorrect: false, feedback: "bad" },
      { answerText: "1 in 4", isCorrect: false, feedback: "bad" },
      { answerText: "1 in 5", isCorrect: false, feedback: "bad" },
    ],
  },
  {
    questionText:
      "In the mid-70s cancer survival rate was 49%. Research has stepped forward. What is the rate today, do you think?",
    answerOptions: [
      { answerText: "56%", isCorrect: false, feedback: "bad" },
      { answerText: "68%", isCorrect: true, feedback: "good" },
      { answerText: "73%", isCorrect: false, feedback: "bad" },
      { answerText: "79%", isCorrect: false, feedback: "bad" },
    ],
  },
  {
    questionText: "How many types of cancer are there?",
    answerOptions: [
      { answerText: "20", isCorrect: false, feedback: "bad" },
      { answerText: "50", isCorrect: false, feedback: "bad" },
      { answerText: "100", isCorrect: false, feedback: "bad" },
      { answerText: "200", isCorrect: true, feedback: "good" },
    ],
  },
  {
    questionText:
      "Cancer can get anyone, even childer. Which of the children mortality rates from cancer is true, do you think?",
    answerOptions: [
      { answerText: "2%", isCorrect: false, feedback: "bad" },
      { answerText: "5%", isCorrect: false, feedback: "bad" },
      { answerText: "8%", isCorrect: false, feedback: "bad" },
      {
        answerText: "10%",
        isCorrect: true,
        feedback:
          "https://www.cancer.gov/about-cancer/understanding/statistics",
      },
    ],
  },
  {
    questionText:
      "In 2018, there were 18.1 million new cases. And yet scientists predict an inrease! Guess how many new cases are estimated  to arise yearly in 2040?",
    answerOptions: [
      { answerText: "1.45 million", isCorrect: false, feedback: "bad" },
      { answerText: "2.95 million", isCorrect: false, feedback: "bad" },
      { answerText: "14.5 million", isCorrect: false, feedback: "bad" },
      {
        answerText: "29.5 million",
        isCorrect: true,
        feedback:
          "https://www.cancer.gov/about-cancer/understanding/statistics",
      },
    ],
  },
];

export { questions };
