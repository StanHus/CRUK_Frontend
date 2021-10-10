import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Posts from "./components/Forum/Main_page";
import Quiz from "./components/Main Page/Quiz";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Header /> */}
        <nav>
          {/* {state && 
                  <button className="switchButton">
                  <Link onClick={() => setState(false)} className = "navlink" to="/progress">Exercises</Link>
              </button>} */}
          <button className="switchButton">
            <Link className="navlink" to="/">
              Main Page
            </Link>
          </button>
          <button className="switchButton">
            <Link className="navlink" to="/forum">
              Forum
            </Link>
          </button>
        </nav>
        <main>
          <Switch>
            <Route exact path="/">
              <div>
                <h1>Play your part in beating cancer</h1>
                <h2>
                  My-my, look at you, visiting this website. Do you know that
                  just by clicking the link and getting here, you already done
                  more than 90% of people? Thats true! Thank you for that!
                </h2>
                <Quiz />
              </div>
            </Route>
            <Route exact path="/forum">
              <section>
                <Posts />
              </section>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
