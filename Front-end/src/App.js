import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ResearchStudy from "./components/ResearchStudy";
import AboutUs from "./components/AboutUs";
import SignIn from "./components/SignIn";

import AboutStudy from "./components/AboutStudy";
import PreQuestionnaire from "./components/PreQuestionnaire";
import PostAnalysis from "./components/PostAnalysis";
import PostQuestionnaire from "./components/PostQuestionnaire";
import Completion from "./components/Completion";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<ResearchStudy />}>
              {/* Add redirect */}
              <Route index element={<Navigate to="about-study" replace />} />
              {/* Set nested routes under /research */}
              <Route path="about-study" element={<AboutStudy />} />
              <Route path="pre-questionnaire" element={<PreQuestionnaire />} />
              <Route path="post-analysis" element={<PostAnalysis />} />
              <Route
                path="post-questionnaire"
                element={<PostQuestionnaire />}
              />
              <Route path="completion" element={<Completion />} />
            </Route>
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/signin" element={<SignIn />} />
            {/* More routes can be added here */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
