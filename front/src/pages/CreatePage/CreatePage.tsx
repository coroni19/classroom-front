import type { TextFieldProps } from "@mui/material";
import Form from "../../components/Form/Form";
import { useStyles } from "./CreatePage.style";

interface IFormProps {
  title: string;
  fields: TextFieldProps[];
  buttonText: string;
}

const forms: IFormProps[] = [ {
    title: "Create new class",
    fields: [
      { label: "ID", required: true },
      { label: "Name", required: true },
      { label: "Max Seats", required: true },
    ],
    buttonText: "CREATE CLASS",
  },
  {
    title: "Add new student",
    fields: [
      { label: "ID", required: true },
      { label: "First Name", required: true },
      { label: "Last Name", required: true },
      { label: "Age", required: false },
      { label: "Profession", required: true },
    ],
    buttonText: "ADD STUDENT",
  },
 
];

const CreatePage = () => {
  const styles = useStyles();

  return (
    <div style={styles.formContainer}>
      {forms.map((form, index) => (
        <Form
          key={index}
          title={form.title}
          fields={form.fields}
          buttonText={form.buttonText}
        />
      ))}
    </div>
  );
};

export default CreatePage;
