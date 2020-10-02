import React, { useRef } from 'react';
import Header from '../../components/Header';
import Jumbobox from '../../components/Jumbobox';

import { Container } from './styles';
import Restaurant from './Restaurant';
import History from './History';

const Home: React.FC = () => {
  const restaurantRef = React.useRef(null);

  return (
    <Container>
      <Header></Header>
      <Jumbobox></Jumbobox>
      <div ref={restaurantRef}>
        <Restaurant></Restaurant>
      </div>
      <History></History>
    </Container>
  );
};

export default Home;
