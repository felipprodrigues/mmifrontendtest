import styled from 'styled-components';

export const ButtonSubmit = styled.button`
  filter: brightness(1);
  position: relative;
  padding: 10px 15px;
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
  position: relative;
  padding: 10px 15px;
  margin: 0 0 0 15px;
  width: 100%;
  color: white;
  font-weight: bold;
  background: ${props => props.background};
  text-decoration: none;
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
    background-color: #E05C44;
}
`

