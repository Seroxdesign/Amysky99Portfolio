
import HomePage from "./Pages/HomePage";
import LinksPage from "Pages/LinksPage";
import AboutPage from "Pages/AboutPage";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/links" element={<LinksPage />}></Route>
        <Route exact path="/about" element={<AboutPage />}></Route>
      </Routes>

    </Router>
  );
}

export default App;
