import { GlobalStyle, PropsWithChildren } from "@sanghyun/core";

const Provider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default Provider;
