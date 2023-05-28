import { ReactNode } from "react";
import styled from "styled-components";

interface Props extends StyledProps {
  children: ReactNode;
}

interface StyledProps {
  size?: number;
  weight?: number;
}

const TextComponents = ({ children, ...props }: Props) => {
  return <Text {...props}>{children}</Text>;
};

const Text = styled.p<StyledProps>`
  font-size: ${({ size }) => size}px;
  font-weight: ${({ weight }) => weight}px;
  line-height: 1.5rem;
`;

export default TextComponents;
