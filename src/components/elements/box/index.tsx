import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

const BoxComponents = ({ children }: Props) => {
  return <BoxContainer>{children}</BoxContainer>;
};

const BoxContainer = styled.div`
  max-width: 768px;
  min-width: 272px;

  border-radius: 8px;

  padding: 1rem;
  margin: 1rem auto;

  border: 1px solid black;

  border-left: gray 10px solid;

  &:focus-within {
    border-left: #2d2dea 10px solid;
  }

  @media screen and (max-width: 768px) {
    margin: 1rem 24px;
  }
`;

export default BoxComponents;
