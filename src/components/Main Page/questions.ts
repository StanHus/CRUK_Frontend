const questions = [
  {
    questionText: "How many people get cancer in their life?",
    answerOptions: [
      {
        answerText: "1 in 2",
        isCorrect: true,
        feedback:
          "That a fact, according to Ahmad AS et al, British Journal of Cancer, 2015. Imagine that!",
      },
      {
        answerText: "1 in 3",
        isCorrect: false,
        feedback: "Close, but its even worse.",
      },
      {
        answerText: "1 in 4",
        isCorrect: false,
        feedback: "An optimistic response, but alas, the truth is much harsher",
      },
      {
        answerText: "1 in 5",
        isCorrect: false,
        feedback: "An optimistic response, but alas, the truth is much harsher",
      },
    ],
  },
  {
    questionText:
      "In the mid-70s cancer survival rate was 49%. Research has stepped forward. What is the rate today, do you think?",
    answerOptions: [
      {
        answerText: "56%",
        isCorrect: false,
        feedback:
          "Happy to report that we are making steady progress at an even better pace",
      },
      {
        answerText: "68%",
        isCorrect: true,
        feedback:
          "Thats right, a significant increase since the 70s, but we still got a long way to go",
      },
      {
        answerText: "73%",
        isCorrect: false,
        feedback:
          "That is quite optimistic, but I am sorry to say the progress is slower than that",
      },
      {
        answerText: "79%",
        isCorrect: false,
        feedback:
          "That is quite optimistic, but I am sorry to say the progress is slower than that",
      },
    ],
  },
  {
    questionText: "How many types of cancer are there?",
    answerOptions: [
      { answerText: "20", isCorrect: false, feedback: "Significantly more" },
      { answerText: "50", isCorrect: false, feedback: "Much more" },
      {
        answerText: "100",
        isCorrect: false,
        feedback: "Even more, unfortunately",
      },
      { answerText: "200", isCorrect: true, feedback: "Horrifying, isnt it?" },
    ],
  },
  {
    questionText:
      "Cancer can get anyone, even childen. Which of the child mortality rates from cancer is true, do you think?",
    answerOptions: [
      {
        answerText: "2%",
        isCorrect: false,
        feedback: "Unfortunately, much higher",
      },
      {
        answerText: "5%",
        isCorrect: false,
        feedback: "Unfortunately, much higher",
      },
      { answerText: "8%", isCorrect: false, feedback: "Unfortunately, higher" },
      {
        answerText: "10%",
        isCorrect: true,
        feedback:
          "According to Cancer.gov, this is the sad truth - the child mortality rates are 10%",
      },
    ],
  },
  {
    questionText:
      "In 2018, there were 18.1 million new cases. And yet scientists predict an inrease! Guess how many new cases are estimated  to arise yearly in 2040?",
    answerOptions: [
      {
        answerText: "1.45 million",
        isCorrect: false,
        feedback:
          "With the research funding being how it is right now, this is not even a possility",
      },
      {
        answerText: "2.95 million",
        isCorrect: false,
        feedback:
          "With the research funding being how it is right now, this is not even a possility",
      },
      {
        answerText: "14.5 million",
        isCorrect: false,
        feedback: "Significantly more, I am afraid",
      },
      {
        answerText: "29.5 million",
        isCorrect: true,
        feedback: "This truth is what we looking a at the momentt",
      },
    ],
  },
];

export { questions };
