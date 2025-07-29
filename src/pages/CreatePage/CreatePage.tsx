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

  const handleSubmitClass = async (feildData: IClassDto) => {
    await classService.createClass(feildData);

    if (classes.length !== 0) {
      dispatch(addClass({ ...feildData, students: [] }));
    }
  };

  const handleSubmitStudent = async (feildData: IStudentDto) => {
    await studentService.createStudent(feildData);

    if (students.length !== 0) {
      dispatch(addStudent({ ...feildData, classId: null }));
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
