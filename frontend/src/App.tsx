import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

const MessageContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 2px solid #007bff;
  border-radius: 5px;
  width: 300px;
  text-align: center;
`;

function App() {
  const [message, setMessage] = useState('');

  const fetchMotivationalMessage = async () => {
    try {
      const response = await axios.get('https://favqs.com/api/qotd');
      setMessage(response.data.quote.body);
    } catch (error) {
      console.error('Erro ao buscar a mensagem motivacional', error);
    }
  };

  return (
    <Container>
      <h1>Mensagem Motivacional do Dia</h1>
      <Button onClick={fetchMotivationalMessage}>Buscar Mensagem</Button>
      {message && <MessageContainer>{message}</MessageContainer>}
    </Container>
  );
}

export default App;
