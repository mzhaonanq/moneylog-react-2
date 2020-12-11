import styled from 'styled-components';
import React from 'react';
import {useTags} from '../../hooks/useTags';

const Wrapper = styled.section`
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-end;
  display: flex;
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
  valueForTagsId: number[],
  onChangeValue: (tagsArray: number[])=>void
}

const TagsSection: React.FunctionComponent<Props> = (props) => {
  const {tags,addTag}=useTags()
  const selectedTagsId = props.valueForTagsId

  const onToggleTag = (tagId: number) => {
    if (selectedTagsId.indexOf(tagId) >= 0) {
      props.onChangeValue(selectedTagsId.filter(t => t !== tagId));
    } else {
      props.onChangeValue([...selectedTagsId, tagId]);
    }
  };

  return (
    <Wrapper>
      <ul>
        {tags.map(tag =>
          <li key={tag.id}
              onClick={() => {onToggleTag(tag.id);}}
              className={selectedTagsId.indexOf(tag.id) >= 0 ? 'selected' : ''}>
            {tag.name}</li>)}
      </ul>
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  );
}

export {TagsSection}