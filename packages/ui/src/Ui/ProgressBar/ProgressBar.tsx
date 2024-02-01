import React from "react";
import styled, { CSSObject } from "@emotion/styled";

type ProgressBarProps = {
  gauge: number;
  customStyle?: {
    containerStyle?: CSSObject;
    gaugeStyle?: CSSObject;
  };
};

export const ProgressBar = ({ ...attr }: ProgressBarProps) => {
  return (
    <Container customStyle={attr.customStyle?.containerStyle!}>
      <Gauge gauge={attr.gauge} customStyle={attr.customStyle?.gaugeStyle!} />
    </Container>
  );
};

const Container = styled.div<{ customStyle: CSSObject }>`
  width: 100%;
  height: 20px;

  background-color: #ddd;
  border-radius: 20px;

  position: relative;
  overflow: hidden;
  ${({ customStyle }) => customStyle}
`;

const Gauge = styled.div<{ gauge: number; customStyle: CSSObject }>`
  width: ${({ gauge }) => gauge}%;
  height: 100%;
  background-color: #242343;

  position: absolute;
  top: 0;
  left: 0;

  transition: width 0.8s ease;
  ${({ customStyle }) => customStyle}
`;
