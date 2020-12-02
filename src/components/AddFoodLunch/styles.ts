import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 97.9%;
  height: 96%;
  background: rgba(0, 0, 0, 0.8);
  padding: 20px;

  table {
    text-align: center;
    background: #fff;
    list-style: none;
    width: 50%;
    height: 50%;
    padding: 10px;
  }
  form {
    margin-bottom: 5%;
    input {
      border-radius: 5px 0 0 5px;
      border: 0;
      width: 250px;
      padding: 13px;
      font-size: 14px;
    }
    button {
      background: #6effbf;
      padding: 13px;
      border-radius: 0px 5px 5px 0px;
      border: 0;
      font-size: 14px;
      & + button {
        border-radius: 5px;
        position: relative;
        left: 65%;
      }
    }
  }
`;
