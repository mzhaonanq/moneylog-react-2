import {Layout} from '../Components/Layout';
import React from 'react';
import {useTags} from '../useTags';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Icon} from '../Components/Icon';
import {Button} from '../Components/Button';
import {Space} from '../Components/Space';
import {Center} from '../Components/Center';

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


const Tags: React.FunctionComponent = () => {
  const {tags} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>

          <li key={tag.id}>
            <Link to={'/tags/'+tag.id} >
            <span className='oneLine'>{tag.id}:{tag.name}</span>
            <Icon name='right'/>
            </Link>
          </li>)}
      </TagList>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button>新增标签</Button>
      </Center>
    </Layout>
  );
}
export {Tags}