import { ChangeEventHandler } from "react";

export type SelectFormType = "short" | "long" | "check" | "radio";
export type FromType = "Form" | "Answer";
export type AddAnswerType = "Etc";

export type handleDeleteForm = (id: number, type: FromType) => void;
export type handleAddForm = (
  id: number,
  type: FromType | AddAnswerType
) => void;
export type handleOnChangeInputForm = ChangeEventHandler<
  HTMLInputElement | HTMLTextAreaElement
>;

export interface OptionsType {
  id: SelectFormType;
  name: string;
}

export interface InputProps {
  id: number;
  required: boolean;
  question: string;
  answer: AnswerType[];
}

export type AnswerType = {
  id: number;
  type: SelectFormType;
  value: string;
  checked: null | boolean;
};

export type ResponseDataType = {
  id: string;
  formData: InputProps[];
};
