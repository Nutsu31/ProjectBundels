import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../components/header/NavBar";
import { useEffect } from "react";
const Root = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/todo-app");
  }, []);
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Root;
