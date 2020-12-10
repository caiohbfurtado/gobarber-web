import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import * as S from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logo from '../../assets/logo.svg';

const SignIn: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <img src={logo} alt="Go Barber" />

        <form>
          <h1>Faça seu logon</h1>
          <Input type="text" name="email" placeholder="E-mail" icon={FiMail} />
          <Input
            type="password"
            name="password"
            placeholder="Senha"
            icon={FiLock}
          />

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="create">
          <FiLogIn /> Criar conta
        </a>
      </S.Content>
      <S.Background />
    </S.Container>
  );
};

export default SignIn;
