import styled from 'styled-components';
import React, {useRef} from 'react';

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

type Props = {
  valueForNote: string,
  onChangeValue: (noteContent: string) => void
}


const NoteSection: React.FunctionComponent<Props> =(props)=> {
  const note = props.valueForNote
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur2 = () => {
    if (refInput.current !== null) {
      props.onChangeValue(refInput.current.value);
    }
  };

  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input ref={refInput} type="text" placeholder="在这里输入备注" defaultValue={note} onBlur={onBlur2}/>
      </label>
    </Wrapper>
  );
}

export {NoteSection}