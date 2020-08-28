import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';
import Import from '../../pages/Import';
import Dashboard from '../../pages/Dashboard';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
       <Link to="/" >Listagem</Link>
       <Link to="/import" >Importar</Link>
      </nav>
    </header>
  </Container>
);

export default Header;