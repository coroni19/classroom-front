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
import type { TStudent } from "../../types/class.type";
import { useThemeContext } from "../../contexts/Theme.context";
import { deleteStudent } from "../../redux/slices/student.slice";
import { classSelector } from "../../redux/selectors/class.selector";
import studentService from "../../pages/StudentsPage/student.service";

interface IStudentsTableProps {
  students: TStudent[];
}

const StudentsTable: FC<IStudentsTableProps> = ({ students }) => {
  const { theme } = useThemeContext();
  const styles = useStyles(theme);
  const dispatch = useDispatch();
  const classes = useSelector(classSelector);

  const [open, setOpen] = useState(false);
  const [student, setStudent] = useState<TStudent | null>(null);

  const handleClickOpen = (student: TStudent) => {
    setStudent(student);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const queryClient = useQueryClient();

  const handleDelete = async (studentId: string) => {
    console.log(studentId);

    await queryClient.fetchQuery({
      queryKey: ["deleteStudent", studentId],
      queryFn: () => studentService.deleteStudent(studentId),
    });
    dispatch(deleteStudent(studentId));
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
              <TableRow
                key={student.studentId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
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
                    onClick={() => handleDelete(student.studentId)}
                  >
                    delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ListDialog
        open={open}
        onClose={handleClose}
        actionIcon={<AddIcon sx={styles.addIcon}></AddIcon>}
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
              cls.students.length < cls.maxSeats &&
              !student?.classes.find((cl: any) => cl.classId === cls.classId)
          )
          .map(({ classId, className }) => {
            return { key: classId, title: className };
          })}
      />
    </>
  );
};

export default StudentsTable;
