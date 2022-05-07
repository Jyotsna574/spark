import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Timeline from "./Components/Timeline/Timeline";
import Contact from "./Components/Contact/Contact";
import { data } from "./Components/Timeline/data";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/about-us" exact element={<About />}></Route>
        <Route
          path="/timeline"
          exact
          element={<Timeline data={data} />}
        ></Route>
        <Route path="/contact-us" exact element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
