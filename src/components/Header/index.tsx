import React from 'react';

import { Container, Logo, Menu } from './styles';

import logoImage from '../../assets/logo_badosha_final_fundo_transp.png'
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src={logoImage} alt={'hello'}></img>
      </Logo>
      <Menu>
        <ul>
          <li>
            <Link className="headerLink" to="/">
              O Restaurante
            </Link>
          </li>
          <li>
            <Link className="headerLink" to="/">
              História
            </Link>
          </li>
          <li>  <Link className="headerLink" to="/">
            Cardápio
            </Link></li>
          <li>  <Link className="headerLink" to="/">
            Localização
            </Link></li>
        </ul>
      </Menu>
    </Container>
  );
}

export default Header;