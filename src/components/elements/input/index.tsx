import { InputHTMLAttributes } from "react";
import styled, { css } from "styled-components";

interface Props extends InputHTMLAttributes<HTMLInputElement>, StyledProps {}

interface StyledProps {
  sizes?: number;
}

const InputComponents = ({ ...props }: Props) => {
  return <Input {...props} />;
};

const Input = styled.input<StyledProps>`
  padding: 8px 4px;

  ${({ type }) =>
    type === "text" &&
    css`
      width: 80%;
      margin-right: 3rem;
      outline: none;
      border: none;
      border-bottom: 1px solid #e6e6e6;

      &:focus {
        border-bottom: 1px solid black;
      }
    `}

  ${({ type, sizes }) =>
    type === "checkbox" &&
    type === "radio" &&
    sizes &&
    css`
      width: ${sizes}px;
      height: ${sizes}px;
    `}
`;

export default InputComponents;
