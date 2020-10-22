import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid #000;
  flex: 1;
  padding: 10px;
  color: rgba(255,255,255,0.8);


  & + div {
    margin-top: 15px;
  }
  input {
    padding: 5px;
    margin-left: 20px;
    border: 0;
    background: transparent;
    color: #fff;
    &::placeholder {
      color: rgba(255,255,255,0.8);
    }
  }
`;