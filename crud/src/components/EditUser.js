import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TableCell, TableRow, Table, TableHead, TableBody, Button } from '@material-ui/core';
// import { makeStyles  } from '@material-ui/styles';
import { getUsers } from '../service/api';
import { ButtonReturn } from '../styles/Buttons.style'
import { MainContainer } from '../styles/Main.style'


// const useStyles = makeStyles({
//   table: {
//     width: '90%',
//     margin: '50px 0 0 50px'
//   },
//   thead: {
//     '& > *': {
//       fontSize: 20,
//       background: '#000000',
//       color: '#FFFFFF'
//     }
//   },
//   row: {
//     '& > *': {
//       fontSize: 18
//     }
//   }
// })

export const EditUser = () => {
const [users, setUsers] = useState([]);
// const classes = useStyles();

useEffect(() => {
  getAllUsers();
}, []);

// const deleteUserData = async (id) => {
//   await deleteUser(id);
//   getAllUsers();
// }

const getAllUsers = async () => {
  let response = await getUsers();
  setUsers(response.data);
}

return (
  <Table >
    <TableHead>
      <TableRow >
        <TableCell>ID</TableCell>
        <TableCell>Nome</TableCell>
        <TableCell>CPF</TableCell>
        <TableCell>Endereço</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Phone</TableCell>
        <TableCell>CNPJ</TableCell>
        <TableCell>Emprestimo</TableCell>
        <TableCell>Faturamento</TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {users.map((user) => (
        <TableRow >
          <TableCell>{user.id}</TableCell>
          <TableCell>{user.name}</TableCell>
          <TableCell>{user.cpf}</TableCell>
          <TableCell>{user.endereco}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>{user.phone}</TableCell>
          <TableCell>{user.cnpj}</TableCell>
          <TableCell>{user.emprestimo}</TableCell>
          <TableCell>{user.faturamento}</TableCell>
          <TableCell>
            <Button color="primary" variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit/${user._id}`}>Edit</Button>
            <Button color="secondary" variant="contained" >Delete</Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
)
}


// onClick={() => deleteUserData(user._id)}


// import React, { useState, useEffect } from 'react';
// import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
// import { getUsers, deleteUser } from '../service/api';
// import { Link } from 'react-router-dom';

// const useStyles = makeStyles({
//   table: {
//     width: '90%',
//     margin: '50px 0 0 50px'
//   },
//   thead: {
//     '& > *': {
//       fontSize: 20,
//       background: '#000000',
//       color: '#FFFFFF'
//     }
//   },
//   row: {
//     '& > *': {
//       fontSize: 18
//     }
//   }
// })


// const AllUsers = () => {
//   const [users, setUsers] = useState([]);
//   const classes = useStyles();

//   useEffect(() => {
//     getAllUsers();
//   }, []);

//   const deleteUserData = async (id) => {
//     await deleteUser(id);
//     getAllUsers();
//   }

//   const getAllUsers = async () => {
//     let response = await getUsers();
//     setUsers(response.data);
//   }

//   return (
//     <Table className={classes.table}>
//       <TableHead>
//         <TableRow className={classes.thead}>
//           <TableCell>Id</TableCell>
//           <TableCell>Name</TableCell>
//           <TableCell>Username</TableCell>
//           <TableCell>Email</TableCell>
//           <TableCell>Phone</TableCell>
//           <TableCell></TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {users.map((user) => (
//           <TableRow className={classes.row} key={user._id}>
//             <TableCell>{user._id}</TableCell>
//             <TableCell>{user.name}</TableCell>
//             <TableCell>{user.username}</TableCell>
//             <TableCell>{user.email}</TableCell>
//             <TableCell>{user.phone}</TableCell>
//             <TableCell>
//               <Button color="primary" variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit/${user._id}`}>Edit</Button>
//               <Button color="secondary" variant="contained" onClick={() => deleteUserData(user._id)}>Delete</Button>
//             </TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   )
// }

// export default EditUser;
