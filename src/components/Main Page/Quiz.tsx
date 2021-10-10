import { Fragment, useState } from "react";
import { IAnswerOption } from "../interfaces";
import { questions } from "./questions";

export default function Quiz() {
  const [points, setPoints] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [answered, setAnswered] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);

  const ProcessAnswer = (feedback: string, isCorrect: boolean) => {
    isCorrect ? setPoints(points + 1) : setPoints(points);
    setFeedback(feedback);
    setAnswered(true);
  };

  const NextQuestion = () => {
    setQuestionNumber(questionNumber + 1);
    setAnswered(false);
  };

  const Response = () => {
    return (
      <div>
        <h4>{feedback}</h4>
        <h4>You got {points} right!</h4>
        <button onClick={NextQuestion}>Next Question</button>
      </div>
    );
  };

  return (
    <Fragment>
      <h2>Test Your Knowledge on Cancer</h2>
      <div>
        <h4>{questions[questionNumber].questionText}</h4>
        {!answered &&
          questions[questionNumber].answerOptions.map(
            (answerOption: IAnswerOption) => (
              <div>
                <button
                  onClick={() =>
                    ProcessAnswer(answerOption.feedback, answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              </div>
            )
          )}
        {answered && Response()}
      </div>
    </Fragment>
  );
}
