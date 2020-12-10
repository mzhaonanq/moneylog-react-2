import {useParams} from 'react-router-dom';
import React from 'react';
import {useTags} from '../useTags';
import {Icon} from '../Components/Icon';
import {Layout} from '../Components/Layout';
import {Button} from '../Components/Button';

type Params = {
  tagId: string
}



const Tag: React.FunctionComponent = () => {
  const {tagId} = useParams<Params>();
  const {findTagById} = useTags();
  const tag = findTagById(parseFloat(tagId))[0];
  return (
    <Layout>
      <header>
        <Icon name='left'/>
        <span>编辑标签</span>
      </header>
      <main>
        <span>标签名</span>
        <input type="text" placeholder="在这里输入标签名"/>
      </main>
      <Button>删除标签</Button>
    </Layout>
  );
}

export {Tag}