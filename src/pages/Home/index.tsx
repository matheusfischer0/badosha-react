import React from 'react';
import Header from '../../components/Header';
import Jumbobox from '../../components/Jumbobox';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header></Header>
      <Jumbobox></Jumbobox>
    </Container>
  );
};

export default Home;
