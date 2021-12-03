import React from 'react'
import { MainContainer, MainWrapperLandPage } from '../styles/Main.style';
import ButtonLoan from '../styles/Buttons.style'

export const Registration = () => {
  return (
    <>
      <MainContainer>
        <MainWrapperLandPage>
          <h1>Bem vindo à Money Money Invest</h1>
          <ButtonLoan href="/add">Solicitar Emprestimo</ButtonLoan>
        </MainWrapperLandPage>
      </MainContainer>
    </>
  )
}
