import React from 'react';

import './App.css';
import FormikForm from './Form';
import Axios from 'axios';

function App() {
  const submitForm = () => {
    console.log()

    axios.post('')
    .then((response) => {
      console.log(response)
    })
  }
  return (
    <div className="App">
      <FormikForm/>
      <FormkForm submit ={submitForm}>
      </FormkForm>
    </div>
  );
}

export default App;
