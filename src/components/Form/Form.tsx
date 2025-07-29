import { useState } from "react";
import { useStyles } from "./Form.style";
import type { TAlert } from "../../types/alert.type";
import { useForm, type FieldValues } from "react-hook-form";
import type { IForm } from "../../interfaces/form.interface";
import { Alert, Button, TextField, Typography } from "@mui/material";
import { isDisplayableError } from "../../utilities/errors/error.utility";
import { SOMETHING_WENT_WROG_MESSAGE } from "../../constants/messages.const";

interface IFormProps<T extends FieldValues> {
  form: IForm<T>;
  handleSubmitButton: (fieldsData: T) => Promise<void>;
}

const Form = <T extends FieldValues>({
  form,
  handleSubmitButton,
}: IFormProps<T>) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>();

  const styles = useStyles();

  const [alertInfo, setAlertInfo] = useState<{
    alertColor: TAlert;
    message: any;
  } | null>(null);

  const submit = async (data: T) => {
    try {
      await handleSubmitButton(data);
      reset();
      setAlertInfo({
        alertColor: "success",
        message: form.successMessage,
      });
    } catch (error) {
      if (isDisplayableError(error)) {
        setAlertInfo({
          alertColor: "error",
          message: error.response.data.message,
        });
      }
      setAlertInfo({
        alertColor: "error",
        message: SOMETHING_WENT_WROG_MESSAGE,
      });
    }
  };

  return (
    <form
      style={styles.formContainer}
      onSubmit={handleSubmit(async (data) => {
        submit(data);
      })}
    >
      <Typography sx={styles.formTitle}>{form.title}</Typography>
      {form.fields.map((field, index) => (
        <TextField
          {...register(field.key, field.register)}
          key={index}
          variant="outlined"
          onKeyDown={field.onKeyDown}
          onChange={(e) => {
            setAlertInfo(null);
            register(field.key).onChange(e);
          }}
          error={Boolean(errors[String(field.key)])}
          label={field.label + (field.required ? " *" : "")}
          sx={{ ...styles.field, ...styles.noArrowsOnNumberFeild }}
          helperText={String(errors[String(field.key)]?.message ?? " ")}
        />
      ))}
      <Button variant="contained" type="submit" sx={styles.button}>
        {form.buttonText}
      </Button>
      {alertInfo && (
        <Alert severity={alertInfo.alertColor} sx={styles.alert}>
          {alertInfo.message}
        </Alert>
      )}
    </form>
  );
};

export default Form;
