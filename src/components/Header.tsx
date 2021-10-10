import { Fragment } from "react";
import "../css/main.css";

export default function Header() {
  return (
    <Fragment>
      <div className="headerAllComponenets">
        <p className="headerText">Play your part in beating cancer</p>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/4/43/Cancer_Research_UK.svg/1200px-Cancer_Research_UK.svg.png"
          onClick={() =>
            (window.location.href = "https://www.cancerresearchuk.org")
          }
          alt="CRUK Logo"
          className="entry"
          width="20%"
        />

        <img
          src="https://www.mca.org.uk/wp-content/uploads/sites/60/2021/05/Upside.png"
          onClick={() => (window.location.href = "https://theupside.io")}
          alt="CRUK Logo"
          className="entry"
          width="20%"
        />
      </div>
    </Fragment>
  );
}
