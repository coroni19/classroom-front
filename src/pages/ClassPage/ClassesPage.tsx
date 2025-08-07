import {
  SOMETHING_WENT_WROG_MESSAGE,
  NO_STUDENTS_IN_CLASS_MESSAGE,
} from "../../constants/messages.const";

import { Avatar } from "@mui/material";
import { useMemo, useState } from "react";
import { ToastContainer } from "react-toastify";
import { useStyles } from "./ClassesPage.style";
import { useAppDispatch } from "../../redux/store";
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
import { FETCH_CLASSES_QUERY_KEY } from "../../constants/keys.const";
import { toastify } from "../../utilities/toastify/toastify.utility";
import { ERROR_TOAST_OPTION } from "../../utilities/toastify/tosatify.const";
import { handleUnAssignStudentFromClass } from "../../redux/actions/student.action";

const ClassPage = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();

  const [selectedClass, setSelectedClass] = useState<IClass | null>(null);

  const { data: classes, isLoading } = useFetchData({
    selector: classSelector,
    isLoaded: (data: IClass[]) => data.length > 0,
    queryKey: FETCH_CLASSES_QUERY_KEY,
    serviceAction: () => classService.getAll(),
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

    try {
      await studentService.unassign(studentId);
      handleUnAssignStudentFromClass(dispatch, selectedClass, studentId);
    } catch (error) {
      toastify(ERROR_TOAST_OPTION, SOMETHING_WENT_WROG_MESSAGE);
    }
  };

  const formattedStudents = useMemo(() => {
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
        title: `${firstName} ${lastName}`,
      };
    });
  }, [classes, selectedClass]);

  if (isLoading) {
    return <Loader />;
  }

  if (classes.length === 0) {
    return (
      <Redirect
        message="There are no classes yet"
        buttonText="create a new class"
        navigationPath="/create"
      />
    );
  }

  return (
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
          listItems={formattedStudents}
          handleAction={handleRemoveStudentFromClass}
          emptyListTitle={NO_STUDENTS_IN_CLASS_MESSAGE}
          actionIcon={<DeleteIcon sx={styles.icons}></DeleteIcon>}
        />
      )}
      <ToastContainer />
    </>
  );
};

export default ClassPage;
