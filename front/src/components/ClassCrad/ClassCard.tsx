import { type FC } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useStyles } from "./ClassCard.style";
import DeleteIcon from "@mui/icons-material/Delete";
import classService from "../../services/class.service";
import { deleteClass } from "../../redux/slices/class.slice";
import type { IClass } from "../../interfaces/class.interface";
import { Button, Card, IconButton, Typography } from "@mui/material";

interface IClassProps {
  cls: IClass;
  handleOpen: (clS: IClass) => void;
}

const ClassCard: FC<IClassProps> = ({ cls, handleOpen }) => {
  const styles = useStyles();

  const seatsLeft = cls.maxSeats - cls.students.length;

  const dispatch = useDispatch();

  const handleDelete = async () => {
    await classService.deleteClass(cls.classId)
    dispatch(deleteClass({ classId: cls.classId }));
  };

  const notify = () =>
    toast.error("Error: class cannot be deleted if students are assigned", {
      position: "bottom-right",
      autoClose: 4000,
      closeButton: false,
      hideProgressBar: true,
      // icon: <ErrorOutlineIcon sx={styles.errorIcon}/>,
      style: styles.errorToastify,
    });

  return (
    <Card sx={styles.card}>
      <div style={styles.header}>
        <Typography sx={styles.className}>{cls.className}</Typography>
        <Typography sx={styles.seatsLeft}>
          {seatsLeft === 1 ? "there is " : "there are "}
          <b>{seatsLeft}</b>
          {seatsLeft === 1 ? " seat left" : " seats left"}
        </Typography>
        <Typography sx={styles.outOf}>
          out of <b>{cls.maxSeats}</b>
        </Typography>
      </div>
      <div style={styles.footer}>
        <Button sx={styles.studentsList} onClick={() => handleOpen(cls)}>
          students list
        </Button>

        <IconButton
          onClick={cls.students.length === 0 ? () => handleDelete() : notify}
        >
          <DeleteIcon sx={styles.icons} />
        </IconButton>
        <div></div>
      </div>
    </Card>
  );
};

export default ClassCard;
