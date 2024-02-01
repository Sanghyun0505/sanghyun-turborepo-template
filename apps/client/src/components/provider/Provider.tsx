"use client";

import { StyledProvider, PropsWithChildren } from "@sanghyun/core";

const Provider = ({ children }: PropsWithChildren) => {
  return <StyledProvider>{children}</StyledProvider>;
};

export default Provider;
