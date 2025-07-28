import type { IDisplayableError } from "./error.interface";

const isObject = (input: unknown): input is object => {
  return Boolean(input) && typeof input === "object";
};

export const isDisplayableError = (
  input: unknown
): input is IDisplayableError => {
  return (
    isObject(input) &&
    "response" in input &&
    isObject(input.response) &&
    "data" in input.response &&
    isObject(input.response.data) &&
    "message" in input.response.data
  );
};
