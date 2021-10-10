import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Posts from "./components/Forum/Main_page";
import Help from "./components/Help/Main_Page";
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
          <button className="switchButton">
            <Link className="navlink" to="/help">
              How Can I Help
            </Link>
          </button>
        </nav>
        <main>
          <Switch>
            <Route exact path="/">
              <div>
                <h1>Play your part in beating cancer</h1>
                <Quiz />
              </div>
            </Route>
            <Route exact path="/forum">
              <section>
                <Posts />
              </section>
            </Route>
            <Route exact path="/help">
              <section>
                <Help />
              </section>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
