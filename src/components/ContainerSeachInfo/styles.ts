import styled from 'styled-components';

export const ContainerSearchFood = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid #000;
  width: 30vh;
  height: 30vh;
  right: 30vw;
  top: 26vh;
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    padding: 3px;
    border-bottom: 2px solid #000;
  }
  input {
    flex: 1;
    height: 30px;
    border: 0;
    background: transparent;
    font-size: 1rem;
    padding-left: 5px;
    color: #fff;
    outline: none;
    &::placeholder {
      color: #fff;
      text-align: center;
      font-size: 1rem;
    }
  }
  button {
    margin-top: 0px;
    width: 100px;
    height: 35px;
    border: 0;
    border-left: 2px solid #000;
    outline: none;
  }

  div {
    flex: 1;
  }
  visibility: hidden;
`;
