import FlexComponents from "components/elements/flex";
import InputComponents from "components/elements/input";
import TextAreaComponents from "components/elements/input/textarea";
import TextComponents from "components/elements/text";
import { MdCancel } from "react-icons/md";
import styled from "styled-components";

import { SelectFormType } from "type/type";
import AddOption from "../addOption";

interface Props {
  type: SelectFormType;
}

const SelectFormComponents = ({ type }: Props) => {
  switch (type) {
    case "short": {
      return (
        <InputComponents
          type="text"
          placeholder="100자 이내의 답변을 받을 수 있는 란 입니다."
          maxLength={100}
        />
      );
    }
    case "long": {
      return (
        <TextAreaComponents
          placeholder="250자 이내의 답변을 받을 수 있는 란 입니다."
          maxLength={100}
        />
      );
    }
    case "check": {
      return (
        <>
          <TextComponents size={14}>체크항목</TextComponents>

          <FlexComponents between>
            <InputContainer>
              <InputComponents id="option1" type="checkbox" sizes={16} />
              <InputComponents type="text" />
            </InputContainer>
            <MdCancel />
          </FlexComponents>
          <AddOption />
        </>
      );
    }
    case "radio": {
      return (
        <>
          <TextComponents size={14}>선택항목</TextComponents>

          <FlexComponents between>
            <InputContainer>
              <InputComponents id="option1" type="radio" sizes={16} />
              <InputComponents type="text" />
            </InputContainer>
            <MdCancel />
          </FlexComponents>
          <AddOption />
        </>
      );
    }
  }
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

export default SelectFormComponents;
