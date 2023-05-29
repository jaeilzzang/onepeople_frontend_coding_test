import EditPage from "components/page/edit";
import QuestionPage from "components/page/question";
import SubmitPage from "components/page/submit";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTE } from "route";

function App() {
  return (
    <section>
      <Suspense fallback={<div>...loading</div>}>
        <BrowserRouter>
          <Routes>
            <Route path={ROUTE.HOME} element={<QuestionPage />} />
            <Route path={ROUTE.FORM} element={<SubmitPage />} />
            <Route path={ROUTE.EDIT} element={<EditPage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </section>
  );
}

export default App;
