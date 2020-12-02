import React, { FormEvent, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiUser, FiLock, FiChevronRight } from 'react-icons/fi';


import { Container, Content } from './styles';
import Input from '../../components/input';
import Button from '../../components/button';

const Login: React.FC = () => {
  const history = useHistory();
  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();
    history.push('/dashboard');

  }, []);
  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit}>
          <Input name="email" placeholder="Email" icon={FiUser} />
          <Input name="password" type="password" placeholder="Senha" icon={FiLock} />
          <Button type="submit"> Entrar </Button>
          <Link to="/sigup">
            Criar Conta
            <FiChevronRight size={24} color="#fff" />
          </Link>
        </form>
      </Content>
    </Container>
  );
};

export default Login;
