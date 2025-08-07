import {
  DELETE_CLASS_ERROR_MESSAGE,
  SOMETHING_WENT_WROG_MESSAGE,
} from "../../constants/messages.const";

import { useStyles } from "./ClassCard.style";
import { useAppDispatch } from "../../redux/store";
import { useMemo, useState, type FC } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import classService from "../../services/class.service";
import { deleteClass } from "../../redux/slices/class.slice";
import type { IClass } from "../../interfaces/class.interface";
import type { IStudent } from "../../interfaces/student.interface";
import { Button, Card, IconButton, Typography } from "@mui/material";
import { toastify } from "../../utilities/toastify/toastify.utility";
import { ERROR_TOAST_OPTION } from "../../utilities/toastify/tosatify.const";

interface IClassProps {
  cls: IClass;
  handleOpen: (clS: IClass) => void;
}

const ClassCard: FC<IClassProps> = ({ cls, handleOpen }) => {
  const styles = useStyles();
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);

  const seatsLeft = useMemo(() => {
    return cls.maxSeats - cls.students.length;
  }, [cls.maxSeats, cls.students.length]);

  const handleDelete = async (students: IStudent[]) => {
    if (students.length !== 0) {
      toastify(ERROR_TOAST_OPTION, DELETE_CLASS_ERROR_MESSAGE);
      return;
    }

    try {
      setLoading(true);

      await classService.delete(cls.classId);
      dispatch(deleteClass({ classId: cls.classId }));
    } catch (error) {
      toastify(ERROR_TOAST_OPTION, SOMETHING_WENT_WROG_MESSAGE);
    } finally {
      setLoading(false);
    }
  };

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
          onClick={() => handleDelete(cls.students)}
          loading={loading}
        >
          {!loading && <DeleteIcon sx={styles.icons} />}
        </IconButton>
      </div>
    </Card>
  );
};

export default ClassCard;
