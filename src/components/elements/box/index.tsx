import { ReactNode } from "react";
import styled, { css } from "styled-components";

interface Props extends StyledProps {
  children: ReactNode;
}

interface StyledProps {
  active?: boolean;
}

const BoxComponents = ({ children, active }: Props) => {
  return <BoxContainer active={active}>{children}</BoxContainer>;
};

const BoxContainer = styled.div<StyledProps>`
  max-width: 768px;
  min-width: 272px;

  border-radius: 8px;

  padding: 1rem;
  margin: 1rem auto;

  border: 1px solid black;

  ${({ active }) =>
    active &&
    css`
      border-left: blue 10px solid;
    `};

  @media screen and (max-width: 768px) {
    margin: 1rem 24px;
  }
`;

export default BoxComponents;
