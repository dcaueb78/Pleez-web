import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo_img.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector((state) => state.account.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Pleez" />
          <Link to="/dashboard">Início</Link>
          <Link to="/dashboard">Categorias</Link>
          <Link to="/dashboard">Pratos</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/caue@adorable.io.png"
              alt="Restaurante"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
