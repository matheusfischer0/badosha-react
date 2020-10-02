import React from 'react';

import { Container, Image, Content } from './styles';

import plate from '../../../assets/Prato1.png';

const Restaurant: React.FC = () => {
  return (
    <Container>
      <Image src={plate} alt={''}></Image>
      <Content>
        <h2>Restaurante</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis
          nisi ac porttitor varius. Curabitur non ullamcorper lacus. Aliquam a
          suscipit urna. Donec vitae justo tempor, tempor dui eu, imperdiet
          massa. Morbi commodo sapien quis quam pharetra, sit amet sodales neque
          cursus. Curabitur volutpat venenatis varius. Nullam in mauris et orci
          bibendum fermentum at vitae justo.
        </p>
      </Content>
    </Container>
  );
};

export default Restaurant;
