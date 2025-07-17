import { isNumberString } from "class-validator";

export const isDigit = (e: any) => {
  !isNumberString(e.key) && e.key !== "Backspace" && e.preventDefault();
};


