import Contact from "./components/contact/Contact";
import Home from "./components/Home/Home";
// import Navbar from "./components/Navbar/Navbar";
import Project from "./components/projects/Project";
import Skill from "./components/skills/Skill";

import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>

    {/* <Navbar /> */}
    <Home />
    <Skill />
    <Project />
    <Contact />
    </Router>

    </div>
  );
}

export default App;
