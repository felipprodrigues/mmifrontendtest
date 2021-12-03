import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';


import {FormEdit, FormFieldsetEdit, FormLabel, FormInput } from '../styles/Form.style'
import { ButtonEdit, ButtonCancel, ButtonReturn } from '../styles/Buttons.style'
import { MainContainer } from '../styles/Main.style'

export const EditUser = (props) => {
  // const { users, removeUser } = useContext(GlobalContext);
  // const [ cnpj, setCnpj ] = useState('');
  // const [ emprestimo, setEmprestimo ] = useState('');
  // const [ fatura, setFatura ] = useState('');
  // const [ address, setAddress ] = useState('');
  const [selectedUser, setSelectedUser] = useState({
    id: '',
    name: ''
  });
  // const [ cpf, setCpf ] = useState('');
  // const [ contato, setContato ] = useState('');
  // const [ email, setEmail ] = useState('');

  const { users, editUser } = useContext(GlobalContext);
  const history = useNavigate();
  const currentUserId = props.match.params.id;

  const onSubmit = () => {


    history('/edit/:id');
  }

  const onChange = (e) => {

  }

  return (
    <>
      <MainContainer>
        <h1>Editar Dados Cadastrais</h1>
        {users.map(user => (
          <FormEdit onSubmit={onSubmit}>
            <FormFieldsetEdit>
              <FormLabel>{user.name}</FormLabel>
              <FormInput onChange={onChange} id="editForm" type="text" placeholder="John Doe" autoFocus="autofocus" required="required" aria-required="true" disabled/>
            </FormFieldsetEdit>
            <ButtonEdit href={`/edit/${user.id}`} type="submit" background="#2E7FED">Editar</ButtonEdit>
            <ButtonCancel  background="#EC644B" >Deletar</ButtonCancel>
            {/* onClick={() => removeUser(user.id)}  TO GO ON THE BUTTON CANCEL*/}
          </FormEdit>

        ))}
        <ButtonReturn href="/add" background="transparent" >Voltar</ButtonReturn>
      </MainContainer>
    </>
  )
}
