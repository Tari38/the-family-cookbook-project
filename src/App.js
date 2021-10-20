import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Users from "./user/Users";
import Auth from "./user/Auth";
import { AuthContext } from "./user/auth-context";
import NewRecipe from "./pages/NewRecipe";
import UpdateRecipe from "./pages/UpdateRecipe";
import Header from "./components/Header";
import WelcomePage from "./pages/WelcomePage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid) => {
    setIsLoggedIn(true);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/WelcomePage" exact>
          <WelcomePage />
        </Route>
        <Route path="/pages/NewRecipe" exact>
          <NewRecipe />
        </Route>
        <Route path="/pages/Recipe/:recipeId">
          <UpdateRecipe />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <>
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          userId: userId,
          login: login,
          logout: logout
        }}
      >
        <Router>
          <main>{routes}</main>
        </Router>
      </AuthContext.Provider>

      <div className="App" id="bg-image">
        <div>
          <Header />
        </div>
        <div>
          <WelcomePage />
        </div>
      </div>
    </>
  );
};

export default App;
