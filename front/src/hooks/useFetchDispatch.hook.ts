import { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { setClasses } from "../redux/slices/class.slice";
import classService from "../pages/ClassPage/class.service";
import { setStudents } from "../redux/slices/student.slice";
import studentService from "../pages/StudentsPage/student.service";

const useFetchAndDispatch = (queryKey: string) => {
    const { data, isSuccess } = useQuery({
    queryKey: [queryKey],
    queryFn: queryKey === "students" ? () => studentService.getAllStudents() : () => classService.getAllClasses(),
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess && data) {
      dispatch( queryKey === "students" ? setStudents(data) : setClasses(data));
    }
  }, [isSuccess, data]);

  return [data];
};

export default useFetchAndDispatch;