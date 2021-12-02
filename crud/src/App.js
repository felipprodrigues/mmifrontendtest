import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Registration } from './components/Registration'
import { AddUser } from './components/AddUser'
import { EditUser } from './components/EditUser'
import GlobalStyles from './styles/GlobalStyles.style';
import './index.css';

function App() {
  return (

    <div className="App">
      <BrowserRouter>

        <Routes>
            <Route exact path="/" element={ <Registration /> } />
            <Route path="/add" element={ <AddUser/> } />
            <Route path="/edit/:id" element={ <EditUser/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
