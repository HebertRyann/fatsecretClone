import React from 'react';
import { FiSave } from 'react-icons/fi';

import { Container } from './styles';

interface TableFoodInfo {
  title: string | undefined;
  calories?: number;
  sodium?: number;
  fat?: number;
  carbohydrate?: number;
}

const TableFoodInfo: React.FC<TableFoodInfo> = ({
  title,
  calories,
  fat,
  sodium,
  carbohydrate,
}) => {
  return (
    <Container>
      <div>
        <h1>{title}</h1>
        <FiSave size={24} onClick={() => { }} />
      </div>
      <table>
        <thead>
          <tr>
            <th>Sodio </th>
            <th>Carboidrato</th>
            <th>Gorduras</th>
            <th>Calorias</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{sodium || 0}</td>
            <td>{carbohydrate || 0}</td>
            <td>{`${fat || 0} g`}</td>
            <td>{calories || 0}</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default TableFoodInfo;
