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
import { useDispatch } from "react-redux";
import { useState, type FC } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useStyles } from "./StudentsTable.style";
import SchoolIcon from "@mui/icons-material/School";
import type { TStudent } from "../../types/class.type";
import StudentsList from "../StudentsList/StudentsList";
import { useThemeContext } from "../../contexts/Theme.context";
import { deleteStudent } from "../../redux/slices/student.slice";
import { useQuery } from "react-query";
import studentService from "../../pages/StudentsPage/student.service";

interface IStudentsTableProps {
  students: TStudent[];
}

const StudentsTable: FC<IStudentsTableProps> = ({ students }) => {
  const styles = useStyles();
  const { theme } = useThemeContext();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const titles = [
    "ID",
    "First name",
    "Last name",
    "Age",
    "Profession",
    "Assign",
    "Delete",
  ];

  const handleDelete = (studentId: string) => {
    // const {data} = useQuery({
    //   queryKey: ["delete", studentId],
    //   queryFn: () => studentService.deleteStudent(studentId),
    // });

    dispatch(deleteStudent(studentId));
    console.log(studentId);
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
                    sx={{
                      ...styles.buttons,
                      ...theme,
                      outline: `1px solid ${theme.color}`,
                    }}
                    onClick={handleClickOpen}
                  >
                    assign to class
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Button
                    sx={{
                      ...styles.buttons,
                      ...theme,
                      outline: `1px solid ${theme.color}`,
                    }}
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
      <StudentsList
        open={open}
        onClose={handleClose}
        actionIcon={<AddIcon sx={{ ...styles.addIcon, ...theme }}></AddIcon>}
        avatartIcon={
          <Avatar sx={styles.classIcon}>
            <SchoolIcon />
          </Avatar>
        }
      />
    </>
  );
};

export default StudentsTable;
