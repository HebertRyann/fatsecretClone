import React, { useCallback, useState } from 'react';

import { Container } from './styles';

const ContainerMeal: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};
export default ContainerMeal;
