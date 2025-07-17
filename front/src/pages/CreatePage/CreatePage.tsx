import Form from "../../components/Form/Form";
import { useStyles } from "./CreatePage.style";
import { useDispatch, useSelector } from "react-redux";
import classService from "../../services/class.service";
import { addClass } from "../../redux/slices/class.slice";
import studentService from "../../services/student.service";
import { classForm, studentForm } from "./createPage.const";
import { addStudent } from "../../redux/slices/student.slice";
import type { IClassDto } from "../../interfaces/class.interface";
import { classSelector } from "../../redux/selectors/class.selector";
import type { IStudentDto } from "../../interfaces/student.interface";
import { studentSelector } from "../../redux/selectors/student.selector";

const CreatePage = () => {
  const styles = useStyles();

  const dispatch = useDispatch();

  const classes = useSelector(classSelector);
  const students = useSelector(studentSelector);

  const handleSubmitClass = async (feildData: IClassDto) => {
    try {
      await classService.createClass(feildData)

      if (classes.length !== 0) {
        dispatch(addClass({ ...feildData, students: [] }));
      }

    } catch(error) {
       throw error
    }
  };

  const handleSubmitStudent = async (feildData: IStudentDto) => {
    try {
      await  studentService.createStudent(feildData)

      if (students.length !== 0) {
        dispatch(addStudent({ ...feildData, classId: null }));
      }

    } catch(error) {
      throw (error)
    }
  };

  return (
    <div style={styles.formContainer}>
      <Form
        key={"classForm"}
        form={classForm}
        handleSubmitButton={handleSubmitClass}
      />
      <Form
        key={"studentForm"}
        form={studentForm}
        handleSubmitButton={handleSubmitStudent}
      />
    </div>
  );
};

export default CreatePage;
