import React from 'react';
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {Money} from './Views/Money';
import {Statistics} from './Views/Statistics';
import {Tags} from './Views/Tags';
import {NoMatch} from './Views/NoMatch';
import {Tag} from './Views/Tag';



export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/money"/>
        </Route>
        <Route exact path="/tags">
          <Tags/>
        </Route>
        <Route exact path='/tags/:tagId'>
        <Tag/>
        </Route>
        <Route exact path="/money">
          <Money/>
        </Route>
        <Route exact path="/statistics">
            <Statistics/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
    </Router>
  );
}




