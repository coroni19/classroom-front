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
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useStyles } from "./StudentsTable.style";
import SchoolIcon from "@mui/icons-material/School";
import StudentsList from "../StudentsList/StudentsList";
import { useThemeContext } from "../../contexts/Theme.context";

const createData = (
  id: string,
  name: string,
  last: string,
  age: number,
  prof: string
) => {
  return { id, name, last, age, prof };
};

const rows = [
  createData("123456789", "דוד", "שימי", 65, "חשמליזציה"),
  createData("569874523", "יוסי", "בן יוסי", 99, "יוסאי"),
  createData("369147456", "איימי", "וואינהאוס", 27, "זמרת"),
  createData("410259689", "עמוס", "סומע", 100, "מורה רוחני"),
  createData("365326478", "ריף", "רוף", 32, "מטקאי"),
];

const StudentsTable = () => {
  const styles = useStyles();
  const { theme } = useThemeContext();

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
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.last}</TableCell>
                <TableCell align="center">{row.age}</TableCell>
                <TableCell align="center">{row.prof}</TableCell>

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
