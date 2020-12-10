import {useParams} from 'react-router-dom';
import React from 'react';
import {useTags} from '../useTags';
import {Icon} from '../Components/Icon';
import {Layout} from '../Components/Layout';
import {Button} from '../Components/Button';
import styled from 'styled-components';
import {Input} from '../Components/Input';
import {Center} from '../Components/Center';
import {Space} from '../Components/Space';

type Params = {
  tagId: string
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px 0;
  background: #ffffff;
`;

const Main = styled.main`
  font-size: 16px;
  background: #ffffff;
  margin-top: 16px;
  padding: 0 16px;
`;

const Tag: React.FunctionComponent = () => {
  const {tagId} = useParams<Params>();
  const {findTagById} = useTags();
  const tag = findTagById(parseFloat(tagId))[0];
  return (
    <Layout>
      <Header>
        <Icon name='left'/>
        <span>编辑标签</span>
        <Icon/>
      </Header>
      <Main>
        <Input title='标签名' placeholder='在这里输入标签名'/>
      </Main>
      <Center>
        <Space/>
        <Space/>
        <Space/>
      <Button>删除标签</Button>
      </Center>
    </Layout>
  );
}

export {Tag}