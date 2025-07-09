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
import { useStyles } from "./ListDialog.style";
import type { TClass } from "../../types/class.type";

export interface IDialogProps {
  open: boolean;
  onClose: () => void;
  actionIcon: JSX.Element;
  avatartIcon: JSX.Element;
  listTitle: string;
  emptyListTitle: string;
  listItems: { key: number | string; title: string }[];
}

const ListDialog: FC<IDialogProps> = ({
  open,
  onClose,
  actionIcon,
  avatartIcon,
  listItems,
  emptyListTitle,
  listTitle,
}) => {
  const styles = useStyles();

  return (
    <Dialog onClose={onClose} open={open}>
      {listItems.length ? (
        <>
          <DialogTitle sx={styles.dialogTitle}>{listTitle}</DialogTitle>
          <List sx={styles.list}>
            {listItems.map((item, index) => (
              <ListItem disablePadding key={index} sx={styles.studentInfo}>
                <ListItemAvatar sx={styles.avatar}>
                  {avatartIcon}
                </ListItemAvatar>
                <ListItemText
                  primary={item.title}
                  sx={styles.studentName}
                  slotProps={{ primary: styles.studentName }}
                />
                <ListItemButton>{actionIcon}</ListItemButton>
              </ListItem>
            ))}
          </List>
        </>
      ) : (
        <DialogTitle sx={styles.dialogTitle}>{emptyListTitle}</DialogTitle>
      )}
    </Dialog>
  );
};

export default ListDialog;
