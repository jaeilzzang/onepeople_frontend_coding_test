import FlexComponents from "components/elements/flex";
import SelectFormTemplate from "components/template";
import useFormData from "hooks/useFormData";

import { Link } from "react-router-dom";

import { ROUTE } from "route";

const QuestionPage = () => {
  const { formData, onChange, onSubmit, handleDeleteForm, handleAddForm } =
    useFormData();

  return (
    <>
      {formData.map((data, idx) => (
        <SelectFormTemplate
          key={idx}
          id={idx}
          data={data}
          onChange={onChange}
          handleAddForm={handleAddForm}
          handleDeleteForm={handleDeleteForm}
        />
      ))}
      <FlexComponents margin="0 auto" center gap="1rem">
        <button onClick={onSubmit}>설문폼 생성</button>
        <Link to={ROUTE.FORM}>설문 페이지로 이동</Link>
      </FlexComponents>
    </>
  );
};

export default QuestionPage;
