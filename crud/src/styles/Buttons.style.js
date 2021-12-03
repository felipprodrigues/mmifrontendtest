import styled from 'styled-components';

export const ButtonSubmit = styled.button`
  filter: brightness(1);
  padding: .5em 1.2em;
  margin: 15px 0;
  width: 100%;
  color: white;
  font-weight: bold;
  background: ${props => props.background};
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
  font-weight: normal;
  line-height: 1.5;
  max-width: 150px;
  text-align: center;
  text-transform: capitalize;
  transition: all .2s linear;
  vertical-align: middle;
  white-space: nowrap;

  &:hover {
    background-color: #1771eb;
  }
  `

export const ButtonCancel = styled.a`
  filter: brightness(1);
  padding: .5em .75em;
  margin: 0 0 0 15px;
  width: 100%;
  color: white;
  background: ${props => props.background};
  text-decoration: none;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  line-height: 1.5;
  max-width: 150px;
  text-align: center;
  text-transform: capitalize;
  transition: all .2s linear;
  vertical-align: middle;
  white-space: nowrap;

  &:hover {
    background-color: #E05C44;
    filter: brightness(0.9);
  }
  `

export const ButtonEdit = styled.a`
  filter: brightness(1);
  padding: .5em 1.2em;
  margin: 0;
  color: white;
  min-width: 6em;
  background: ${props => props.background};
  text-decoration: none;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  line-height: 1.5;
  text-align: center;
  transition: all .2s linear;
  vertical-align: middle;
  margin: 0;
  margin-left: 1em;

  &:hover {
    background-color: #1771eb;
    filter: brightness(0.9);
  }
`

export const ButtonReturn = styled.a`
  filter: brightness(1);
  padding: .5em 1.2em;
  margin: 2em 0 0;
  color: black;
  min-width: 6em;
  background: ${props => props.background};
  text-decoration: none;
  border: 1px solid #DDD;
  border-radius: 3px;
  cursor: pointer;
  line-height: 1.5;
  text-align: center;
  transition: all .2s linear;
  vertical-align: middle;

  &:hover {
    filter: brightness(0.5);
  }
`

export const ButtonLoan = styled(ButtonReturn)`

`

export default ButtonLoan
