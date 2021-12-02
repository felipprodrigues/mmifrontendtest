import React from 'react';
import { Form, FormFieldset, FormLabel, FormInput } from '../styles/Form.style'
import { ButtonSubmit, ButtonCancel } from '../styles/Buttons.style'

export const AddUser = () => {
  return (
    <div>
      <h1>Add User</h1>
      <Form>
        <FormFieldset>
          <FormLabel>Nome</FormLabel>
          <FormInput type="text" placeholder="Insira nome de usuário" autoFocus="autofocus" required="required" aria-required="true"></FormInput>
        </FormFieldset>
        <ButtonSubmit type="submit" background="#2E7FED" >Enviar</ButtonSubmit>
        <ButtonCancel href="/" background="#EC644B" >Cancel</ButtonCancel>
      </Form>
    </div>
  )
}
