import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";

import Loading from "components/layout/loading";
import useFetching from "hooks/useFetching";
import { ROUTE } from "route";
import { ResponseDataType } from "type";
import { optionsName } from "utils/options";

const SubmitPage = () => {
  const { data, fetch, isLoading } = useFetching<ResponseDataType[]>();

  useEffect(() => {
    if (!data) {
      fetch({
        method: "GET",
        url: "/data",
      });
    }
  }, [data]);

  return (
    <Container>
      {isLoading && !data && <Loading />}
      {!isLoading && !data?.length && <div>no Data</div>}
      {!isLoading &&
        data &&
        data.length > 0 &&
        data.map(({ id, formData }, idx) => {
          return (
            <div key={idx} className="content">
              <p>아이디: {id}</p>

              {formData.map(({ answer, question, required }, idx) => {
                return (
                  <Fragment key={idx}>
                    <div>
                      필수:
                      {required ? (
                        <AiOutlineCheck color="blue" />
                      ) : (
                        <MdOutlineCancel color="red" />
                      )}
                    </div>

                    <div>질문: {question}</div>

                    <div>
                      {answer.map(({ checked, id, type, value }) => (
                        <Fragment key={id}>
                          <p>아이디: {id}</p>
                          <p>
                            질문타입:
                            {optionsName[type]}
                          </p>

                          <div>
                            선택:
                            {checked == null && null}
                            {checked != null && checked ? (
                              <AiOutlineCheck color="blue" />
                            ) : (
                              <MdOutlineCancel color="red" />
                            )}
                          </div>
                          <p>답변내용: {value}</p>
                        </Fragment>
                      ))}
                    </div>
                  </Fragment>
                );
              })}

              <div>
                <Link to={`${ROUTE.EDIT}?id=${id}`}>수정</Link>
                <button
                  onClick={() => {
                    fetch({ method: "DELETE", url: `/data/${id}` });
                  }}
                >
                  삭제
                </button>
              </div>
            </div>
          );
        })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 2rem;

  .content {
    padding: 1rem;
    border: 1px solid black;

    > div {
      margin: 1rem 0;
    }
  }
`;

export default SubmitPage;
