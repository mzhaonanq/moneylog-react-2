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
  const findTagById = (id: number) => tags.filter(t => t.id === id)[0];
  const findTagIndex = (id: number) => {
    const tag = findTagById(id);
    return tags.indexOf(tag);
  };
  const updateTag = (id: number, obj: { name: string }) => {
    setTags(tags.map(tag => tag.id === id ? {id, name: obj.name} : tag));
  };

  const deleteTag = (id: number) => {
    const tagIndex = findTagIndex(id);
    if (tagIndex >= 0) {
      let tagClone = JSON.parse(JSON.stringify(tags));
      tagClone.splice(tagIndex, 1);
      setTags(tagClone);
    }
  };
  return {tags, setTags, findTagById, updateTag, deleteTag};
}

export {useTags}
