import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './components/card';
import styled from 'styled-components'
import { Layout } from './components/Layout';

const Box = styled.div`
  background-color: #000;
  color: #fff;
`

function App() {
  return (
      <Layout>
        <Box>
          <h1>Faça o login</h1>
        </Box>
        <label htmlFor="emailInput">Email</label>
        <input type="email" id='emailInput'/>

        <label htmlFor="passwordInput">Senha</label>
        <input type="password" id='passwordInput'/>

        <button>Entrar</button>

      </Layout>
  );
}

export default App;
