import { Global } from "@emotion/react";
import { font, global, reset } from "./style";

export const GlobalStyle = () => {
  const STYLE_ITEMS = [font, global, reset];
  return (
    <>
      {STYLE_ITEMS.map((item, idx) => (
        <Global key={idx} styles={item} />
      ))}
    </>
  );
};
