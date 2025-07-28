import {
  Paper,
  Table,
  Avatar,
  Button,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import { useStyles } from "./StudentsTable.style";
import ListDialog from "../ListDialog/ListDialog";
import { useMemo, useState, type FC } from "react";
import SchoolIcon from "@mui/icons-material/School";
import { useDispatch, useSelector } from "react-redux";
import studentService from "../../services/student.service";
import { studentKeys, tableTitles } from "./StudentTable.const";
import type { IStudent } from "../../interfaces/student.interface";
import { classSelector } from "../../redux/selectors/class.selector";
import { NO_AVAILABLE_CLASSES_MESSAGE, SOMETHING_WENT_WROG_MESSAGE } from "../../constants/messages.const";
import { assignClass, deleteStudent } from "../../redux/slices/student.slice";
import { assignStudent, unAssignStudent } from "../../redux/slices/class.slice";
import { toastify } from "../../utilities/toastify/toastify.utility";

interface IStudentsTableProps {
  students: IStudent[];
}

const StudentsTable: FC<IStudentsTableProps> = ({ students }) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const classes = useSelector(classSelector);

  const [selectedStudent, setSelectedStudent] = useState<IStudent | null>(null);

  const handleClickOpen = (student: IStudent) => {
    setSelectedStudent(student);
  };

  const handleClose = () => {
    setSelectedStudent(null);
  };

  const handleAction = async (classId: string) => {
    if (!selectedStudent) {      
      return;
    }

    await studentService.assign(selectedStudent.studentId, Number(classId)),
      dispatch(
        unAssignStudent({
          classId: Number(selectedStudent.classId),
          studentId: selectedStudent.studentId,
        })
      );
    dispatch(
      assignStudent({
        classId: Number(classId),
        student: selectedStudent,
      })
    );
    dispatch(
      assignClass({
        classId: Number(classId),
        studentId: selectedStudent.studentId,
      })
    );

    handleClose();
  };

  const handleDelete = async (student: IStudent) => {
    try {
      await studentService.deleteStudent(student.studentId);
      dispatch(deleteStudent(student.studentId));
      dispatch(
        unAssignStudent({
          classId: Number(student.classId),
          studentId: student.studentId,
        })
      );
    } catch (error) {
      toastify("error", SOMETHING_WENT_WROG_MESSAGE);
    }
  };

  const filteredAndFormatedClasses = useMemo(() => {
    if (!selectedStudent) {
      return [];
    }

    const filteredClasses = classes.filter(
      (cls) =>
        cls.students.length < cls.maxSeats &&
        cls.classId !== selectedStudent.classId
    );

    return filteredClasses.map(({ classId, className }) => {
      return { key: String(classId), title: className };
    });
  }, [classes, selectedStudent]);

  return (
    <>
      <TableContainer component={Paper} sx={styles.table}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {tableTitles.map((title) => (
                <TableCell key={title} align="center">
                  {title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.studentId}>
                {studentKeys.map((key) => (
                  <TableCell key={key} align="center">
                    {student[key]}
                  </TableCell>
                ))}
                <TableCell align="center">
                  <Button
                    sx={styles.buttons}
                    onClick={() => handleClickOpen(student)}
                  >
                    assign to class
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Button
                    sx={styles.buttons}
                    onClick={() => handleDelete(student)}
                  >
                    delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {selectedStudent && (
        <ListDialog
          onClose={handleClose}
          handleAction={handleAction}
          listTitle="Available Classes"
          open={Boolean(selectedStudent)}
          avatartIcon={
            <Avatar sx={styles.classIcon}>
              <SchoolIcon />
            </Avatar>
          }
          listItems={filteredAndFormatedClasses}
          emptyListTitle={NO_AVAILABLE_CLASSES_MESSAGE}
          actionIcon={<AddIcon sx={styles.addIcon}></AddIcon>}
        />
      )}
    </>
  );
};

export default StudentsTable;
