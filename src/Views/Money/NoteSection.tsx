import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
  > label {
    display: flex;
    align-items: center;

    > span {
      white-space: nowrap;
      padding:0 16px;
      font-size: 14px;
    }

    > input {
      width: 100%;
      height: 72px;
      border: none;
      background: none;
    }
  }
`;

const NoteSection: React.FunctionComponent=()=>{
  return(
    <Wrapper>
      <label>
        <span>备注</span>
        <input type="text"/>
      </label>
    </Wrapper>
  )
}

export {NoteSection}