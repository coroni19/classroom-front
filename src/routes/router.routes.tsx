import { routes } from "./router.const";
import RootLayout from "../layout/RootLayout";
import { Route, Routes } from "react-router-dom";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="roni/*" element={<RootLayout />}>
        {routes.map((route) => (
          <Route
            key={route.path}
            element={<route.element />}
            path={route.path}
          />
        ))}
      </Route>
    </Routes>
  );
};
