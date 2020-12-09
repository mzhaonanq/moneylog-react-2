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
const onChange=(obj: Partial<typeof record>)=>{
    setRecord({...record,...obj})
}
  return (
    <MyLayout>
      <TagsSection
        valueForTags={record.selectedTags}
        onChangeValue={(selectedTags)=>onChange({selectedTags})}
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
      />
    </MyLayout>
  );
}

export {Money}