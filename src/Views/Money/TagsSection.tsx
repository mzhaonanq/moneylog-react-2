import styled from 'styled-components';
import React from 'react';
import {useTags} from '../../useTags';

const Wrapper = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  background: #ffffff;
  padding: 12px 16px;

  > ul {
    display: flex;
    margin: 0 -12px;

    > li {
      background: #d9d9d9;
      border-radius: 18px;
      font-size: 14px;
      padding: 3px 18px;
      margin: 8px 12px;

      &.selected {
        background: red;
      }
    }
  }

  > button {
    border: none;
    background: none;
    border-bottom: 1px solid #333;
    padding: 2px 4px;
    margin-top: 8px;
    color: #666
  }
`
type Props={
  valueForTags: string[],
  onChangeValue: (tagsArray: string[])=>void
}

const TagsSection: React.FunctionComponent<Props> = (props) => {
  const {tags,setTags}=useTags()
  const selectedTags = props.valueForTags
  const onToggleTag = (tag: string) => {
    if (selectedTags.indexOf(tag) >= 0) {
      props.onChangeValue(selectedTags.filter(t => t !== tag));
    } else {
      props.onChangeValue([...selectedTags, tag]);
    }
  };
  const addTag =()=>{
    const tag = window.prompt('请输入标签名')
    if(tag===''){
      window.alert('标签名不可为空')
    }else if(tag!==null){
      setTags([...tags,tag])
    }
  }
  return (
    <Wrapper>
      <ul>
        {tags.map(tag =>
          <li key={tag}
              onClick={() => {onToggleTag(tag);}}
              className={selectedTags.indexOf(tag) >= 0 ? 'selected' : ''}>
            {tag}</li>)}
      </ul>
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  );
}

export {TagsSection}