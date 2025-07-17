import { useState } from "react";
import { useStyles } from "./Form.style";
import { useForm, type FieldValues } from "react-hook-form";
import type { IForm } from "../../interfaces/form.interface";
import {
  Alert,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import type { HttpStatusCode } from "axios";

interface IFormProps<T extends FieldValues> {
  form: IForm<T>;
  handleSubmitButton: (feildData: T) => Promise<void>;
}
const Form = <T extends FieldValues>({
  form,
  handleSubmitButton,
}: IFormProps<T>) => {
  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<T>();

  const styles = useStyles();
  const [alertInfo, setAlertInfo] = useState<{
    alertColro: alert;
    message: any;
  } | null>(null);

  type alert = "error" | "info" | "success" | "warning";
  return (
    <>
      <form
        style={styles.formContainer}
        onSubmit={handleSubmit(async (data) => {
          console.log(data);
          try {
            await handleSubmitButton({ ...data });
            setAlertInfo({ alertColro: "success", message: "yay" });
            reset;
          } catch (error: any) {
            console.log(error.request.response);
            
            setAlertInfo({ alertColro: "error", message: error.request.response["message"] });
          }
        })}
      >
        <Typography sx={styles.formTitle}>{form.title}</Typography>
        {form.fields.map((field, index) => (
          <TextField
            {...register(field.key, field.register)}
            key={index}
            id="outlined-basic"
            variant="outlined"
            label={field.label + (field.required ? " *" : "")}
            sx={{ ...styles.field, ...styles.noArrowsOnNumberFeild }}
            onChange={(e) => {
              register(field.key).onChange(e);
            }}
            onKeyDown={field.onKeyDown}
            error={Boolean(errors[String(field.key)])}
            helperText={String(errors[String(field.key)]?.message ?? " ")}
          />
        ))}
        <Button variant="contained" type="submit" sx={styles.button}>
          {form.buttonText}
        </Button>
        {alertInfo && (
          <Alert severity={alertInfo.alertColro} sx={{marginTop: "2rem", width: "18rem",}}>
            {alertInfo.message}
          </Alert>
        )}
      </form>
    </>
  );
};

export default Form;
