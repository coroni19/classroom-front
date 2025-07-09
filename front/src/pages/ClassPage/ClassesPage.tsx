import { useSelector } from "react-redux";
import { useStyles } from "./ClassesPage.style";
import ClassCard from "../../components/ClassCrad/ClassCard";
import { classSelector } from "../../redux/selectors/class.selector";
import { Avatar } from "@mui/material";
import { useState } from "react";
import ListDialog from "../../components/ListDialog/ListDialog";
import PersonIcon from "@mui/icons-material/Person";
import DeleteIcon from "@mui/icons-material/Delete";
import { useThemeContext } from "../../contexts/Theme.context";
import type { TClass } from "../../types/class.type";

const ClassPage = () => {
  const { theme } = useThemeContext();
  const styles = useStyles(theme);

  const classes = useSelector(classSelector);

  const [selectedClass, setSelectedClass] = useState<TClass | null>(null);

  const handleOpen = (cls: TClass) => {
    setSelectedClass(cls);
  };

  const handleClose = () => {
    setSelectedClass(null);
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
      <ListDialog
        open={Boolean(selectedClass)}
        onClose={handleClose}
        actionIcon={<DeleteIcon sx={styles.icons}></DeleteIcon>}
        avatartIcon={
          <Avatar sx={styles.personIcon}>
            <PersonIcon />
          </Avatar>
        }
        listTitle="Class Students"
        emptyListTitle="There Are No Students In This Class"
        listItems={
          selectedClass
            ? selectedClass.students.map(
                ({ firstName, lastName, studentId }) => {
                  return {
                    key: studentId,
                    title: firstName.concat(" " + lastName),
                  };
                }
              )
            : []
        }
      />
    </>
  );
};

export default ClassPage;
