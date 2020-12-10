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
  const findTagById = (id: number) => tags.filter(t => t.id === id);
  const findTagIndex = (id: number) => {
    const tag = findTagById(id)[0];
    return tags.indexOf(tag);
  };
  const updateTag = (id: number, obj: { name: string }) => {
    const tagIndex = findTagIndex(id);
    if (tagIndex >= 0) {
      let tagsClone = JSON.parse(JSON.stringify(tags));
      tagsClone.splice(tagIndex, 1, {id, ...obj});
      setTags(tagsClone)
    }
  };
  return {tags, setTags, findTagById, updateTag};
}

export {useTags}
