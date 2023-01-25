import React from 'react';
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import TrackList from "./TrackList";

export default function App() {


  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/track-list">
          <TrackList />
        </Route>
      </Switch>
    </div>
  );
}
