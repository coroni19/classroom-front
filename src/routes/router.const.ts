import ClassPage from "../pages/ClassPage/ClassesPage";
import CreatePage from "../pages/CreatePage/CreatePage";
import StudentsPage from "../pages/StudentsPage/StudentsPage";

export const routes = [
  { path: "*", element: ClassPage },
  { path: "students", element: StudentsPage },
  { path: "create", element: CreatePage },
];
