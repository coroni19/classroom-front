import ClassCard from "../../components/ClassCrad/ClassCard";
import { useStyles } from "./ClassPage.style";

const ClassPage = () => {
  const styles = useStyles();

  return (
    <div style={styles.classCardContainer}>
      <ClassCard />
      <ClassCard />
      <ClassCard />
      <ClassCard />
      <ClassCard />
      <ClassCard />
      <ClassCard />
      <ClassCard />
      <ClassCard />
      <ClassCard />
      <ClassCard />
      <ClassCard />
      <ClassCard />
    </div>
  );
};

export default ClassPage;
