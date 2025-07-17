import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import ClassPage from "../pages/ClassPage/ClassesPage";
import CreatePage from "../pages/CreatePage/CreatePage";
import StudentsPage from "../pages/StudentsPage/StudentsPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/*" element={<RootLayout />}>
      <Route path="*" element={<ClassPage />} />
      <Route path="students" element={<StudentsPage />} />
      <Route path="create" element={<CreatePage />} />
    </Route>
  )
);