import { Route, Routes } from "react-router-dom";
import route from "./route.json";
import Home from "../Pages/Home";
import Resume from "../Pages/Resume";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import ProjectDetails from "../Pages/ProjectDetails";
import MasterLayout from "../layouts/MasterLayout";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path={route.HOME} element={<MasterLayout />}>
        <Route index element={<Home />} />

        <Route path={route.ABOUT} element={<About />} />
        <Route path={route.RESUME} element={<Resume />} />
        <Route path={route.CONTACT} element={<Contact />} />
        <Route path={route.PROJECTS} element={<Projects />} />
        <Route path={route.DETAILS} element={<ProjectDetails />} />
      </Route>
    </Routes>
  );
};
export default PageRoutes;
