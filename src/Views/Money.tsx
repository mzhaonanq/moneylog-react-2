import {Layout} from '../Components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from './Money/CategorySection';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';
import {useResultRecord} from '../hooks/useResutRecord';


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
const Money: React.FunctionComponent = () => {
  const {saveResultRecord} =useResultRecord()
  const [record,setRecord]=useState({
    selectedTagsId: [] as number[],
    note: '',
    selectedCategory: '-' as ('-'|'+'),
    amount: 0
  })
const onChange=(obj: Partial<typeof record>)=>{
    setRecord({...record,...obj})
}
const submitRecord=()=>{
    saveResultRecord(record)
}
  return (
    <MyLayout>
      <TagsSection
        valueForTagsId={record.selectedTagsId}
        onChangeValue={(selectedTagsId)=>onChange({selectedTagsId})}
      />
      <NoteSection
        valueForNote={record.note}
        onChangeValue={(note)=>onChange({note})}
      />
      <CategorySection
        valueForCategory={record.selectedCategory}
        onChangeValue={(selectedCategory)=>onChange({selectedCategory})}
      />
      <NumberPadSection
        valueFofAmount={record.amount}
        onChangeValue={(amount)=>onChange({amount})}
        onOk={submitRecord}
      />
    </MyLayout>
  );
}

export {Money}