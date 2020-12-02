import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 668px;
  padding: 10px;
  h1 {
    text-align: left;
    font-size: 1.7rem;
  }
  table {
    tr {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }
  }
`;

export const Button = styled.button`
  align-self: center;
  font-size: 1rem;
  background: #6effbf;
  margin-top: 20px;
  padding: 15px;
`;
