import styled from "styled-components";

import { KeyboardEventHandler, TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextAreaComponents = ({ ...props }: Props) => {
  const onKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      return;
    }
  };

  return <TextArea {...props} onKeyDown={onKeyDown} />;
};

const TextArea = styled.textarea`
  resize: none;
  outline: none;
  border: none;

  width: 90%;
  height: auto;

  background-attachment: local;

  background-image: linear-gradient(to right, #e6e6e6 0px, transparent 0px),
    linear-gradient(to left, white 10px, transparent 0px),
    repeating-linear-gradient(white, white 38px, #e6e6e6 40px);

  line-height: 2.5rem;

  &:focus {
    background-image: linear-gradient(to right, black 0px, transparent 0px),
      linear-gradient(to left, white 10px, transparent 0px),
      repeating-linear-gradient(white, white 38px, black 39px);

    line-height: 2.5rem;
  }
`;

export default TextAreaComponents;
