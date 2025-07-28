import {
  VALID_STRING_REGEX,
  VALID_NUMBER_REGEX,
} from "../../constants/regex.constants";

import {
  INVALID_NUMBER_MESSAGE,
  INVALID_STRING_MESSAGE,
  CLASS_CREATION_SUCCESS_MESSAGE,
} from "../../constants/messages.const";

import { isDigit } from "./createPage.utils";
import type { IForm } from "../../interfaces/form.interface";
import type { IClassDto } from "../../interfaces/class.interface";

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
          message: "ID " + INVALID_NUMBER_MESSAGE,
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
          message: "Name " + INVALID_STRING_MESSAGE,
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
          message: "Max Seats " + INVALID_NUMBER_MESSAGE,
        },
      },
    },
  ],
  buttonText: "CREATE CLASS",
  successMessage: CLASS_CREATION_SUCCESS_MESSAGE
};
