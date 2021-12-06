import React, { useState, useEffect } from 'react';
import { editUser, getUsers } from '../service/api';
import { useParams, Link } from 'react-router-dom';
import { Form, FormFieldset, FormLabel, FormInput } from '../styles/Form.style'
import { ButtonCancel, ButtonReturn } from '../styles/Buttons.style'
import { MainContainer, MainWrapper, MainFieldset } from '../styles/Main.style'


export const EditUser = () => {
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

  const [user, setUser] = useState(initialValues);
  const { nome, cpf, email, phone, cnpj, loan, revenue, address } = user;
  const { id } = useParams();
  // const history = useNavigate

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async() => {
    const response = await getUsers(id);
    setUser(response.data);
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })

  }

  const editUserDetails = async () => {
    await editUser(id, user);
  }

  return (
    <MainContainer>
      <h1>Edite os dados cadastrais</h1>
      <MainWrapper>
        <MainFieldset width="100%" className="has-full-width is-centered">
          <Form width="50%"  onSubmit={(e) => this.editUserDetails(e)}>
            <FormFieldset>
              <FormLabel for="nome">Nome</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name="nome" value={nome} type="text" placeholder="Insira nome de usuário" autoFocus="autofocus"></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="cpf">CPF do Solicitante</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name="cpf" value={cpf} type="text" placeholder="Insira documento válido" autoFocus="autofocus"></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="email">Email para contato</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name="email" value={email} type="text" placeholder="john.doe@gmail.com" autoFocus="autofocus"></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="phone">Telefone de contato</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name="phone" value={phone} type="text" placeholder="(11)99999-8888" autoFocus="autofocus"></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="cnpj">CNPJ</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name="cnpj" value={cnpj} type="text" placeholder="Insira documento válido" autoFocus="autofocus"></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="loan">Valor do Empréstimo</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name="loan" value={loan} type="text" placeholder="Digite valor do empréstimo" autoFocus="autofocus"></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="revenue">Faturamento Anual da Empresa</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name="revenue" value={revenue} type="text" placeholder="Digite faturamento anual" autoFocus="autofocus"></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="address">Endereço da Empresa</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name="address" value={address} type="text" placeholder="Insira nome da empresa" autoFocus="autofocus"></FormInput>
            </FormFieldset>
            <div className="is-flex has-margin-bottom">
              <Link className="button__edit" to={'/manage'} onClick={() => editUserDetails()} background="#2E7FED" >Salvar</Link>
              <ButtonCancel href="/" background="#EC644B" >X</ButtonCancel>
            </div>

          </Form>
        </MainFieldset>

      </MainWrapper>
      <ButtonReturn href="/" background="transparent" >Voltar</ButtonReturn>
    </MainContainer>
  )
}
