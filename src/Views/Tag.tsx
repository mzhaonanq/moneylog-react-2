import {useParams} from 'react-router-dom'
import React from 'react';
import {useTags} from '../useTags';

type Params = {
  tagId: string
}

const Tag: React.FunctionComponent=()=>{
  const { tagId } = useParams<Params>()
  const {tags} = useTags()
  const tag = tags.filter(t=>t.id===parseFloat(tagId))[0]
  return(
    <div>{tag.name}</div>
  )
}

export {Tag}