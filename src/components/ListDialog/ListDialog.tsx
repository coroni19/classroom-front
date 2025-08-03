import {
  List,
  Dialog,
  ListItem,
  DialogTitle,
  ListItemText,
  ListItemAvatar,
  ListItemButton,
} from "@mui/material";

import { type FC, type JSX } from "react";
import { useStyles } from "./ListDialog.style";
import { toastify } from "../../utilities/toastify/toastify.utility";
import { SOMETHING_WENT_WROG_MESSAGE } from "../../constants/messages.const";
import { ERROR_TOAST_OPTION } from "../../utilities/toastify/tosatify.const";

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

  const handleActionButton = async (key: string) => {
    try {
      await handleAction(key);
    } catch (error) {
      toastify(ERROR_TOAST_OPTION, SOMETHING_WENT_WROG_MESSAGE);
    }
  };

  return (
    <Dialog onClose={onClose} open={open}>
      {listItems.length ? (
        <>
          <DialogTitle sx={styles.dialogTitle}>{listTitle}</DialogTitle>
          <List sx={styles.list}>
            {listItems.map((item) => (
              <ListItem disablePadding key={item.key} sx={styles.itemInfo}>
                <ListItemAvatar sx={styles.avatar}>
                  {avatartIcon}
                </ListItemAvatar>
                <ListItemText
                  primary={item.title}
                  sx={styles.itemName}
                  slotProps={{ primary: styles.itemName }}
                />
                <ListItemButton onClick={() => handleActionButton(item.key)}>
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
