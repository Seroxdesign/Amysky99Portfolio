import ScrollToTop from "HelperFunctions/ScrollToTop";
import LinksPage from "Pages/LinksPage";
import Homepage from "Pages/Homepage";
import AboutPage from "Pages/AboutPage";
import AdultLinksPage from "Pages/AdultLinkPage";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import './App.css';

function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyCP5zSTntaIVk0cKvMTSOrlsY6QPE25K18",
    authDomain: "amysky99-211e5.firebaseapp.com",
    projectId: "amysky99-211e5",
    storageBucket: "amysky99-211e5.appspot.com",
    messagingSenderId: "891767935007",
    appId: "1:891767935007:web:e97a87b31aaab1eed7852a",
    measurementId: "G-KDP79RCXTS"
  };
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop> 
        <Routes>
          <Route exact path="/links" element={<LinksPage />} />
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/spicy-links" element={<AdultLinksPage />} />
          <Route exact path="/about" element={<AboutPage />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
