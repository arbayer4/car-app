import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "./screens/Home/Home";
import CarCreate from "./screens/CarCreate/CarCreate";
import CarDetail from "./screens/CarDetail/CarDetail";
import CarEdit from "./screens/CarEdit/CarEdit";
import Cars from "./screens/Cars/Cars";
import SignIn from "./screens/SignIn/SignIn";
import SignUp from "./screens/SignUp/SignUp";
import SignOut from "./screens/SignOut/SignOut";
import { Route, Switch, Redirect } from "react-router-dom";
import { verifyUser } from "./services/users";

const App = () => {
  const [user, setUser] = useState(null);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  const clearUser = () => setUser(null);

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route path="/sign-up">
          <SignUp setUser={setUser} />
        </Route>
        <Route path="/sign-in">
          <SignIn setUser={setUser} />
        </Route>
        <Route path="/sign-out">
          <SignOut setUser={setUser} clearUser={clearUser} />
        </Route>
        <Route exact path="/cars">
          <Cars user={user} toggleFetch={toggleFetch} />
        </Route>
        <Route path="/create-car">
          {user ? <CarCreate user={user} /> : <Redirect to="/sign-up" />}
        </Route>
        <Route exact path="/cars/:id/edit">
          {user ? <CarEdit user={user} /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/cars/:id">
          <CarDetail user={user} setToggleFetch={setToggleFetch} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
