import { Fragment, useState } from "react";
import { IAnswerOption } from "../interfaces";
import { questions } from "./questions";
import "../../css/main_page.css"

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

  const HowCanIHelp = () => {
    window.location.href = "/help";
  };

  const Response = () => {
    return (
      <div>
        <h4>{feedback}</h4>
        <h4>
          You got {points}/{questionNumber + 1} right!
        </h4>
        {questionNumber < 4 && (
          <button onClick={NextQuestion}>Next Question</button>
        )}
        {questionNumber === 4 && (
          <button onClick={HowCanIHelp}>How Can I Help?</button>
        )}
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
