import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
html,body{
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
}
#__next{
    width: 100%;
    height: 100%;
}
*{
    box-sizing: border-box;
    border: solid 1px black;
}
`;
