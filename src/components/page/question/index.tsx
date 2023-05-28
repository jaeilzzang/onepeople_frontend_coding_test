import { HiOutlineDuplicate } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";

import BoxComponents from "components/elements/box";
import FlexComponents from "components/elements/flex";
import InputComponents from "components/elements/input";
import SelectComponents from "components/layout/select";
import SelectFormComponents from "components/layout/selectForm";

import { addForm } from "redux/form/reducer";
import { selectForm } from "redux/form/selector";

const QuestionPage = () => {
  const dispatch = useDispatch();
  const selectType = useSelector(selectForm);

  return (
    <BoxComponents active>
      <FlexComponents between>
        <FlexComponents center gap="4px">
          <InputComponents type="checkbox" defaultChecked />
          <p>필수항목</p>
        </FlexComponents>

        <FlexComponents gap="1rem">
          <AiOutlinePlus onClick={() => dispatch(addForm(true))} />
          <HiOutlineDuplicate />
          <AiOutlineDelete />
        </FlexComponents>
      </FlexComponents>

      <FlexComponents between margin="1rem 0">
        <InputComponents
          type="text"
          placeholder="질문 내용을 200자 내로 입력해 주세요"
          maxLength={200}
        />

        <SelectComponents />
      </FlexComponents>

      <div>
        <SelectFormComponents type={selectType} />
      </div>
    </BoxComponents>
  );
};

export default QuestionPage;
