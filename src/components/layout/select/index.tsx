import { MouseEvent, MouseEventHandler } from "react";
import styled from "styled-components";

import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

import FlexComponents from "components/elements/flex";
import { OptionsType } from "type";

interface Props<T> {
  options: T[];
  handleMouseLeave: () => void;
  handleShowOptions: MouseEventHandler<HTMLDivElement>;
  currentSelect: number;
  handleSelectOptions: (
    e: MouseEvent<HTMLOptionElement>,
    selectId: number
  ) => void;
  isShow: boolean;
  name: string;
}

const SelectComponents = <T extends OptionsType>({
  name,
  isShow,
  options,
  currentSelect,
  handleMouseLeave,
  handleSelectOptions,
  handleShowOptions,
}: Props<T>) => {
  return (
    <Select onMouseLeave={handleMouseLeave}>
      <FlexComponents between onClick={handleShowOptions}>
        <option id={name}>{options[currentSelect].name}</option>

        {isShow ? <MdArrowDropUp /> : <MdArrowDropDown />}
      </FlexComponents>

      {isShow && (
        <Options>
          {options.map(
            (select, index) =>
              index !== currentSelect && (
                <option
                  id={name}
                  key={select.id}
                  onClick={(e) => handleSelectOptions(e, index)}
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
