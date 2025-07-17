import { useSelector } from "react-redux";
import { useStyles } from "./StudentsPage.style";
import classService from "../../services/class.service";
import { setClasses } from "../../redux/slices/class.slice";
import studentService from "../../services/student.service";
import { setStudents } from "../../redux/slices/student.slice";
import useFetchIfNeeded from "../../hooks/useFetchDispatch.hook";
import { classSelector } from "../../redux/selectors/class.selector";
import { studentSelector } from "../../redux/selectors/student.selector";
import StudentsTable from "../../components/StudentsTable/StudentsTable";

const StudentsPage = () => {
  const styles = useStyles();
  const students = useSelector(studentSelector);

  useFetchIfNeeded(
    students.length === 0 ? true : false,
    "students",
    () => studentService.getAllStudents(),
    (data: any) => setStudents(data)
  );

  const classes = useSelector(classSelector);

  useFetchIfNeeded(
    classes.length === 0 ? true : false,
    "classes",
    () => classService.getAllClasses(),
    (data: any) => setClasses(data)
  );

  return (
    <>
      <div style={styles.studentsTableContainer}>
        <StudentsTable students={students} />
      </div>
    </>
  );
};

export default StudentsPage;
