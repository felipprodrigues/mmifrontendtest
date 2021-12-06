import styled from 'styled-components';

export const ButtonSubmit = styled.button`
  filter: brightness(1);
  padding: .5em 1.2em;
  margin: 15px 0;
  width: 91%;
  color: white;
  font-weight: bolder;
  background: ${props => props.background};
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
  line-height: 1.5;
  text-align: center;
  transition: all .2s linear;

  &:hover {
    filter: brightness(0.9);
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
  transition: all .2s linear;


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

  text-align: center;
  transition: all .2s linear;

  margin: 0;
  margin-left: 1em;

  &:hover {
    background-color: ${props => props.backgroundHover};
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
  text-align: center;
  transition: all .2s linear;

  &:hover {
    filter: brightness(0.5);
  }
`

export const ButtonLoan = styled(ButtonReturn)`
  color: white;
  border-radius: 5px;
  border: none;
  font-weight: bolder;

  &:hover {
    filter: brightness(0.9);
  }
`

export default ButtonLoan
