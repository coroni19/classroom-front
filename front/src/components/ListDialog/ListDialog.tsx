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

export interface IDialogProps {
  open: boolean;
  onClose: () => void;
  actionIcon: JSX.Element;
  avatartIcon: JSX.Element;
  listTitle: string;
  emptyListTitle: string;
  listItems: { key: number | string; title: string }[];
  handleAction: (id: string | number) => Promise<void>;
}

const ListDialog: FC<IDialogProps> = ({
  open,
  onClose,
  actionIcon,
  avatartIcon,
  listItems,
  emptyListTitle,
  listTitle,
  handleAction,
}) => {
  const styles = useStyles();

  return (
    <Dialog onClose={onClose} open={open}>
      {listItems.length ? (
        <>
          <DialogTitle sx={styles.dialogTitle}>{listTitle}</DialogTitle>
          <List sx={styles.list}>
            {listItems.map((item) => (
              <ListItem disablePadding key={item.key} sx={styles.studentInfo}>
                <ListItemAvatar sx={styles.avatar}>
                  {avatartIcon}
                </ListItemAvatar>
                <ListItemText
                  primary={item.title}
                  sx={styles.studentName}
                  slotProps={{ primary: styles.studentName }}
                />
                <ListItemButton onClick={() => handleAction(item.key)}>
                  {actionIcon}
                </ListItemButton>
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
