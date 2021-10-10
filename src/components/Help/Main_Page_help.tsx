import { Fragment } from "react";
import "../../css/help.css";

export default function Help() {
  return (
    <Fragment>
      <h2 className="helpMessage">You can help!!!</h2>
      <div className="helpOptions">
        <button
          className="helpOption"
          onClick={() =>
            window.open(
              "https://www.cancerresearchuk.org/get-involved/volunteer"
            )
          }
        >
          Volunteer
        </button>
        <button
          className="helpOption"
          onClick={() =>
            window.open(
              "https://www.cancerresearchuk.org/get-involved/do-your-own-fundraising"
            )
          }
        >
          Do your own funraising
        </button>
        <button
          className="helpOption"
          onClick={() =>
            window.open("https://www.cancerresearchuk.org/get-involved/donate")
          }
        >
          Donate
        </button>
      </div>
    </Fragment>
  );
}
