import React from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';

import * as S from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logo from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  function handleSumbit(data: any): void {
    console.log(data);
  }

  return (
    <S.Container>
      <S.Background />
      <S.Content>
        <img src={logo} alt="Go Barber" />

        <Form onSubmit={handleSumbit}>
          <h1>Faça seu cadastro</h1>
          <Input type="text" name="name" placeholder="Nome" icon={FiUser} />
          <Input type="text" name="email" placeholder="E-mail" icon={FiMail} />
          <Input
            type="password"
            name="password"
            placeholder="Senha"
            icon={FiLock}
          />

          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="create">
          <FiArrowLeft /> Voltar para Logon
        </a>
      </S.Content>
    </S.Container>
  );
};

export default SignUp;
