import QuestionPage from "components/page/question";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addForm } from "redux/form/reducer";
import { RootState } from "redux/store";

function App() {
  const select = useSelector((state: RootState) => state.formReducer);
  const dispatch = useDispatch();
  const [question, setQuestion] = useState<JSX.Element[]>([<QuestionPage />]);

  useEffect(() => {
    if (!select.addForm) {
      return;
    }

    setQuestion((prev) => [...prev, <QuestionPage />]);
    dispatch(addForm(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [select.addForm]);

  return (
    <section>
      {question.map((Components, idx) => (
        <React.Fragment key={idx}>{Components}</React.Fragment>
      ))}
    </section>
  );
}

export default App;
