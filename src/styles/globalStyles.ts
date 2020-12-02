import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0px;
  padding: 0px;
  outline: 0px;
  border: 0;
  box-sizing: border-box;
}
body {
  color: #000;
  background: #000;
  -webkit-font-smoothing: antialiased;
}
body, input, button {
  font-family: 'Roboto slab', serif;
  font-size: 16px;
}


button {
  cursor: pointer;
}
`;
