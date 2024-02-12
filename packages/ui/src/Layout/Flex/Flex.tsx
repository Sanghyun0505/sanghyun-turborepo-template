import styled from "@emotion/styled";

export type Align = "center" | "flex-start" | "flex-end";

export type FlexProps = {
  gap?: number;
  columnGap?: number;
  rowGap?: number;
  justifyContent?: Align | "space-between";
  fill?: string;
  alignItems?: Align;
  padding?: [number] | [number, number];
  wrap?: boolean;
  backgroundColor?: string;
};

export const BaseFlex = styled.div<FlexProps>`
  display: flex;

  gap: ${({ gap }) => gap || 0}px;
  row-gap: ${({ rowGap }) => rowGap || 0}px;
  column-gap: ${({ columnGap }) => columnGap || 0}px;

  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "nowrap")};

  width: ${({ fill }) => fill || "auto"};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  padding: ${({ padding }) =>
    padding?.length === 1
      ? `${padding[0]}px`
      : padding && `${padding[0]}px ${padding[1]}px`};
`;

export const Column: typeof BaseFlex = styled(BaseFlex)`
  flex-direction: column;
`;

export const Row: typeof BaseFlex = styled(BaseFlex)`
  flex-direction: row;
`;
