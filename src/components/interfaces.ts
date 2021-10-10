export interface IPost {
  id: number;
  username: string;
  post_text: string;
  date: string;
}

export interface IAnswerOption {
  answerText: string;
  isCorrect: boolean;
  feedback: string;
}
