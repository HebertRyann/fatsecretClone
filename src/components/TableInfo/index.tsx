import React from 'react';

const TableInfo: React.FC = () => {
  return (
    <>
      <h1>Cafe da manah</h1>
      <table>
        <tbody>
          <tr>
            <th>Sodio </th>

            <th>Carboidrato</th>

            <th>Gorduras</th>
          </tr>
          <tr>
            <td>170 g</td>
            <td>200 g</td>
            <td>1000 g</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default TableInfo;
