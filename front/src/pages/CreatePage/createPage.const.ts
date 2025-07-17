import {
  VALID_STRING_REGEX,
  VALID_NUMBER_REGEX,
} from "../../constants/regex.constants";
import { isDigit } from "./createPage.utils";
import { isIdentityCard } from "class-validator";
import type { IForm } from "../../interfaces/form.interface";
import type { IClassDto } from "../../interfaces/class.interface";
import type { IStudentDto } from "../../interfaces/student.interface";

export const VALID_NUMBER_MESSAGE =
  "must be a valid number (number cannton start with 0)";
export const VALID_STRING_MESSAGE = `can only containe hebrew/english characterers and special characetre (space and ')`;

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
            : "ID must be a valid israeli taz";
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
          message: "First Name " + VALID_STRING_MESSAGE,
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
          message: "Last Name " + VALID_STRING_MESSAGE,
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
        pattern: {
          value: VALID_STRING_REGEX,
          message: "Profession " + VALID_STRING_MESSAGE,
        },
      },
    },
  ],
  buttonText: "ADD STUDENT",
};

export const classForm: IForm<IClassDto> = {
  title: "Create new class",
  fields: [
    {
      key: "classId",
      label: "Class ID",
      required: true,
      onKeyDown: isDigit,
      register: {
        required: "ID is required",
        pattern: {
          value: VALID_NUMBER_REGEX,
          message: "ID " + VALID_NUMBER_MESSAGE,
        },
      },
    },
    {
      key: "className",
      label: "Name",
      required: true,
      register: {
        required: "Name is required",
        maxLength: { value: 30, message: "Name is too long (max 30)." },
        pattern: {
          value: VALID_STRING_REGEX,
          message: "Name " + VALID_STRING_MESSAGE,
        },
      },
    },
    {
      key: "maxSeats",
      label: "Max Seats",
      required: true,
      onKeyDown: isDigit,
      register: {
        required: "Max Seats is required",
        pattern: {
          value: VALID_NUMBER_REGEX,
          message: "Max Seats " + VALID_NUMBER_MESSAGE,
        },
      },
    },
  ],
  buttonText: "CREATE CLASS",
};
