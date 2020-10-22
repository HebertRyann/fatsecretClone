import React from 'react';

import { Container, Content } from './styles';
import Input from '../../components/input';
import Button from '../../components/button';
import { FiLock, FiMail, FiUser, FiArrowRight } from 'react-icons/fi'

const signUp: React.FC = () => {

  return (
    <Container>
      <Content>
        <form >
          <Input name="name" placeholder="Nome" icon={FiUser} />
          <Input name="email" placeholder="Email" icon={FiMail} />
          <Input name="password" placeholder="Senha" icon={FiLock} />
          <Button
            type="submit"
            onSubmit={() => { }}
          >
            Cadastrar
          </Button>
          <a href="#" >
            Ir ao Login
            <FiArrowRight size={20} />
          </a>
        </form>
      </Content>
    </Container>
  );
}

export default signUp;