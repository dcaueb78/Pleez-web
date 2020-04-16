import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo_img.svg';

import { Container, Content, Profile } from './styles';
import { MdPowerSettingsNew } from 'react-icons/md';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.account.profile);

  const handleLogout = () => {
    dispatch(signOut());
  };

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Pleez" />
          <Link to="/dashboard">Início</Link>
          <Link to="/categorias">Categorias</Link>
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
            <button>
              <MdPowerSettingsNew
                onClick={handleLogout}
                size={32}
                color="#fff"
              />
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
