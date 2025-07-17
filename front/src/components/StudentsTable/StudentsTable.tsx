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
import { useState, type FC } from "react";
import { useQueryClient } from "react-query";
import AddIcon from "@mui/icons-material/Add";
import { titles } from "./StudentTable.const";
import { useStyles } from "./StudentsTable.style";
import ListDialog from "../ListDialog/ListDialog";
import SchoolIcon from "@mui/icons-material/School";
import { useDispatch, useSelector } from "react-redux";
import studentService from "../../services/student.service";
import type { IStudent } from "../../interfaces/student.interface";
import { classSelector } from "../../redux/selectors/class.selector";
import { assignClass, deleteStudent } from "../../redux/slices/student.slice";
import { assignStudent, unAssignStudent } from "../../redux/slices/class.slice";

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

  const queryClient = useQueryClient();

  const handleAction = async (classId: string | number) => {
    if (selectedStudent) {
      await studentService.assign(selectedStudent.studentId, Number(classId)),

      dispatch(
        unAssignStudent({
          classId: selectedStudent.classId!,
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
    }
  };

  const handleDelete = async (student: IStudent) => {
    await queryClient.fetchQuery({
      queryKey: ["deleteStudent", student.studentId],
      queryFn: () => studentService.deleteStudent(student.studentId),
    });
    dispatch(deleteStudent(student.studentId));
    dispatch(
      unAssignStudent({
        classId: Number(student.classId),
        studentId: student.studentId,
      })
    );
  };

  return (
    <>
      <TableContainer component={Paper} sx={styles.table}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {titles.map((title) => (
                <TableCell key={title} align="center">
                  {title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.studentId}>
                <TableCell align="center">{student.studentId}</TableCell>
                <TableCell align="center">{student.firstName}</TableCell>
                <TableCell align="center">{student.lastName}</TableCell>
                <TableCell align="center">{student.age}</TableCell>
                <TableCell align="center">{student.profession}</TableCell>

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
          open={Boolean(selectedStudent)}
          onClose={handleClose}
          actionIcon={<AddIcon sx={styles.addIcon}></AddIcon>}
          handleAction={handleAction}
          avatartIcon={
            <Avatar sx={styles.classIcon}>
              <SchoolIcon />
            </Avatar>
          }
          listTitle="Available Classes"
          emptyListTitle="There Are No Available Classes"
          listItems={classes
            .filter(
              (cls) =>
                (cls.students.length < cls.maxSeats &&
                cls.classId !== selectedStudent.classId)
            )
            .map(({ classId, className }) => {
              return { key: classId, title: className };
            })}
        />
      )}
    </>
  );
};

export default StudentsTable;
