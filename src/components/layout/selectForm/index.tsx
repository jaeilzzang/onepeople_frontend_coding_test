import InputComponents from "components/elements/input";
import TextAreaComponents from "components/elements/input/textarea";

import {
  AnswerType,
  SelectFormType,
  handleAddForm,
  handleDeleteForm,
  handleOnChangeInputForm,
} from "type";

import RadioForm from "./radioForm";
import AddOption from "../addOption";
import TextComponents from "components/elements/text";

export interface Props {
  id: number;
  type: SelectFormType;
  answer: AnswerType[];
  handleAddForm: handleAddForm;
  handleDeleteForm: handleDeleteForm;
  handleOnChangeInputForm: handleOnChangeInputForm;
}

const SelectFormComponents = ({
  id,
  type,
  answer,
  handleAddForm,
  handleDeleteForm,
  handleOnChangeInputForm,
}: Props) => {
  switch (type) {
    case "short": {
      return (
        <InputComponents
          type="text"
          name={type}
          value={answer[0].value}
          maxLength={100}
          onChange={handleOnChangeInputForm}
          placeholder="100자 이내의 답변을 받을 수 있는 란 입니다."
        />
      );
    }
    case "long": {
      return (
        <TextAreaComponents
          name={type}
          value={answer[0].value}
          maxLength={100}
          onChange={handleOnChangeInputForm}
          placeholder="250자 이내의 답변을 받을 수 있는 란 입니다."
        />
      );
    }
    case "check": {
      return (
        <>
          <TextComponents size={14}>체크항목</TextComponents>
          {answer.map((ans, idx: number) => (
            <RadioForm
              id={idx}
              key={idx}
              type="check"
              value={ans.value}
              checked={ans.checked}
              onChange={handleOnChangeInputForm}
              handleDeleteForm={handleDeleteForm}
            />
          ))}

          <AddOption id={id} handleAddForm={handleAddForm} />
        </>
      );
    }
    case "radio": {
      return (
        <>
          <TextComponents size={14}>선택항목</TextComponents>
          {answer.map((ans, idx: number) => (
            <RadioForm
              key={idx}
              id={idx}
              type="radio"
              value={ans.value}
              checked={ans.checked}
              onChange={handleOnChangeInputForm}
              handleDeleteForm={handleDeleteForm}
            />
          ))}
          <AddOption id={id} handleAddForm={handleAddForm} />
        </>
      );
    }
  }
};

export default SelectFormComponents;
