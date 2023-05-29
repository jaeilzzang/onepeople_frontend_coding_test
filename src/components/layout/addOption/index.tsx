import FlexComponents from "components/elements/flex";
import TextComponents from "components/elements/text";

import styled from "styled-components";
import { FromType } from "type";

interface Props {
  id: number;
  handleAddForm: (id: number, type: FromType) => void;
}

const AddOption = ({ id, handleAddForm }: Props) => {
  return (
    <FlexComponents>
      <TextBtn onClick={() => handleAddForm(id, "Answer")}>항목 추가</TextBtn>
      <TextComponents size={14}>또는 </TextComponents>
      <TextBtn onClick={() => handleAddForm(id, "Answer")}>
        기타 항목 추가
      </TextBtn>
    </FlexComponents>
  );
};

const TextBtn = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  text-decoration: underline;

  font-size: 12px;
  margin: 0 4px;

  cursor: pointer;
`;

export default AddOption;
