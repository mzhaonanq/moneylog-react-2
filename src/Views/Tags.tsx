import {Layout} from '../Components/Layout';
import React from 'react';
import {useTags} from '../useTags';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Icon} from '../Components/Icon';

const TagList = styled.ul`
  background: #ffffff;

  > li {
    line-height: 20px;
    margin-left :  16px;
    border-bottom: 1px solid #d5d5d5;
    > a{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px 12px 0;

    }
  }
`;

const Button = styled.button`
font-size: 18px;
  border:none;
  background: #767676;
  color: #ffffff;
  padding: 8px 12px;
`

const CenterWrapper = styled.div`
display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Space = styled.div`
  height: 32px;
`

const Tags: React.FunctionComponent = () => {
  const {tags} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>

          <li key={tag.id}>
            <Link to={'/tags/'+tag} >
            <span className='oneLine'>{tag}</span>
            <Icon name='right'/>
            </Link>
          </li>)}
      </TagList>
      <CenterWrapper>
        <Space/>
        <Space/>
        <Space/>
        <Button>新增标签</Button>
      </CenterWrapper>
    </Layout>
  );
}
export {Tags}