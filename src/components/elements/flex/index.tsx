import { MouseEventHandler, ReactNode } from "react";
import styled, { css } from "styled-components";
import { CommonCSS } from "type/common";

interface Props extends StyledProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

interface StyledProps extends CommonCSS {
  center?: boolean;
  between?: boolean;
  gap?: string;
}

const FlexComponents = ({ children, ...props }: Props) => {
  return <Flex {...props}>{children}</Flex>;
};

const Flex = styled.div<StyledProps>`
  display: flex;
  align-items: center;

  ${({ center }) =>
    center &&
    css`
      justify-content: center;
    `};

  ${({ between }) =>
    between &&
    css`
      justify-content: space-between;
    `};

  ${({ gap }) =>
    css`
      gap: ${gap};
    `};

  ${({ margin }) => css`
    margin: ${margin};
  `}
  ${({ padding }) => css`
    padding: ${padding};
  `}
`;

export default FlexComponents;
