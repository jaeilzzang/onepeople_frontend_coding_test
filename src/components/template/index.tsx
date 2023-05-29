import { HiOutlineDuplicate } from "react-icons/hi";

import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";

import BoxComponents from "components/elements/box";
import FlexComponents from "components/elements/flex";
import InputComponents from "components/elements/input";
import SelectComponents from "components/layout/select";
import SelectFormComponents from "components/layout/selectForm";

import useSelect from "hooks/useSelect";
import { ChangeEvent } from "react";
import { InputProps, OptionsType, handleAddForm, handleDeleteForm } from "type";
import { useDispatch } from "react-redux";
import { copyActions } from "redux/form/reducer";

export const options: OptionsType[] = [
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

interface Props {
  id: number;
  data: InputProps;
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: number
  ) => void;
  handleAddForm: handleAddForm;
  handleDeleteForm: handleDeleteForm;
}

const SelectFormTemplate = ({
  id,
  data,
  onChange,
  handleDeleteForm,
  handleAddForm,
}: Props) => {
  const { ...selectProps } = useSelect();
  const dispatch = useDispatch();

  return (
    <>
      <BoxComponents>
        <FlexComponents between>
          <FlexComponents center gap="4px">
            <InputComponents
              type="checkbox"
              name="required"
              checked={data.required}
              onChange={(e) => onChange(e, id)}
            />
            <p>필수항목</p>
          </FlexComponents>

          <FlexComponents gap="1rem">
            <AiOutlinePlus onClick={() => handleAddForm(id, "Form")} />
            <HiOutlineDuplicate onClick={() => dispatch(copyActions(true))} />
            <AiOutlineDelete
              onClick={() => {
                if (id === 0) {
                  return;
                }

                handleDeleteForm(id, "Form");
              }}
            />
          </FlexComponents>
        </FlexComponents>

        <FlexComponents between margin="1rem 0">
          <InputComponents
            type="text"
            name="question"
            value={data.question}
            placeholder="질문 내용을 200자 내로 입력해 주세요"
            maxLength={200}
            onChange={(e) => onChange(e, id)}
          />

          <SelectComponents
            {...selectProps}
            options={options}
            name={options[selectProps.currentSelect].id}
          />
        </FlexComponents>

        <div>
          <SelectFormComponents
            id={id}
            answer={data.answer}
            type={options[selectProps.currentSelect].id}
            handleAddForm={handleAddForm}
            handleDeleteForm={handleDeleteForm}
            handleOnChangeInputForm={(e) => onChange(e, id)}
          />
        </div>
      </BoxComponents>
    </>
  );
};

export default SelectFormTemplate;
