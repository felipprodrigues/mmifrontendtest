import React from 'react'
import { MainContainer, MainContainerHome } from '../styles/Main.style';
import ButtonLoan from '../styles/Buttons.style'

export const Registration = () => {
  return (
    <>
      <MainContainer className="has-full-height has-background-color">
        <MainContainerHome>
          <h1>Bem vindo à Money Money Invest</h1>
          <h3 className="has-text-left">
            Empréstimo para empresas
            <br></br>
            Investimento para investidores
          </h3>
          <ButtonLoan background="rgb(254, 118, 28)" href="/add">Solicitar Empréstimo</ButtonLoan>
        </MainContainerHome>
      </MainContainer>
    </>
  )
}
