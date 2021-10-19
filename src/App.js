import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import WelcomePage from "./pages/WelcomePage";
import WelcomePageCont from "./pages/WelcomePageCont";
import Terms from "./pages/Terms";

import FORM_CREATE_ACCOUNT from "./components/forms/Form_CreateAccount";
import "./App.css";

function App() {
 
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Route path="/" exact>
            <WelcomePage />
          </Route>
          <Route path="/components/forms/Form_CreateAccount">
            <FORM_CREATE_ACCOUNT />
          </Route>
          <Route path="/pages/WelcomePageCont">
            <WelcomePageCont />
          </Route>
          <Route path="/pages/Terms">
            <Terms />
          </Route>
        </div>
      </Router>
    </>
  );
 }

export default App;
