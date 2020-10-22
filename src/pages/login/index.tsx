import React from 'react';
import { FiUser, FiLock } from 'react-icons/fi';


import { Container, Content } from './styles';
import Input from '../../components/input';
import Button from '../../components/button';

const Login: React.FC = () => {
  return (
    <Container>
      <Content>
        <form>
          <Input name="name" placeholder="Nome" icon={FiUser} />
          <Input name="password" placeholder="Senha" icon={FiLock} />
          <Button type="submit">Entrar</Button>
          <a href="#" >
            Esqueci minha senha
          </a>
          <a href="#">
            Criar Conta
          </a>
        </form>
      </Content>
    </Container>
  );
};

export default Login;
