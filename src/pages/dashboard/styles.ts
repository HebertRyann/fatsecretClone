import styled, { css, keyframes } from 'styled-components';
import food from '../../assets/food4.jpg';

interface BreakFastProps {
  show: boolean;
}
interface LaunchProps {
  show: boolean;
}
interface DinnerPops {
  show: boolean;
}

export const ContainerMain = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${food})  no-repeat center;
  height: 100vh;
  overflow: auto;
`;

export const ContainerFood = styled.div`
  display: flex;
`;

export const ContentFood = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  overflow: hidden;
`;

export const WrapperContainerMeal = styled.div`

  display: flex;
  flex-direction: column;
  background: rgba(0,0,0,0.7);
  border-radius: 8px;
  color: #fff;
  text-align: center;
  min-width: 600px;
  width: 750px;
  min-height: 214px;
  margin-bottom: 30px;
  padding: 10px 0;
  max-height: 214px;
  
`;

export const ContainerFoodInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border: 1px solid #000;
  width: 755px;
  table {
    flex: 1;
    font-size: 14px;
    text-align: center;
    th {
  
    }
  }
`;

export const WrapperTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  table {
    border-collapse: collapse;
  }
  td {
    svg {
      transition: 0.4s;
      &:hover {
        color: #e72320;
        cursor: pointer;
      }
    }
  }
`;

export const BreakFast = styled.div<BreakFastProps>`
  display: none;
  overflow: scroll;
  overflow-x: hidden;
  ${props =>
    props.show &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
  
      svg {
        position: fixed;
        right: 400px;
        top: 19%;
        transition: 0.5s;
        cursor: pointer;
      }
    `}
`;
export const ContentBreakFast = styled.div`
    width: 45%;
    height: 70%;

    border-radius: 5px;
    div {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 30px;
      margin-top: 30px;
      border-radius: 5px;
      height: 70px;
      background: #fff;
      color: #000;
      transition: 0.7s;
      &:hover {
        transform: translateX(30px);
      }
    }  
`;
export const Launch = styled.div<LaunchProps>`
  display: none;
  overflow: auto;
  ${props =>
    props.show &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
  
      
        svg {
          position: fixed;
          right: 400px;
          top: 19%;
          transition: 0.5s;
          cursor: pointer;
        }
      }
    `}
`;
export const Dinner = styled.div<DinnerPops>`
  display: none;
  overflow: auto;
  ${props =>
    props.show &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
  
      
        svg {
          position: fixed;
          right: 400px;
          top: 19%;
          transition: 0.5s;
          cursor: pointer;
        }
      }
    `}
`;

export const ContentLaunch = styled.div`
  width: 45%;
  height: 70%;
  border-radius: 5px;

  div {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    margin-top: 30px;
    border-radius: 5px;
    height: 70px;
    background: #fff;
    color: #000;
    transition: 0.7s;
    &:hover {
      transform: translateX(30px);
    }
  }
`;
export const ContentDinner = styled.div`
  width: 45%;
  height: 70%;
  border-radius: 5px;

  div {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    margin-top: 30px;
    border-radius: 5px;
    height: 70px;
    background: #fff;
    color: #000;
    transition: 0.7s;
    &:hover {
      transform: translateX(30px);
    }
  }
`;
export const ContentInfo = styled.div`
  display: flex;
  align-items: center;
  color: #000;
  table {
    font-size: 16px;
    text-align: center;
  }
`;

export const PorcetagemText = styled.div`
  p {
    display: flex;
    align-self: auto;
    justify-self: auto;
    position: absolute;
    font-size: 20px;
    top: 8.9%;
    right: 66.3%;
    color: #000;
  }
`;

export const MealSaved = styled.div`
  margin-top: 23%;

  h1 {
    margin-bottom: 20px;
  }
`;

export const ContentMealSaved = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin-bottom: 10px;
  select {
    background: #fff;
    height: 45px;
    padding-left: 10px;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
  button {
    background: #fff;
    border-radius: 5px;
    text-align: center;
    padding: 0 15px;
    transition: 0.55s;
    width: 180px;
    max-width: 180px;
    p {
      font-size: 15px;
    }
  }
  svg {
    cursor: pointer;
    transition: 0.5s;
    margin: 0 10px 0 5px;
    &:hover {
      color: #e72320;
    }
  }
`;

export const HeaderFoodBreakFast = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  div {
    display: flex;
    flex: 1;
    align-items: center;
    svg {
    margin: 0 0 0 10px;
  }
  }
  table {
    font-size: 13px;
    th{
      padding: 0 3px;
    }
  }
  > svg {
    margin: 0 0 0 50px;
  }
  svg {
    cursor: pointer;
  }
`;

export const HeaderFoodLaunch = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  div {
    display: flex;
    flex: 1;
    align-items: center;
    svg {
    margin: 0 0 0 10px;
  }
  }
  table {
    font-size: 13px;
    th{
      padding: 0 3px;
    }
  }
  > svg {
    margin: 0 0 0 50px;
  }
  svg {
    cursor: pointer;
  }
`;

export const HeaderFoodDinner = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  div {
    display: flex;
    flex: 1;
    align-items: center;
    svg {
    margin: 0 0 0 10px;
  }
  }
  table {
    font-size: 13px;
    th{
      padding: 0 3px;
    }
  }
  > svg {
    margin: 0 0 0 50px;
  }
  svg {
    cursor: pointer;
  }
`;
