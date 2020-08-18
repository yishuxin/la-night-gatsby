import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"
import "typeface-abril-fatface"
import "typeface-cormorant-garamond"

import { colors } from "./utils"
import grain from "../images/grain.jpg"

const GlobalStyles = createGlobalStyle`
 ${normalize}

 html{
     box-sizing: border-box;
     width:100%;
     text-decoration: none;
 }

 *, 
 *:before, 
 *:after{
     box-sizing: inherit;
 }

 body{
     margin:0;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     color: ${colors.orange};
    /* overflow: hidden; */
    background: url(${grain});
    background-size:cover;
    background-repeat:no-repeat;
    background-attachment: fixed;
    -webkit-backdrop-filter: grayscale;

 }

a{
    text-decoration:none;
}
a:visited, a:active {
    color: inherit;
}

h1{
    font-size: 10rem;
    line-height: 0.9;
    font-family: "Cormorant Garamond";
    font-weight: 300;
    padding:0;
    margin:0;
}

h2{
    font-size: 8rem;
    line-height: 0.9;
    font-family: "Cormorant Garamond";
    font-weight: 300;
     padding:0;
    margin:0;
}


svg{
    height: 100%;
    width:100% ;
}
`

export { GlobalStyles }
