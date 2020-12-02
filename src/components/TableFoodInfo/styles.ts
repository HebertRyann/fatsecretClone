import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  div {
    display: flex;
    align-items: center;
    h1 {
      margin-right: 10px;
      margin-left: 10px;
    }
  }
  table {
    font-size: 13px;
    text-align: center;
    th {
      padding: 5px;
    }
  }
`;
