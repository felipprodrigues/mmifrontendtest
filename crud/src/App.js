import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';
import { Registration } from './components/Registration'
import { AddUser } from './components/AddUser'
import { EditUser } from './components/EditUser'
import './index.css';

function App() {
  return (

    <div className="App">
      <GlobalProvider>
        <Router>
          <Routes>
              <Route exact path="/" element={ <Registration /> } />
              <Route path="/add" element={ <AddUser/> } />
              <Route path="/edit/:id" element={ <EditUser/> } />
          </Routes>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
