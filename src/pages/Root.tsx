import { Outlet } from "react-router-dom";
import NavBar from "../components/header/NavBar";
const Root = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Root;
