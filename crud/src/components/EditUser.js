import React from 'react'
import {Form, FormFieldset, FormLabel, FormInput } from '../styles/Form.style'
import { ButtonSubmit, ButtonCancel } from '../styles/Buttons.style'

export const EditUser = () => {
  return (
    <div>
      <Form>
        <FormFieldset>
          <FormLabel>Nome</FormLabel>
          <FormInput type="text" placeholder="Edite o nome aqui" autoFocus="autofocus" required="required" aria-required="true"></FormInput>
        </FormFieldset>
        <ButtonSubmit type="submit" background="#2E7FED">Editar</ButtonSubmit>
        <ButtonCancel href="/" background="#EC644B" >Cancelar</ButtonCancel>
      </Form>
    </div>
  )
}
