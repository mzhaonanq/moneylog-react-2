import Nav from './Nav';
import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  border: 1px solid red;
`
const Main = styled.main`
  flex-grow: 1;
  overflow: auto;
`

const Layout = (props: any) => {
  return (
    <Wrapper>
      <Main>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  );
};

export default Layout