import { useState } from "react";
import { Avatar } from "@mui/material";
import { useStyles } from "./ClassesPage.style";
import PersonIcon from "@mui/icons-material/Person";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import classService from "../../services/class.service";
import studentService from "../../services/student.service";
import ClassCard from "../../components/ClassCrad/ClassCard";
import type { IClass } from "../../interfaces/class.interface";
import ListDialog from "../../components/ListDialog/ListDialog";
import { unAssignClass } from "../../redux/slices/student.slice";
import useFetchIfNeeded from "../../hooks/useFetchDispatch.hook";
import { classSelector } from "../../redux/selectors/class.selector";
import { setClasses, unAssignStudent } from "../../redux/slices/class.slice";
import { ToastContainer } from "react-toastify";

const ClassPage = () => {
  const classes = useSelector(classSelector);

  useFetchIfNeeded(
    classes.length === 0 ? true : false,
    "classes",
    () => classService.getAllClasses(),
    (data: any) => setClasses(data)
  );

  const styles = useStyles();

  const [selectedClass, setSelectedClass] = useState<IClass | null>(null);

  const handleOpen = (cls: IClass) => {
    setSelectedClass(cls);
  };

  const handleClose = () => {
    setSelectedClass(null);
  };

  const dispatch = useDispatch();

  const handleAction = async (studentId: string | number) => {
    if (selectedClass) {
      await studentService.unassign(String(studentId))

      dispatch(
        unAssignStudent({
          classId: selectedClass.classId,
          studentId: String(studentId),
        })
      );
      dispatch(unAssignClass({ studentId: String(studentId) }));
    }
  };
  return (
    <>
      <div style={styles.classCardContainer}>
        {classes.map((classData) => (
          <ClassCard
            key={classData.classId}
            handleOpen={handleOpen}
            cls={classData}
          />
        ))}
      </div>
      
      {selectedClass && (
        <ListDialog
          open={Boolean(selectedClass)}
          onClose={handleClose}
          actionIcon={<DeleteIcon sx={styles.icons}></DeleteIcon>}
          avatartIcon={
            <Avatar sx={styles.personIcon}>
              <PersonIcon />
            </Avatar>
          }
          handleAction={handleAction}
          listTitle="Class Students"
          emptyListTitle="There Are No Students In This Class"
          listItems={
            classes
              .find((cls) => cls === selectedClass)
              ?.students.map(({ firstName, lastName, studentId }) => {
                return {
                  key: studentId,
                  title: firstName.concat(" " + lastName),
                };
              }) || []
          }
        />
      )}
      <ToastContainer/>
    </>
  );
};

export default ClassPage;
