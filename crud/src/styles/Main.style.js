import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 100%;
  width: 100%;
  height: 90vh;

`

export const MainWrapper = styled.div`
  display: flex;
  max-width: 85%;
  width: 100%;
  height 80vh;
  border: 1px solid black;
`

export const MainWrapperLandPage = styled(MainWrapper)`
  display: flex;
  flex-direction: column;
`

export const MainFieldset = styled.div`
  max-width: 50%;
  width: ${props => props.width};
  background: cyan;
`

export const MainHero = styled.div`
  max-width: 50%;
  width: ${props => props.width};
  background: lightpink;
  display: flex;
  justify-content: center;
  align-items: center;
`

