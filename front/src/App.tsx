import RootLayout from "./layout/RootLayout";
import ClassPage from "./pages/ClassPage/ClassPage";
import CreatePage from "./pages/CreatePage/CreatePage";
import StudentsPage from "./pages/StudentsPage/StudentsPage";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

  const router = createBrowserRouter(
  createRoutesFromElements(
     <Route path="/*" element={<RootLayout />}>
        <Route path="*" element={<ClassPage />} />
        <Route path="students" element={<StudentsPage />} />
        <Route path="create" element={<CreatePage />} />
      </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
