import styled from "styled-components";

type Align = "center" | "flex-start" | "flex-end";

interface ContainerProps {
  gap?: number;
  columnGap?: number;
  rowGap?: number;
  justifyContent?: Align | "space-between";
  fill?: string;
  alignItems?: Align;
  padding?: [number, number] | [number];
  wrap?: boolean;
  backgroundColor?: string;
}

const base = styled.div<ContainerProps>`
  width: ${(props) => props.fill || "auto"};
  display: flex;

  gap: ${(props) => props.gap || 0}px;
  row-gap: ${(props) => props.rowGap || 0}px;
  column-gap: ${(props) => props.columnGap || 0}px;

  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  flex-wrap: ${(props) => (props.wrap ? "wrap" : "nowrap")};

  background-color: ${(props) => props.backgroundColor || "transparent"};
  padding: ${(props) =>
    `${props.padding ? props.padding[0] : 0}px ${
      props.padding ? props.padding[1] ?? props.padding[0] : 0
    }px`};
`;

export const Column = styled(base)`
  flex-direction: column;
`;
export const Row = styled(base)`
  flex-direction: row;
`;
