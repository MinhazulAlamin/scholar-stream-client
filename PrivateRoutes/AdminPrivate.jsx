import { use } from "react";
import { AuthContext } from "../src/context/AuthContext";
import Loader from "../src/pages/Loader/Loader";
import { Navigate } from "react-router";

const AdminPrivate = ({ children }) => {
  const { userFromDb, dbLoading } = use(AuthContext);

  if (dbLoading)
    return <Loader />;

  else if (userFromDb?.role !== "Admin")
    return <Navigate to="/dashboard" replace />;

  else return children;
};

export default AdminPrivate;