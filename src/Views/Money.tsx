import {Layout} from '../Components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from './Money/CategorySection';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
const Money: React.FunctionComponent = () => {

  const [record,setRecord]=useState({
    selectedTags: [] as string[],
    note: '',
    selectedCategory: '-' as ('-'|'+'),
    amount: 0
  })

  return (
    <MyLayout>
      <TagsSection
        valueForTags={record.selectedTags}
        onChangeValue={(selectedTags)=>setRecord({...record,selectedTags})}
      />
      <NoteSection
        valueForNote={record.note}
        onChangeValue={(note)=>setRecord({...record,note})}
      />
      <CategorySection
        valueForCategory={record.selectedCategory}
        onChangeValue={(selectedCategory)=>{setRecord({...record,selectedCategory})}}
      />
      <NumberPadSection
        valueFofAmount={record.amount}
        onChangeValue={(amount)=>setRecord({...record,amount})}
      />
    </MyLayout>
  );
}

export {Money}