import Layout from '../Components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagsSection = styled.section`
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

const NoteSection = styled.section`
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

const CategorySection =styled.section`
  font-size: 24px;
  > ul{
    display: flex;
  background: #c4c4c4;
    > li{
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected{
        ::after{
          content:'';
          display:block;
          height: 3px;
          background: #333333;
          position: absolute;
          width: 100%;
          left: 0;
          bottom: 0;
        }
      }
    }
  }
`

const Money = () => {
  return (
    <Layout>
      <TagsSection>
        <ul>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ul>
        <button>新增标签</button>
      </TagsSection>
      <NoteSection>
        <label>
          <span>备注</span>
          <input type="text"/>
        </label>
      </NoteSection>
      <CategorySection>
        <ul>
          <li className="selected">收入</li>
          <li>支出</li>
        </ul>
      </CategorySection>
      <section>
        <div>100</div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>OK</button>
          <button>0</button>
          <button>.</button>
        </div>
      </section>
    </Layout>
  );
}

export default Money