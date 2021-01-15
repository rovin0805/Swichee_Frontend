import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none!important;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    *:focus {
        outline: none;
    }
    body{
        font-family: "Helvetica Neue", 'Noto Sans KR', -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding-top: 50px;
        font-size: 12px;
        background-color: #f4f5f7;
    }
    #root {
        padding-bottom: 50px;
    }
`;

export default globalStyles;
