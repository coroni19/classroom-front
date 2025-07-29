import { Avatar } from "@mui/material";
import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { useStyles } from "./ClassesPage.style";
import PersonIcon from "@mui/icons-material/Person";
import DeleteIcon from "@mui/icons-material/Delete";
import Loader from "../../components/Loader/Loader";
import classService from "../../services/class.service";
import Redirect from "../../components/Redirect/Redirect";
import studentService from "../../services/student.service";
import { setClasses } from "../../redux/slices/class.slice";
import ClassCard from "../../components/ClassCrad/ClassCard";
import useFetchData from "../../hooks/use-fetch-dispatch.hook";
import type { IClass } from "../../interfaces/class.interface";
import ListDialog from "../../components/ListDialog/ListDialog";
import { classSelector } from "../../redux/selectors/class.selector";
import { NO_STUDENTS_IN_CLASS_MESSAGE } from "../../constants/messages.const";
import { handleUnAssignStudentFromClass } from "../../redux/actions/student.action";

const ClassPage = () => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const [selectedClass, setSelectedClass] = useState<IClass | null>(null);

  const { data: classes, isLoading } = useFetchData({
    selector: classSelector,
    isLoaded: (data: IClass[]) => data.length > 0,
    queryKey: "classes",
    serviceAction: () => classService.getAllClasses(),
    dispatchAction: (data: IClass[]) => setClasses(data),
  });

  const handleOpen = (cls: IClass) => {
    setSelectedClass(cls);
  };

  const handleClose = () => {
    setSelectedClass(null);
  };

  const handleRemoveStudentFromClass = async (studentId: string) => {
    if (!selectedClass) {
      return;
    }

    await studentService.unassign(studentId);
    handleUnAssignStudentFromClass(dispatch, selectedClass, studentId);
  };

  const filteredAndFormatedStudents = useMemo(() => {
    if (!selectedClass) {
      return [];
    }

    const filteredClass = classes.find(
      (cls) => cls.classId === selectedClass.classId
    );

    if (!filteredClass) {
      return [];
    }

    return filteredClass.students.map(({ firstName, lastName, studentId }) => {
      return {
        key: studentId,
        title: firstName.concat(" " + lastName),
      };
    });
  }, [classes, selectedClass]);

  return (
    <>
      {!isLoading ? (
        <>
          {classes.length !== 0 ? (
            <>
              <div style={styles.classCardContainer}>
                {classes.map((classData) => (
                  <ClassCard
                    cls={classData}
                    key={classData.classId}
                    handleOpen={handleOpen}
                  />
                ))}
              </div>
              {selectedClass && (
                <ListDialog
                  onClose={handleClose}
                  open={Boolean(selectedClass)}
                  avatartIcon={
                    <Avatar sx={styles.personIcon}>
                      <PersonIcon />
                    </Avatar>
                  }
                  listTitle="Class Students"
                  listItems={filteredAndFormatedStudents}
                  handleAction={handleRemoveStudentFromClass}
                  emptyListTitle={NO_STUDENTS_IN_CLASS_MESSAGE}
                  actionIcon={<DeleteIcon sx={styles.icons}></DeleteIcon>}
                />
              )}
              <ToastContainer />
            </>
          ) : (
            <Redirect
              message="There are no classes yet"
              buttonText="create a new class"
              navigationPath="/create"
            />
          )}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ClassPage;
