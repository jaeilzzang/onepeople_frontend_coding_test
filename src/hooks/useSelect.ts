import { MouseEvent, MouseEventHandler, useState } from "react";

const useSelect = () => {
  const [currentSelect, setCurrentSelect] = useState<number>(0);
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleShowOptions: MouseEventHandler<HTMLDivElement> = (e) =>
    setIsShow(!isShow);

  const handleSelectOptions = (
    e: MouseEvent<HTMLOptionElement>,
    selectId: number
  ) => {
    setCurrentSelect(selectId);
    setIsShow(!isShow);
  };

  const handleMouseLeave = () => isShow && setIsShow(false);

  return {
    isShow,
    currentSelect,
    handleSelectOptions,
    handleShowOptions,
    handleMouseLeave,
  };
};

export default useSelect;
