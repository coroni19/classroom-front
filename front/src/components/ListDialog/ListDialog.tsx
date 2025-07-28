import {
  List,
  Dialog,
  ListItem,
  DialogTitle,
  ListItemText,
  ListItemAvatar,
  ListItemButton,
} from "@mui/material";

import type { FC, JSX } from "react";
import { useStyles } from "./ListDialog.style";

export interface IDialogProps {
  open: boolean;
  listTitle: string;
  onClose: () => void;
  emptyListTitle: string;
  actionIcon: JSX.Element;
  avatartIcon: JSX.Element;
  listItems: { key: string; title: string }[];
  handleAction: (id: string) => Promise<void>;
}

const ListDialog: FC<IDialogProps> = ({
  open,
  onClose,
  listItems,
  listTitle,
  actionIcon,
  avatartIcon,
  handleAction,
  emptyListTitle,
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
