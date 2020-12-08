import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


const Wrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  background: #ffffff;
  > ul {
    display: flex;

    > li {
      width: 33.3333%;
      text-align: center;
      padding: 4px 0;

      > a {
      display: flex;
      flex-direction: column;
      align-items: center;
        > .icons {
          width: 24px;
          height: 24px;
          fill:grey;
        }
      }
      & .selected { 
        color: #000000;
        > .icons{
          fill:#000000;
        }
      }
    }
  }

`
const Nav =()=>{
  return(
    <Wrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="tags"/>
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money"/>
            记账
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="statistics"/>
            统计
          </NavLink>
        </li>
      </ul>
    </Wrapper>
  )
}

export default Nav