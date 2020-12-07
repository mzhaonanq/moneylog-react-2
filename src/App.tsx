import React from 'react';
import {HashRouter as Router, Link, Redirect, Route, Switch, useLocation} from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
display:flex;
  height: 100vh;
  flex-direction: column;
  border:1px solid red;
`
const Main = styled.main`
flex-grow: 1;
`

const Nav = styled.nav`
        border:1px solid green;
>ul{
  display:flex;
  >li{
    width: 33.33%;
    text-align: center;
    padding: 16px;
  }
}
  
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
        <Nav>
          <ul>
            <li>
              <Link to="/tags">标签</Link>
            </li>
            <li>
              <Link to="/money">记账</Link>
            </li>
            <li>
              <Link to="/statistics">统计</Link>
            </li>
          </ul>
        </Nav>
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