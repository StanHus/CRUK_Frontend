import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Posts from "./components/Forum/Main_page";
import Help from "./components/Help/Main_Page_help";
import Quiz from "./components/Main Page/Quiz";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <nav className="allSwitchButtons">
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
              How Can I Help?
            </Link>
          </button>
        </nav>
        <main>
          <Switch>
            <Route exact path="/">
              <div>
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
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
