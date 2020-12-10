import {useState} from 'react';
import {Id} from './lib/Id';

const defaultTags=   [
  {id: (new Id()).idValue, name: '衣'},
  {id: (new Id()).idValue, name: '食'},
  {id: (new Id()).idValue, name: '住'},
  {id: (new Id()).idValue, name: '行'}
]

const useTags=()=>{
const [tags, setTags] = useState<{ id: number, name: string }[]>(defaultTags);
return{tags,setTags}
}

export {useTags}
