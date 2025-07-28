import { isNumberString } from "class-validator";

export const isDigit = (e: React.KeyboardEvent<HTMLDivElement>) => {
  !isNumberString(e.key) && e.key !== "Backspace" && e.preventDefault();
};
