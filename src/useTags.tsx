import {useEffect, useRef, useState} from 'react';
import {Id} from './lib/Id';

const useTags=()=> {
  const [tags, setTags] = useState<{ id: number, name: string }[]>([]);
  useEffect(() => {
  let tagsFromLocalStorage =JSON.parse(window.localStorage.getItem('tagsToLocalStorage') || '[]')
    console.log('在组件挂载后执行了');
    if(tagsFromLocalStorage.length===0){
      tagsFromLocalStorage = [
        {id: (new Id()).idValue, name: '衣'},
        {id: (new Id()).idValue, name: '食'},
        {id: (new Id()).idValue, name: '住'},
        {id: (new Id()).idValue, name: '行'}
      ];
    }
    setTags(tagsFromLocalStorage);
    console.log(tags);
  }, []);
  let count = useRef(0);

  useEffect(() => {
    count.current += 1;
    if (count.current > 1) {
      window.localStorage.setItem('tagsToLocalStorage', JSON.stringify(tags));
      console.log('tags更新后执行了');
      console.log(tags);
    }
  }, [tags]);

  console.log('进入useTags了');
  const findTagById = (id: number) => tags.filter(t => t.id === id)[0];
  // eslint-disable-next-line
  const findTagIndex = (id: number) => {
    const tag = findTagById(id);
    return tags.indexOf(tag);
  };
  const updateTag = (id: number, obj: { name: string }) => {
    setTags(tags.map(tag => tag.id === id ? {id, name: obj.name} : tag));
  };
  const deleteTag = (id: number) => {
   setTags(tags.filter(tag=>tag.id!==id))
  };
  const addTag =()=>{
    const tag = window.prompt('请输入标签名')
    if(tag===''){
      window.alert('标签名不可为空')
    }else if(tag!==null){
      setTags([...tags,{id:(new Id()).idValue,name:tag}])
    }
  }
  return {tags, setTags, findTagById, updateTag, deleteTag,addTag};
}

export {useTags}
