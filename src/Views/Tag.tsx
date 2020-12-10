import {useParams,useHistory} from 'react-router-dom';
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
  const history = useHistory()
  const {findTagById, updateTag, deleteTag} = useTags();
  const tag = findTagById(parseFloat(tagId));
  return (
    <Layout>
      <Header>
        <Icon name='left'  className='bruce' onClick={()=>history.goBack()}/>
        <span>编辑标签</span>
        <Icon/>
      </Header>
      {tag ?
        <div>
          <Main>
            <Input title='标签名' placeholder='在这里输入标签名' value={tag.name}
                   onChange={(e) => {updateTag(tag.id, {name: e.target.value});}}/>
          </Main>
          <Center>
            <Space/>
            <Space/>
            <Space/>
            <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
          </Center>
        </div>
        : <Center>标签已删除</Center>}
    </Layout>
  );
}

export {Tag}