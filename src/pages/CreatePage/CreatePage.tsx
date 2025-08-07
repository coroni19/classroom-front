import { classForm } from "./classForm.const";
import Form from "../../components/Form/Form";
import { useStyles } from "./CreatePage.style";
import { studentForm } from "./studentForm.const";
import classService from "../../services/class.service";
import { addClass } from "../../redux/slices/class.slice";
import studentService from "../../services/student.service";
import { addStudent } from "../../redux/slices/student.slice";
import type { IClassDto } from "../../interfaces/class.interface";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { classSelector } from "../../redux/selectors/class.selector";
import type { IStudentDto } from "../../interfaces/student.interface";
import { studentSelector } from "../../redux/selectors/student.selector";

const CreatePage = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();

  const classes = useAppSelector(classSelector);
  const students = useAppSelector(studentSelector);

  const handleSubmitClass = async (data: IClassDto) => {
    await classService.create(data);

    if (classes.length !== 0) {
      dispatch(addClass({ ...data, students: [] }));
    }
  };

  const handleSubmitStudent = async (data: IStudentDto) => {
    await studentService.create(data);

    if (students.length !== 0) {
      dispatch(addStudent({ ...data, classId: null }));
    }
  };

  return (
    <div style={styles.formContainer}>
      <div>
        <Form
          key={"classForm"}
          form={classForm}
          handleSubmitButton={handleSubmitClass}
        />
      </div>
      <div>
        <Form
          key={"studentForm"}
          form={studentForm}
          handleSubmitButton={handleSubmitStudent}
        />
      </div>
    </div>
  );
};

export default CreatePage;
