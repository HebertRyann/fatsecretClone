import styled, { keyframes } from 'styled-components';
import food from '../../assets/food2.jpg';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url(${food})  no-repeat center;
`;

const inputEntry = keyframes`
  0%{
    opacity: 0;
    transform: translateX(-100px);
  }
  100%{
    transform: translateX(0px);
    opacity: 1;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: -2px 2px 5px 4px rgba(0,0,0,0.7);
  height: 500px;
  width: 500px;
  background: rgba(0,0,0,0.2);
  transition: 0.9s;
    &:hover{
      background: rgba(0,0,0,0.6)
    }
    

  form {
    animation: ${inputEntry} 2s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
      margin-top: 40px;
      text-decoration: none;
      color: #fff;
      font-size: 18px;
      align-items: center;
      justify-content: center;

    }
  }
`;
