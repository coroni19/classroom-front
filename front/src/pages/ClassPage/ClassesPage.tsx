import ClassCard from "../../components/ClassCrad/ClassCard";
import { useStyles } from "./ClassesPage.style";
import { useSelector } from "react-redux";
import { classSelector } from "../../redux/selectors/class.selector";

const ClassPage = () => {
  const styles = useStyles();

  const classes = useSelector(classSelector);

  return (
    <div style={styles.classCardContainer}>
      {classes.map((classData) => (
        <ClassCard
          key={classData.classId}
          className={classData.className}
          maxSeats={classData.maxSeats}
        />
      ))}
    </div>
  );
};

export default ClassPage;
