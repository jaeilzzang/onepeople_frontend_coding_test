import SelectFormTemplate from "components/template";
import useFetching from "hooks/useFetching";
import useFormData from "hooks/useFormData";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ResponseDataType } from "type";

const EditPage = () => {
  const { onChange, handleDeleteForm, handleAddForm } = useFormData();
  const { data, fetch } = useFetching<ResponseDataType>();
  const { search } = useLocation();

  useEffect(() => {
    const id = search.split("?id=")[1];

    fetch({
      method: "GET",
      url: `/data/${id}`,
    });
  }, []);

  return (
    <>
      {data?.formData.map((data, idx) => (
        <SelectFormTemplate
          key={idx}
          id={idx}
          data={data}
          onChange={onChange}
          handleAddForm={handleAddForm}
          handleDeleteForm={handleDeleteForm}
        />
      ))}
    </>
  );
};

export default EditPage;
