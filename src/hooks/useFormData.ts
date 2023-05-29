import axios from "axios";
import { nanoid } from "nanoid";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { copyActions, copyDataActions } from "redux/form/reducer";
import { copyDataSelect, copySelect } from "redux/form/selector";
import {
  InputProps,
  SelectFormType,
  handleAddForm,
  handleDeleteForm,
} from "type";

const useFormData = () => {
  const dispatch = useDispatch();
  const copy = useSelector(copySelect);
  const copyData = useSelector(copyDataSelect);

  const [formData, setFormData] = useState<InputProps[]>([
    {
      id: 0,
      required: true,
      question: "",
      answer: [
        {
          id: 0,
          type: "short",
          value: "",
          checked: null,
        },
      ],
    },
  ]);

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    idx: number
  ) => {
    const { name, value, type, id } = e.target;

    if (formData.some((data) => data.id === idx)) {
      if (name === "question") {
        setFormData((prev) => {
          return prev.map((el) => {
            if (el.id === idx) {
              return {
                ...el,
                [name]: value,
              };
            }
            return el;
          });
        });
      } else if (name === "required") {
        setFormData((prev) => {
          return prev.map((el) => {
            if (el.id === idx) {
              return {
                ...el,
                [name]: !!(e.target as HTMLInputElement).checked,
              };
            }
            return el;
          });
        });
      } else if (name === "short" || name === "long") {
        setFormData((prev) => {
          return prev.map((el) => {
            if (el.id === idx) {
              return {
                ...el,
                answer: el.answer.map((ans) => {
                  if (ans.id === idx) {
                    return {
                      ...ans,
                      type: name as SelectFormType,
                      value: value,
                    };
                  }

                  return ans;
                }),
              };
            }
            return el;
          });
        });
      } else if (name === "check" || name === "radio") {
        setFormData((prev) => {
          return prev.map((el) => {
            if (el.id === idx) {
              return {
                ...el,
                answer: el.answer.map((ans) => {
                  if (ans.id === +id) {
                    return {
                      ...ans,
                      type: name as SelectFormType,
                      value: type === "text" ? value : ans.value,
                      checked: !!(e.target as HTMLInputElement).checked,
                    };
                  }

                  return ans;
                }),
              };
            }
            return el;
          });
        });
      }
    }
  };

  const handleDeleteForm: handleDeleteForm = (id, type) => {
    if (type === "Form") {
      const filter = formData.filter((_, i) => i !== +id);
      setFormData(filter);
    } else {
      const filter = formData.map((data, i) => {
        const findIndx = data.answer.filter((el) => el.id !== id);

        return {
          ...data,
          answer: findIndx,
        };
      });

      setFormData(filter);
    }
  };

  const handleAddForm: handleAddForm = (id, type) => {
    if (type === "Form") {
      setFormData((prev) => [
        ...prev,
        {
          id: id + 1,
          question: "",
          required: true,
          answer: [
            {
              id,
              checked: null,
              type: "short",
              value: "",
            },
          ],
        },
      ]);
    } else if (type === "Answer") {
      setFormData((prev) => {
        return prev.map((el) => {
          if (el.id === id) {
            return {
              ...el,
              answer: [
                ...el.answer,
                {
                  id: el.answer[el.answer.length - 1].id + 1,
                  checked: null,
                  type: "short",
                  value: "",
                },
              ],
            };
          }
          return el;
        });
      });
    } else if (type === "Etc") {
      setFormData((prev) => {
        return prev.map((el) => {
          if (el.id === id) {
            return {
              ...el,
              answer: [
                ...el.answer,
                {
                  id: el.answer[el.answer.length - 1].id + 1,
                  checked: null,
                  type: "short",
                  value: "",
                },
              ],
            };
          }
          return el;
        });
      });
    }
  };

  const onSubmit = async () => {
    let isValue = true;

    formData.forEach((data) => {
      data.answer.forEach((ans) => {
        if (!ans.value.trim().length) {
          isValue = false;
          return;
        }
      });

      if (!data.question.trim().length) {
        isValue = false;
        return;
      }
    });

    if (!isValue) {
      alert("빈 칸을 채워주세요.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3001/data", {
        id: nanoid(),
        formData,
      });
      if (res.status === 201) {
        setFormData((prev) => [
          {
            id: 0,
            required: true,
            question: "",
            answer: [
              {
                id: 0,
                type: "short",
                value: "",
                checked: null,
              },
            ],
          },
        ]);
        alert("등록완료");
      }
    } catch (error) {
      if (error instanceof Error) new Error(error.message);
    }
  };

  useEffect(() => {
    if (!copy) {
      return;
    }

    const payload: InputProps[] = JSON.parse(JSON.stringify(formData));
    const newId = formData[formData.length - 1].id + 1;

    payload[0].id = newId;
    payload[0].answer[0].id = newId;

    dispatch(copyDataActions(payload[0]));
    dispatch(copyActions(false));
  }, [copy]);

  useEffect(() => {
    if (!copyData) {
      return;
    }

    setFormData((prev) => [...prev, copyData]);
    dispatch(copyDataActions(null));
  }, [copyData]);

  return {
    formData,
    onChange,
    onSubmit,
    handleAddForm,
    handleDeleteForm,
  };
};

export default useFormData;
