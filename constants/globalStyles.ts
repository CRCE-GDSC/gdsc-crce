import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        font-family: var(--font-manrope);
    }

    *::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }

    *::-webkit-scrollbar-track {
      background: transparent;
      width: 0px;
    }

    *::-webkit-scrollbar-track:hover {
      background: #cfcdcd;
    }

    *::-webkit-scrollbar-thumb {
      background-color: #4f4f4f;
      border-radius: 14px;
    }



    a, button{
      cursor: url("/cursors/cursor-pointer.svg") 10 0, auto;    
    }
`;

export default GlobalStyles;
