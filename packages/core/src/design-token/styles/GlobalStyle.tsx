import { Global, css } from "@emotion/react";
import { reset } from "./reset";
import { font } from "./font";

const global = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Pretendard-Regular" !important;
  }
`;

export const GlobalStyle = () => {
  return (
    <>
      <Global styles={global} />
      <Global styles={reset} />
      <Global styles={font} />
    </>
  );
};
