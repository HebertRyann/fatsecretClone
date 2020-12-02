import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons'
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Container type="button" {...rest} >
      {children}
    </Container>
  );
};

export default Button;