import { type FC } from "react";
import { useStyles } from "./ClassCard.style";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, Card, IconButton, Typography } from "@mui/material";
import { useThemeContext } from "../../contexts/Theme.context";
import type { TClass } from "../../types/class.type";

interface IClassProps {
  cls: TClass;

  handleOpen: (clS: TClass) => void;
}

const ClassCard: FC<IClassProps> = ({ cls, handleOpen }) => {
  const { theme } = useThemeContext();
  const styles = useStyles(theme);

  const seatsLeft = cls.maxSeats - cls.students.length;

  return (
    <Card sx={styles.card}>
      <div style={styles.header}>
        <Typography sx={styles.className}>{cls.className}</Typography>
        <Box sx={styles.seatsLeft}>
          {seatsLeft === 1 ? "there is " : "there are "}
          <Typography sx={styles.numbers}>{seatsLeft}</Typography>
          {seatsLeft === 1 ? " seat left" : " seats left"}
        </Box>
        <Box sx={styles.outOf}>
          out of <Typography sx={styles.numbers}>{cls.maxSeats}</Typography>
        </Box>
      </div>
      <div style={styles.footer}>
        <Button sx={styles.studentsList} onClick={() => handleOpen(cls)}>
          students list
        </Button>
        <IconButton onClick={() => {}}>
          <DeleteIcon sx={styles.icons} />
        </IconButton>
        <div></div>
      </div>
    </Card>
  );
};

export default ClassCard;
