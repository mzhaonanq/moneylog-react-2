import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


const Wrapper = styled.nav`
  border: 1px solid green;
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul {
    display: flex;
    > li {
      width: 33.3333%;
      text-align: center;
      padding: 4px 0;
      display: flex;
      flex-direction: column;
      align-items: center;

      > .icons {
        width: 24px;
        height: 24px;
      }

      > .selected {
        color: coral;
      }
    }
  }

`
const Nav =()=>{
  return(
    <Wrapper>
      <ul>
        <li>
          <Icon name="tags"/>
          <NavLink to="/tags" activeClassName="selected">标签</NavLink>
        </li>
        <li>
          <Icon name="money"/>
          <NavLink to="/money" activeClassName="selected">记账</NavLink>
        </li>
        <li>
          <Icon name="statistics"/>
          <NavLink to="/statistics" activeClassName="selected">统计</NavLink>
        </li>
      </ul>
    </Wrapper>
  )
}

export default Nav