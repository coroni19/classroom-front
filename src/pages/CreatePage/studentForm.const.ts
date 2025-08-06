import {
  INVALID_STRING_MESSAGE,
  STUDENT_CREATION_SUCCESS_MESSAGE,
} from "../../constants/messages.const";

import { isDigit } from "./createPage.utils";
import { isIdentityCard } from "class-validator";
import type { IForm } from "../../interfaces/form.interface";
import { VALID_STRING_REGEX } from "../../constants/regex.constants";
import type { IStudentDto } from "../../interfaces/student.interface";

export const studentForm: IForm<IStudentDto> = {
  title: "Add new student",
  fields: [
    {
      key: "studentId",
      label: "ID",
      required: true,
      onKeyDown: isDigit,
      register: {
        required: "ID is required",
        validate: (data) => {
          return isIdentityCard(data, "he-IL")
            ? true
            : "ID must be a valid israeli tz";
        },
      },
    },
    {
      key: "firstName",
      label: "First Name",
      required: true,
      register: {
        required: "First Name is required",
        maxLength: { value: 30, message: "Name is too long (max 30)." },
        pattern: {
          value: VALID_STRING_REGEX,
          message: "First Name " + INVALID_STRING_MESSAGE,
        },
      },
    },
    {
      key: "lastName",
      label: "Last Name",
      required: true,
      register: {
        required: "Last Name is required",
        maxLength: { value: 30, message: "Name is too long (max 30)." },
        pattern: {
          value: VALID_STRING_REGEX,
          message: "Last Name " + INVALID_STRING_MESSAGE,
        },
      },
    },
    {
      key: "age",
      label: "Age",
      onKeyDown: isDigit,
      register: {
        min: { value: 1, message: "Age must be a valid number" },
        max: { value: 100, message: "Age must be valid" },
      },
    },
    {
      key: "profession",
      label: "Profession",
      required: true,
      register: {
        required: "Profession is required",
        maxLength: { value: 30, message: "Name is too long (max 30)." },
      },
    },
  ],
  buttonText: "ADD STUDENT",
  successMessage: STUDENT_CREATION_SUCCESS_MESSAGE,
};
