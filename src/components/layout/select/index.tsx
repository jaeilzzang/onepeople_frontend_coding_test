import styled from "styled-components";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

import FlexComponents from "components/elements/flex";
import { MouseEvent, MouseEventHandler, useState } from "react";

import { selectForm } from "redux/form/reducer";
import { SelectFormType } from "type/type";
import { useDispatch } from "react-redux";

interface OptionsType {
  id: SelectFormType;
  name: string;
}

const options: OptionsType[] = [
  {
    name: "단문형 답변",
    id: "short",
  },
  {
    id: "long",
    name: "장문형 답변",
  },
  {
    id: "check",
    name: "체크박스 답변",
  },
  {
    id: "radio",
    name: "객관식 답변",
  },
];

const SelectComponents = () => {
  const dispatch = useDispatch();

  const [currentSelect, setCurrentSelect] = useState<number>(0);
  const [isShow, setIsShow] = useState<Boolean>(false);

  const onClick: MouseEventHandler<HTMLDivElement> = (e) => setIsShow(!isShow);

  const handleOptions = (
    e: MouseEvent<HTMLOptionElement>,
    selectId: number
  ) => {
    dispatch(selectForm(options[selectId].id));
    setCurrentSelect(selectId);
    setIsShow(!isShow);
  };

  const handleMouseLeave = () => isShow && setIsShow(false);

  return (
    <Select onMouseLeave={handleMouseLeave}>
      <FlexComponents between onClick={onClick}>
        <option>{options[currentSelect].name}</option>

        {isShow ? <MdArrowDropUp /> : <MdArrowDropDown />}
      </FlexComponents>

      {isShow && (
        <Options>
          {options.map(
            (select, index) =>
              index !== currentSelect && (
                <option
                  key={select.id}
                  onClick={(e) => handleOptions(e, index)}
                >
                  {select.name}
                </option>
              )
          )}
        </Options>
      )}
    </Select>
  );
};

const Select = styled.div`
  position: relative;
  border-radius: 4px;
  border: 1px solid black;
  max-width: 150px;
  padding: 8px 12px;
  width: 100%;

  cursor: pointer;

  &:hover {
  }
`;
const Options = styled.div`
  position: absolute;
  bottom: -85px;
  left: -1px;

  width: calc(100% + 2px);
  padding-top: 8px;

  border-right: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  background-color: white;

  z-index: 1;

  option {
    padding: 4px 12px;

    &:hover {
      background-color: #efefef;
    }
  }
`;

export default SelectComponents;
