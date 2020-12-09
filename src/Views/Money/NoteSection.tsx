import styled from 'styled-components';
import React, {useRef, useState} from 'react';

const Wrapper = styled.section`
  > label {
    display: flex;
    align-items: center;

    > span {
      white-space: nowrap;
      padding:0 16px;
      font-size: 14px;
    }

    > input {
      width: 100%;
      height: 72px;
      border: none;
      background: none;
    }
  }
`;

const NoteSection: React.FunctionComponent=()=> {
  const [note, setNote] = useState('');
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur2 = () => {
    if (refInput.current !== null) {
      setNote(refInput.current.value);
    }
  };

  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input ref={refInput} type="text" defaultValue={note} onBlur={onBlur2}/>
      </label>
    </Wrapper>
  );
}

export {NoteSection}