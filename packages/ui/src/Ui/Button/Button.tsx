import React from "react";
import styled, { CSSObject } from "@emotion/styled";

export type ButtonProps = {
  children: React.ReactNode;
  customStyle?: CSSObject;
  type?: "submit" | "reset" | "button";
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({ ...attr }: ButtonProps) => {
  return <StyledButton customStyle={attr.customStyle!} {...attr} />;
};

const StyledButton = styled.button<{ customStyle: CSSObject }>`
  ${({ customStyle }) => customStyle}
`;
