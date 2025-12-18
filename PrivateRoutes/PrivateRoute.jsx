import { use, useEffect, useRef } from "react";
import { AuthContext } from "../src/context/AuthContext";
import toast from "react-hot-toast";
import Loader from "../src/pages/Loader/Loader";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
    const hasShownToast = useRef(false);

  useEffect(() => {
    if (!loading && !user && !hasShownToast.current) {
      toast.error("Please Login to Access This Feature");
      hasShownToast.current = true;
    }
  }, [loading, user]);


  if (loading) {
    return <Loader />;
  }

  if (user) {
    return children;
  }

    return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;