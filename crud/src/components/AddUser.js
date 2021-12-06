import React, { useState } from 'react';
import { addUser } from '../service/api';
import { Form, FormFieldset, FormLabel, FormInput } from '../styles/Form.style'
import { ButtonSubmit, ButtonCancel, ButtonEdit, ButtonReturn } from '../styles/Buttons.style'
import { MainContainer, MainWrapper, MainFieldset, MainHero } from '../styles/Main.style'

const initialValues = {
  nome: '',
  cpf: '',
  email: '',
  phone: '',
  cnpj: '',
  loan: '',
  revenue: '',
  address: ''
}

export const AddUser = () => {

  const [user, setUser ] = useState(initialValues);
  const { nome, cpf, email, phone, cnpj, loan, revenue, address } = user;
  // const history = useNavigate

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
    console.log(e.target.value)
  }

  const addUserDetails = async () => {
    await addUser(user);
  }

  return (
    <MainContainer>
      <MainWrapper>
        <MainFieldset width="70%">
          <h1>Cadastre-se</h1>
          <Form width="75%" onSubmit={() => this.onValueChange()}>
            <FormFieldset>
              <FormLabel for="nome">Nome</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name='nome' value={nome} type="text" placeholder="Insira nome de usuário" autoFocus="autofocus" required></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="cpf">CPF do solicitante</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name='cpf' value={cpf} type="text" placeholder="Insira documento válido" autoFocus="autofocus" required></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="email">Email para contato</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name='email' value={email} type="text" placeholder="john.doe@gmail.com" autoFocus="autofocus" required></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="phone">Telefone de contato</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name='phone' value={phone} type="text" placeholder="(11)99999-8888" autoFocus="autofocus" required></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="cnpj">CNPJ</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name='cnpj' value={cnpj} type="text" placeholder="Insira documento válido" autoFocus="autofocus" required></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="loan">Valor do Empréstimo</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name='loan' value={loan} type="text" placeholder="Digite valor do empréstimo" autoFocus="autofocus" required></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="revenue">Faturamento Anual da Empresa</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name='revenue' value={revenue} type="text" placeholder="Digite faturamento anual" autoFocus="autofocus" required></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="address">Endereço da Empresa</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name='address' value={address} type="text" placeholder="Insira nome da empresa" autoFocus="autofocus" required></FormInput>
            </FormFieldset>
            <div className="is-flex">
              <ButtonSubmit onClick={(e) => addUserDetails(e)} background="#FE761C" >Confirmar</ButtonSubmit>
              <ButtonCancel href="/" background="#EC644B" >X</ButtonCancel>
            </div>
          </Form>
        </MainFieldset>

        <MainHero width="30%">
          <ButtonEdit href="/manage" background="#2B2B2B" >Gerenciar Cadastros</ButtonEdit>
        </MainHero>

      </MainWrapper>
        <ButtonReturn href="/" background="transparent" >Voltar</ButtonReturn>
    </MainContainer>
  )
}
