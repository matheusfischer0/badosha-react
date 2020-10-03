import React, { useRef } from 'react';
import Header from '../../components/Header';
import Jumbobox from '../../components/Jumbobox';

import { Container } from './styles';
import Restaurant from './Restaurant';
import History from './History';

const Home: React.FC = () => {
  return (
    <Container>
      <Header></Header>
      <Jumbobox></Jumbobox>
      <Restaurant></Restaurant>
      <History></History>
    </Container>
  );
};

export default Home;
