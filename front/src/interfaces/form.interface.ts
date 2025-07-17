import type { TextFieldProps } from "@mui/material";
import type { Path, RegisterOptions, FieldValues } from "react-hook-form";

export interface IForm<T extends FieldValues> {
  title: string;
  fields: IField<T>[];
  buttonText: string;
}

interface IField<T extends FieldValues> extends Omit<TextFieldProps, "key"> {
  key: Path<T>;
  register: RegisterOptions<T, Path<T>>;
}
