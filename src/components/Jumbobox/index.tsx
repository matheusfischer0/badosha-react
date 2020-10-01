import React from 'react';

import { Container, Subtitle } from './styles';

import backgroundImage from '../../assets/dish-first-image.jpg'
import logoName from '../../assets/header_logo.png'

const Jumbobox: React.FC = () => {
  return (
    <Container>
      <img className="backgroundImage" src={backgroundImage} alt="" />
      <Subtitle>
        <img src={logoName} alt="" />
        <text>O melhor restaurante</text>
      </Subtitle>
    </Container>
  );
}

export default Jumbobox;