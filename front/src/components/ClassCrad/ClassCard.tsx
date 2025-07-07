import { useState, type FC } from "react";
import { useStyles } from "./ClassCard.style";
import PersonIcon from "@mui/icons-material/Person";
import DeleteIcon from "@mui/icons-material/Delete";
import StudentsList from "../StudentsList/StudentsList";
import { Avatar, Button, Card, IconButton, Typography } from "@mui/material";
import { useThemeContext } from "../../contexts/Theme.context";

interface IClassProps {
  className: string,
  maxSeats: number
}

const ClassCard: FC<IClassProps> = ({className ,maxSeats}) => {
  const styles = useStyles();
  const { theme } = useThemeContext();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={styles.card}>
      <div style={styles.header}>
        <Typography sx={styles.className}>{className}</Typography>
        <Typography sx={styles.seatsLeft}>there are 2 seats left</Typography>
        <Typography sx={styles.outOf}>out of {maxSeats}</Typography>
      </div>
      <div style={styles.footer}>
        <Button sx={styles.studentsList} onClick={handleClickOpen}>
          students list
        </Button>
        <StudentsList
          open={open}
          onClose={handleClose}
          actionIcon={<DeleteIcon sx={{ ...theme }}></DeleteIcon>}
          avatartIcon={
            <Avatar sx={styles.personIcon}>
              <PersonIcon />
            </Avatar>
          }
        />
        <IconButton>
          <DeleteIcon sx={{ ...theme }} />
        </IconButton>
        <div></div>
      </div>
    </Card>
  );
};

export default ClassCard;
