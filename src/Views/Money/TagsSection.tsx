import styled from "styled-components";
import React from 'react';

const Wrapper = styled.section`
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
  background: #ffffff;
padding: 12px 16px;
  > ul{
    display:flex;
    margin: 0 -12px;
    > li{
      background: #d9d9d9;
      border-radius: 18px;
      font-size: 14px;
      padding: 3px 18px;
      margin: 8px 12px ;
    }
  }

  > button {
    border: none;
    background: none;
    border-bottom: 1px solid #333;
    padding: 2px 4px;
    margin-top: 8px;
    color: #666
  }
`

const TagsSection: React.FunctionComponent = ()=>{
  return(
    <Wrapper>
      <ul>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
      <button>新增标签</button>
    </Wrapper>
  )
}

export {TagsSection}