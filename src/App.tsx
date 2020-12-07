import React from 'react';
import {HashRouter as Router, Redirect, Route, Switch, useLocation} from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Components/Nav';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  border: 1px solid red;
`
const Main = styled.main`
  flex-grow: 1;
`

export default function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
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
        </Main>
        <Nav/>
      </Wrapper>
    </Router>
  );
}

function Statistics() {
  return <h2>统计页</h2>;
}

function Tags() {
  return <h2>标签页</h2>;
}

function Money() {
  return <h2>记账页</h2>;
}
function  NoMatch(){
  let location = useLocation();
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}