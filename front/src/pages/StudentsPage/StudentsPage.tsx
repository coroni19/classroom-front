import StudentsTable from "../../components/StudentsTable/StudentsTable";
import { useStyles } from "./StudentsPage.style";

const StudentsPage = () => {
  const styles = useStyles();

  return (
    <div style={styles.studentsTableContainer}>
      <StudentsTable />
    </div>
  );
};

export default StudentsPage;
