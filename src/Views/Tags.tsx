import {Layout} from '../Components/Layout';
import React from 'react';
import {useTags} from '../useTags';

const Tags: React.FunctionComponent=()=> {
  const {tags,setTags}=useTags()
  return (
    <Layout>
      <ul>
        {tags.map(tag=><li key={tag}>{tag}</li>)}
      </ul>
    </Layout>
  );
}
export {Tags}