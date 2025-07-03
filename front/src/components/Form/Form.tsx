import {
  Button,
  TextField,
  Typography,
  type TextFieldProps,
} from "@mui/material";
import { type FC } from "react";
import { useStyles } from "./Form.style";
import { useThemeContext } from "../../contexts/Theme.context";

interface IFormProps {
  title: string;
  fields: TextFieldProps[];
  buttonText: string;
}

const Form: FC<IFormProps> = ({ title, fields, buttonText }) => {
  const styles = useStyles();

  const { theme } = useThemeContext();

  return (
    <>
      <div style={styles.formContainer}>
        <Typography sx={styles.formTitle}>{title}</Typography>
        {fields.map((feild, index) => (
          <TextField
            key={index}
            id="outlined-basic"
            label={feild.label}
            variant="outlined"
            sx={{
              ...styles.field,
              "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                borderColor: theme.color,
              },
              "& .MuiInputLabel-root.Mui-focused": theme,
            }}
            required={feild.required}
          />
        ))}

        <Button
          type="submit"
          sx={{ ...styles.button, backgroundColor: theme.color }}
        >
          {buttonText}
        </Button>
      </div>
    </>
  );
};

export default Form;
