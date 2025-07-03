import {
  List,
  Dialog,
  ListItem,
  DialogTitle,
  ListItemText,
  ListItemButton,
  ListItemAvatar,
} from "@mui/material";
import type { FC, JSX } from "react";
import { useStyles } from "./StudentsList.style";

const students = ["איימי ווינהאוס", "דוד שימי"];

export interface IDialogProps {
  open: boolean;
  onClose: () => void;
  actionIcon: JSX.Element;
  avatartIcon: JSX.Element;
}

const StudentsList: FC<IDialogProps> = ({
  open,
  onClose,
  actionIcon,
  avatartIcon,
}) => {
  const styles = useStyles();

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle sx={styles.dialogTitle}>Class Students</DialogTitle>
      <List sx={styles.list}>
        {students.map((student) => (
          <ListItem disablePadding key={student} sx={styles.studentInfo}>
            <ListItemAvatar sx={styles.avatar}>{avatartIcon}</ListItemAvatar>
            <ListItemText
              primary={student}
              sx={styles.studentName}
              slotProps={{ primary: styles.studentName }}
            />
            <ListItemButton>{actionIcon}</ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};

export default StudentsList;
