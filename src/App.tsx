import React from 'react';
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Money from './Views/Money';
import Statistics from './Views/Statistics';
import Tags from './Views/Tags';
import NoMatch from './Views/NoMatch';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/money"/>
        </Route>
        <Route path="/tags">
          <Tags/>
        </Route>
        <Route path="/money">
          <Money/>
        </Route>
        <Route path="/statistics">
            <Statistics/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
    </Router>
  );
}




