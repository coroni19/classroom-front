import { ToastContainer } from "react-toastify";
import { useStyles } from "./StudentsPage.style";
import Loader from "../../components/Loader/Loader";
import classService from "../../services/class.service";
import Redirect from "../../components/Redirect/Redirect";
import { setClasses } from "../../redux/slices/class.slice";
import studentService from "../../services/student.service";
import { setStudents } from "../../redux/slices/student.slice";
import type { IClass } from "../../interfaces/class.interface";
import useFetchData from "../../hooks/use-fetch-dispatch.hook";
import type { IStudent } from "../../interfaces/student.interface";
import { classSelector } from "../../redux/selectors/class.selector";
import StudentsTable from "../../components/StudentsTable/StudentsTable";
import { studentSelector } from "../../redux/selectors/student.selector";
import { FETCH_CLASSES_QUERY_KEY, FETCH_STUDENTS_QUERY_KEY } from "../../constants/keys.const";

const StudentsPage = () => {
  const styles = useStyles();

  const { data: students, isLoading } = useFetchData({
    selector: studentSelector,
    isLoaded: (data: IStudent[]) => data.length > 0,
    queryKey: FETCH_STUDENTS_QUERY_KEY,
    serviceAction: () => studentService.getAllStudents(),
    dispatchAction: (data: IStudent[]) => setStudents(data),
  });

  useFetchData({
    selector: classSelector,
    isLoaded: (data: IClass[]) => data.length > 0,
    queryKey: FETCH_CLASSES_QUERY_KEY,
    serviceAction: () => classService.getAllClasses(),
    dispatchAction: (data: IClass[]) => setClasses(data),
  });

  return (
    <>
      {!isLoading ? (
        <>
          {students.length !== 0 ? (
            <div style={styles.studentsTableContainer}>
              <StudentsTable students={students} />
            </div>
          ) : (
            <Redirect
              message="There are no students yet"
              buttonText="create a new student"
              navigationPath="/create"
            />
          )}
        </>
      ) : (
        <Loader />
      )}
      <ToastContainer />
    </>
  );
};

export default StudentsPage;
