import styled from 'styled-components';

export const Form = styled.form`
  border: 0;
`
export const FormFieldset = styled.fieldset`
  border: 0;
  margin: 0;
  min-width: 0;
  padding: 0;
  position: relative;

  & * {
    transition: all .3s linear;
  }
`

export const FormLabel = styled.label`
  color: #6B7C93;
  display: block;
  font-weight: bold;
  margin: 0 0 8px;
  min-height: 20px;
`

export const FormInput = styled.input`
  width: 100%;
  height: 40px;

  &::placeholder {
    color: #959CA6;
    padding-left: 2em
  }
`
