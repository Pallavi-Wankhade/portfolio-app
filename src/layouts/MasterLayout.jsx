import { Outlet } from "react-router-dom";
import AppFooter from "../Components/AppFooter/AppFooter";
import AppHeader from "../Components/AppHeader/AppHeader";

const MasterLayout = () => {
  return (
    <>
      <AppHeader />
      <main>
        <Outlet />
      </main>
      <AppFooter />
    </>
  );
};

export default MasterLayout;
