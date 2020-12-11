import {Layout} from '../Components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from './Money/CategorySection';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';
import {useResultRecord} from '../hooks/useResultRecord';


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

const Wrapper= styled.div`
background: #c4c4c4;
`

const defaultRecord = {
  selectedTagsId: [] as number[],
  note: '',
  selectedCategory: '-' as ('-'|'+'),
  amount: 0
}

const Money: React.FunctionComponent = () => {
  const {saveResultRecord} =useResultRecord()
  const [record,setRecord]=useState(defaultRecord)


  const onChange=(obj: Partial<typeof record>)=>{
    setRecord({...record,...obj})
}
const submitRecord=()=>{
    if(saveResultRecord(record)){
      alert('保存成功')
      setRecord(defaultRecord)
    }
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
      <Wrapper>
      <CategorySection
        valueForCategory={record.selectedCategory}
        onChangeValue={(selectedCategory)=>onChange({selectedCategory})}
      />
      </Wrapper>
      <NumberPadSection
        valueForAmount={record.amount}
        onChangeValue={(amount) => onChange({amount})}
        onOk={submitRecord}
      />
    </MyLayout>
  );
}

export {Money}