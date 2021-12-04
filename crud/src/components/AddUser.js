import React, { useState, useContext } from 'react';
import { addUser } from '../service/api';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { Form, FormFieldset, FormLabel, FormInput } from '../styles/Form.style'
import { ButtonSubmit, ButtonCancel, ButtonEdit, ButtonReturn } from '../styles/Buttons.style'
import { MainContainer, MainWrapper, MainFieldset, MainHero } from '../styles/Main.style'


export const AddUser = () => {
  const initialValues = {
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    cnpj: '',
    emprestimo: '',
    faturamento: '',
    endereco: ''
  }

  const [user, setUser ] = useState(initialValues);
  const { nome, cpf, email, telefone, cnpj, emprestimo, faturamento, endereco } = user;
  const history = useNavigate

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
    console.log(e.target.value);
    console.log(user)
  }

  const addUserDetails = async () => {
    await addUser(user);
  }

  return (
    <MainContainer>
      <h1>Cadastre-se</h1>
      <MainWrapper>
        <MainFieldset width="50%">
          <Form>
            <FormFieldset>
              <FormLabel for="nome">Nome</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name="nome" value={nome} type="text" placeholder="Insira nome de usuário" autoFocus="autofocus" ></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="cpf">CPF do solicitante</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name="cpf" value={cpf}  type="text" placeholder="Insira nome de usuário" autoFocus="autofocus" ></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="email">Email para contato</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name="email" value={email} type="text" placeholder="Insira nome de usuário" autoFocus="autofocus" ></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="telefone">Telefone de contato</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name="telefone" value={telefone} type="text" placeholder="Insira nome de usuário" autoFocus="autofocus" ></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="cnpj">CNPJ</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name="cnpj" value={cnpj} type="text" placeholder="Insira nome de usuário" autoFocus="autofocus" ></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="emprestimo">Valor do Empréstimo</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name="emprestimo" value={emprestimo} type="text" placeholder="Insira nome de usuário" autoFocus="autofocus" ></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="faturamento">Faturamento Anual da Empresa</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name="faturamento"value={faturamento} type="text" placeholder="Insira nome de usuário" autoFocus="autofocus" ></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="endreço">Endereço da Empresa</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name="endereco" value={endereco} type="text" placeholder="Insira nome de usuário" autoFocus="autofocus" ></FormInput>
            </FormFieldset>

            <ButtonSubmit onClick={() => addUserDetails()} background="#2E7FED" >Confirmar</ButtonSubmit>
            <ButtonCancel href="/" background="#EC644B" >Cancelar</ButtonCancel>

          </Form>
        </MainFieldset>

        <MainHero width="50%">
          <ButtonEdit href="/edit/:" background="green">Editar Informações Cadastrais</ButtonEdit>
        </MainHero>

      </MainWrapper>
        <ButtonReturn href="/" background="transparent" >Voltar</ButtonReturn>
    </MainContainer>
  )
}
