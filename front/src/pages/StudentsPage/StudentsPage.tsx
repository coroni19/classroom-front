import StudentsTable from "../../components/StudentsTable/StudentsTable";
import { useStyles } from "./StudentsPage.style";
import { useSelector } from "react-redux";
import { studentSelector } from "../../redux/selectors/student.selector";

const StudentsPage = () => {
  const styles = useStyles();
  const students = useSelector(studentSelector);

  return (
    <>
      <div style={styles.studentsTableContainer}>
        <StudentsTable students={students} />
      </div>
    </>
  );
};

export default StudentsPage;
