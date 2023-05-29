import { ChangeEventHandler } from "react";
import { MdCancel } from "react-icons/md";
import styled from "styled-components";

import FlexComponents from "components/elements/flex";
import InputComponents from "components/elements/input";

import { FromType, SelectFormType } from "type";

interface Props {
  id: number;
  type: SelectFormType;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  handleDeleteForm: (id: number, type: FromType) => void;
  value: string;
  checked: boolean | null;
}

const RadioForm = ({
  id,
  type,
  value,
  checked,
  onChange,
  handleDeleteForm,
}: Props) => {
  return (
    <FlexComponents between>
      <InputContainer>
        <InputComponents
          id={id.toString()}
          type={type === "check" ? "checkbox" : "radio"}
          name={type}
          checked={!!checked}
          onChange={onChange}
          sizes={16}
        />
        <InputComponents
          id={id.toString()}
          type="text"
          name={type}
          value={value}
          onChange={onChange}
        />
      </InputContainer>
      <MdCancel
        onClick={() => {
          if (id === 0) {
            return;
          }
          handleDeleteForm(id, "Answer");
        }}
      />
    </FlexComponents>
  );
};

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.5rem;

  &:not(last-child) {
    margin-left: 0.5rem;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  input {
    padding: 2px 8px;
  }
`;

export default RadioForm;
