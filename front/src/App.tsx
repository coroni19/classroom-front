import RootLayout from "./layout/RootLayout";
import ClassPage from "./pages/ClassPage/ClassesPage";
import CreatePage from "./pages/CreatePage/CreatePage";
import StudentsPage from "./pages/StudentsPage/StudentsPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import useFetchAndDispatch from "./hooks/useFetchDispatch.hook";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/*" element={<RootLayout />}>
      <Route path="*" element={<ClassPage />} />
      <Route path="students" element={<StudentsPage />} />
      <Route path="create" element={<CreatePage />} />
    </Route>
  )
);

const App = () => {
  useFetchAndDispatch("students");
  useFetchAndDispatch("classes");

  return <RouterProvider router={router} />;
};

export default App;
