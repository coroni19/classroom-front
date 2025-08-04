import { ROUTES } from "./router.const";
import RootLayout from "../layout/RootLayout";
import { Route, Routes } from "react-router-dom";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<RootLayout />}>
        {ROUTES.map((route) => (
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
