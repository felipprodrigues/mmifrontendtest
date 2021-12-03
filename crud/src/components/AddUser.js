import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { Form, FormFieldset, FormLabel, FormInput } from '../styles/Form.style'
import { ButtonSubmit, ButtonCancel, ButtonEdit, ButtonReturn } from '../styles/Buttons.style'
import { MainContainer, MainWrapper, MainFieldset, MainHero } from '../styles/Main.style'

export const AddUser = () => {
  // const [ cnpj, setCnpj ] = useState('');
  // const [ emprestimo, setEmprestimo ] = useState('');
  // const [ fatura, setFatura ] = useState('');
  // const [ address, setAddress ] = useState('');
  const [ nome, setNome ] = useState('');
  // const [ cpf, setCpf ] = useState('');
  // const [ contato, setContato ] = useState('');
  // const [ email, setEmail ] = useState('');

  const { addUser } = useContext(GlobalContext);
  const history = useNavigate();

  const onSubmit = () => {
    const newUser = {
      id: uuid(),
      name: nome
    }
    addUser(newUser)
    history('/edit/:id');
  }

  const onChange = (el) => {
    // let element = el.id;
    // setCnpj(element.target.value);
    // setEmprestimo(element.target.value);
    // setFatura(element.target.value);
    // setAddress(element.target.value);
    setNome(el.target.value);
    // setCpf(element.target.value);
    // setContato(element.target.value);
    // setEmail(element.target.value);
  }

  return (
    <MainContainer>
      <h1>Cadastre-se</h1>
      <MainWrapper>
        <MainFieldset width="50%">
          <Form onSubmit={onSubmit} >
            {/* <FormFieldset>
              <FormLabel for="cnpj">CNPJ</FormLabel>
              <FormInput onChange={onChange} id="cnpj" type="text" placeholder="Insira nome de usuário" autoFocus="autofocus" required="required" aria-required="true"></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="emprestimo">Valor do Empréstimo</FormLabel>
              <FormInput onChange={onChange} id="emprestimo"  type="text" placeholder="Insira nome de usuário" autoFocus="autofocus" required="required" aria-required="true"></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="faturamento">Faturamento Anual da Empresa</FormLabel>
              <FormInput onChange={onChange} id="faturamento" type="text" placeholder="Insira nome de usuário" autoFocus="autofocus" required="required" aria-required="true"></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="endreço">Endereço da Empresa</FormLabel>
              <FormInput onChange={onChange} id="endreço"  type="text" placeholder="Insira nome de usuário" autoFocus="autofocus" required="required" aria-required="true"></FormInput>
            </FormFieldset>*/}
            <FormFieldset>
              <FormLabel for="nome">Nome</FormLabel>
              <FormInput onChange={onChange} id="nome" value={nome} type="text" placeholder="Insira nome de usuário" autoFocus="autofocus" required="required" aria-required="true"></FormInput>
            </FormFieldset>
            {/* <FormFieldset>
              <FormLabel for="cpf">CPF do solicitante</FormLabel>
              <FormInput onChange={onChange} id="cpf"  type="text" placeholder="Insira nome de usuário" autoFocus="autofocus" required="required" aria-required="true"></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="telefone">Telefone de contato</FormLabel>
              <FormInput onChange={onChange} id="telefone" type="text" placeholder="Insira nome de usuário" autoFocus="autofocus" required="required" aria-required="true"></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="email">Email para contato</FormLabel>
              <FormInput onChange={onChange} id="email" type="text" placeholder="Insira nome de usuário" autoFocus="autofocus" required="required" aria-required="true"></FormInput>
            </FormFieldset> */}

            <ButtonSubmit type="submit" background="#2E7FED">Enviar</ButtonSubmit>
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
