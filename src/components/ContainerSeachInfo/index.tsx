import React from 'react';

import { ContainerSearchFood } from './styles';

const ContainerSeachInfo: React.FC = () => {
  return (
    <ContainerSearchFood>
      <form>
        <input placeholder="Digite um Alimento" />
        <button type="button">Pesquisar</button>
      </form>
      <div>
        <h1>Arroz</h1>
        <h1>Arroz</h1>
        <h1>Arroz</h1>
        <h1>Arroz</h1>
        <h1>Arroz</h1>
      </div>
    </ContainerSearchFood>
  );
};
export default ContainerSeachInfo;
