import React, {InputHTMLAttributes} from 'react';
import styled from 'styled-components';

const Label = styled.label`
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
  }`

type Props = {
  title: string,
}&InputHTMLAttributes<HTMLInputElement>
const Input: React.FunctionComponent<Props> = (props)=> {
  const {title,children,...rest}= props
return(
  <Label>
    <span>{title}</span>
    <input {...rest} />
  </Label>
)
}
export {Input}