import React, { ButtonHTMLAttributes, Children } from 'react';
import { IconBaseProps } from 'react-icons'
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <Container >
      <button>
        {children}
      </button>
    </Container>
  );
};

export default Button;