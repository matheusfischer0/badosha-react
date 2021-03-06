import React, { useState } from 'react';

import { Container, Logo, Menu, MenuIcon, MenuContainer } from './styles';

import logoImage from '../../assets/logo_badosha_final_fundo_transp.png';
import { Link } from 'react-router-dom';
import PhoneMenu from '../PhoneMenu';
import { FiMenu } from 'react-icons/fi';

const Header: React.FC = () => {
  const [phoneMenuState, setPhoneMenuState] = useState(false);

  const showMenu = (state: boolean) => {
    setPhoneMenuState(state);
  };

  return (
    <Container>
      <Logo>
        <img src={logoImage} alt={'hello'}></img>
      </Logo>
      <Menu>
        <ul>
          <li>
            <Link to="/">O Restaurante</Link>
          </li>
          <li>
            <Link to="/">História</Link>
          </li>
          <li>
            <Link
              to="/"
              target="_blank"
              onClick={(event) => {
                event.preventDefault();
                window.open('/cardapio.pdf');
              }}
            >
              Cardápio
            </Link>
          </li>
          <li>
            <Link to="/">Localização</Link>
          </li>
        </ul>
      </Menu>
      <MenuIcon
        onClick={() => {
          showMenu(true);
        }}
      >
        <FiMenu size={35} fill={'#ddd'}></FiMenu>
      </MenuIcon>
      <PhoneMenu
        visible={phoneMenuState}
        cbHandleCloseMenu={() => {
          setPhoneMenuState(false);
        }}
      ></PhoneMenu>
    </Container>
  );
};

export default Header;
