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

import {
  NO_AVAILABLE_CLASSES_MESSAGE,
  SOMETHING_WENT_WROG_MESSAGE,
} from "../../constants/messages.const";

import AddIcon from "@mui/icons-material/Add";
import { useStyles } from "./StudentsTable.style";
import ListDialog from "../ListDialog/ListDialog";
import { useMemo, useState, type FC } from "react";
import SchoolIcon from "@mui/icons-material/School";
import studentService from "../../services/student.service";
import { studentKeys, tableTitles } from "./StudentTable.const";
import type { IStudent } from "../../interfaces/student.interface";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { classSelector } from "../../redux/selectors/class.selector";
import { toastify } from "../../utilities/toastify/toastify.utility";
import { handleDeleteStudent } from "../../redux/actions/class.action";
import { handleAssignStudentToClass } from "../../redux/actions/student.action";

interface IStudentsTableProps {
  students: IStudent[];
}

const StudentsTable: FC<IStudentsTableProps> = ({ students }) => {
  const styles = useStyles();
  const dispatch = useAppDispatch();

  const classes = useAppSelector(classSelector);

  const [selectedStudent, setSelectedStudent] = useState<IStudent | null>(null);

  const handleClickOpen = (student: IStudent) => {
    setSelectedStudent(student);
  };

  const handleClose = () => {
    setSelectedStudent(null);
  };

  const handleAssignStudent = async (classId: string) => {
    if (!selectedStudent) {
      return;
    }

    await studentService.assign(selectedStudent.studentId, Number(classId));
    handleAssignStudentToClass(dispatch, selectedStudent, Number(classId));
    handleClose();
  };

  const handleDelete = async (student: IStudent) => {
    try {
      await studentService.deleteStudent(student.studentId);
      handleDeleteStudent(dispatch, student);
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
          listTitle="Available Classes"
          open={Boolean(selectedStudent)}
          avatartIcon={
            <Avatar sx={styles.classIcon}>
              <SchoolIcon />
            </Avatar>
          }
          handleAction={handleAssignStudent}
          listItems={filteredAndFormatedClasses}
          emptyListTitle={NO_AVAILABLE_CLASSES_MESSAGE}
          actionIcon={<AddIcon sx={styles.addIcon}></AddIcon>}
        />
      )}
    </>
  );
};

export default StudentsTable;
