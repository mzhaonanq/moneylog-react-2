import styled from 'styled-components';
import React, {ChangeEventHandler, FocusEventHandler, useRef} from 'react';
import {Input} from '../../Components/Input';

const Wrapper = styled.section`
padding: 14px 0;
`;

type Props = {
  valueForNote: string,
  onChangeValue: (noteContent: string) => void
}


const NoteSection: React.FunctionComponent<Props> =(props)=> {
  const note = props.valueForNote
  const onChange2: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChangeValue(e.target.value)
  };
  return (
    <Wrapper>
      <Input type='text' title='备注' placeholder='在这里添加备注' value={note} onChange={(event)=>onChange2(event)}/>
    </Wrapper>
  );
}

export {NoteSection}