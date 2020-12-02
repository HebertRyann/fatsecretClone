import React, { FormEvent, useCallback } from 'react';

import { Container, Content } from './styles';
import Input from '../../components/input';
import Button from '../../components/button';
import { FiLock, FiMail, FiUser, FiChevronLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom';

const SignUp: React.FC = () => {
  const history = useHistory();
  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();
    history.push('/')
  }, []);
  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome" icon={FiUser} />
          <Input name="email" placeholder="Email" icon={FiMail} />
          <Input name="password" type="password" placeholder="Senha" icon={FiLock} />
          <Button
            type="submit"
          >
            Cadastrar
          </Button>
          <Link to="/" >
            <FiChevronLeft size={20} />
            Voltar ao Login
          </Link>
        </form>
      </Content>
    </Container>
  );
}

export default SignUp;