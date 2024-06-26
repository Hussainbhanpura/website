import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import HomePage from './components/Homepage';
import DefaultLayout from './components/DefaultLayout';


const App = () =>  {
// useEffect(() => {
//     axios.get('/api/database-connection')
//       .then(response => console.log('Connected to database:', response))
//       .catch(error => console.error('Error connecting to database:', error));
//   }, []);

  return (
    <Router>
      <Routes>
      <Route path="/" element={<DefaultLayout/>}>
      <Route index element={<HomePage/>} />
      </Route>
      </Routes>
    </Router>
  );
}

export default App;
