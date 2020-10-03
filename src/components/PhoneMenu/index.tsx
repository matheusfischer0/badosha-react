import React from 'react';

import { Link } from 'react-router-dom';

import { Menu } from './styles';
import { FiX } from 'react-icons/fi';
import { rgba } from 'polished';

interface PhoneMenuProps {
  visible: boolean;
  cbHandleCloseMenu: any;
}

const PhoneMenu: React.FC<PhoneMenuProps> = ({
  visible,
  cbHandleCloseMenu,
}) => {
  return (
    <Menu visible={visible}>
      <ul>
        <li className="closeMenu" onClick={cbHandleCloseMenu}>
          <FiX size={25} color={'#333'}></FiX>
        </li>
        <li className="firstMenu">
          <Link to="/">O Restaurante</Link>
        </li>
        <li>
          <Link to="/">História</Link>
        </li>
        <li>
          <Link to="/">Cardápio</Link>
        </li>
        <li>
          <Link to="/">Localização</Link>
        </li>
      </ul>
    </Menu>
  );
};

export default PhoneMenu;
