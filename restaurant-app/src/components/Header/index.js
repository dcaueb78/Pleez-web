import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo_img.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Pleez" />
          <Link to="/dashboard">INICIO</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong> Restaurante do Cauê</strong>
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
