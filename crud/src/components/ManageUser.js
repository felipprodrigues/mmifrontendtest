import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TableCell, TableRow, Table, TableHead, TableBody, Button } from '@material-ui/core';
import { ButtonReturn } from '../styles/Buttons.style'
import { getUsers, deleteUser } from '../service/api';

export const ManageUser = () => {
const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  }

  const deleteUserData = async(id) => {
    await deleteUser(id)
    getAllUsers();
  }

  return (
    <>
      <Table className="table__wrapper">
        <TableHead className="table__head">
          <TableRow >
            <TableCell className="table__tags">ID</TableCell>
            <TableCell className="table__tags">Nome</TableCell>
            <TableCell className="table__tags">CPF</TableCell>
            <TableCell className="table__tags">Endereço</TableCell>
            <TableCell className="table__tags">Email</TableCell>
            <TableCell className="table__tags">Phone</TableCell>
            <TableCell className="table__tags">CNPJ</TableCell>
            <TableCell className="table__tags">Emprestimo</TableCell>
            <TableCell className="table__tags">Faturamento</TableCell>
            <TableCell className="table__tags"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow >
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.nome}</TableCell>
              <TableCell>{user.cpf}</TableCell>
              <TableCell>{user.address}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.cnpj}</TableCell>
              <TableCell>{user.loan}</TableCell>
              <TableCell>{user.revenue}</TableCell>
              <TableCell>
                <Button color="primary" variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit/${user.id}`} >Edit</Button>
                <Button color="secondary" variant="contained" onClick={() => deleteUserData(user.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ButtonReturn href="/" background="transparent" className="is-relative">Voltar</ButtonReturn>
    </>
  )
}
