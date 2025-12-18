import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login-Register/Login";
import Register from "../pages/Login-Register/Register";
import AllScholarship from "../pages/All Scholarship/AllScholarship";
import ScholarshipDetails from "../pages/All Scholarship/ScholarshipDetails";
import PaymentSuccess from "../pages/Payment/PaymentSuccess";
import Error404 from "../pages/Errors/Error404";
import DashHome from "../pages/Dashboard/DashHome";
import Profile from "../pages/Dashboard/Profile";
import ManageReview from "../pages/Dashboard/Moderator/ManageReview";
import StripeProvider from "../Stripe/StripeProvider";
import CheckOutForm from "../pages/Payment/CheckOutForm";
import Dashboard from "../layouts/Dashboard";
import AddScholarship from "../pages/Dashboard/Admin/AddScholarship";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import Analytics from "../pages/Dashboard/Admin/Analytics";
import ManageApplication from "../pages/Dashboard/Moderator/ManageApplication";
import MyReviews from "../pages/Dashboard/Student/MyReviews";
import PrivateRoute from "../../PrivateRoutes/PrivateRoute";
import AdminPrivate from "../../PrivateRoutes/AdminPrivate";
import ModeratorPrivate from "../../PrivateRoutes/ModeratorPrivate";
import UserPrivate from "../../PrivateRoutes/UserPrivate";
import ManageScholarship from "../pages/Dashboard/Admin/ManageScholarship";
import MyApplications from "../pages/Dashboard/Student/MyApplications";

export const router = createBrowserRouter([
  //Main Site Related Routes
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },

      //Login Register Related Routes
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },

      //All Scholarship Related Routes
      {
        path: "all-scholarships",
        Component: AllScholarship,
      },
      {
        path: "details/:id",
        Component: ScholarshipDetails,
      },
      {
        path: "payment",
        element: (
          <PrivateRoute>
            <StripeProvider>
              <CheckOutForm />
            </StripeProvider>
          </PrivateRoute>
        ),
      },
      {
        path: "payment-success",
        Component: PaymentSuccess,
      },
      {
        path: "*",
        Component: Error404,
      },
    ],
  },

  //Dashboard Related Routes
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),

    children: [
      //Common Routes
      {
        index: true,
        Component: DashHome,
      },
      {
        path: "profile",
        Component: Profile,
      },

      //Admin Routes
      {
        path: "add-scholarship",
        element: (
          <AdminPrivate>
            <AddScholarship />
          </AdminPrivate>
        ),
      },
      {
        path: "manage-scholarship",
        element: (
          <AdminPrivate>
            <ManageScholarship />
          </AdminPrivate>
        ),
      },
      {
        path: "manage-users",
        element: (
          <AdminPrivate>
            <ManageUsers />
          </AdminPrivate>
        ),
      },
      {
        path: "analytics",
        element: (
          <AdminPrivate>
            <Analytics />
          </AdminPrivate>
        ),
      },

      //Moderator Routes
      {
        path: "manage-applications",
        element: (
          <ModeratorPrivate>
            <ManageApplication />
          </ModeratorPrivate>
        ),
      },
      {
        path: "manage-reviews",
        element: (
          <ModeratorPrivate>
            <ManageReview />
          </ModeratorPrivate>
        ),
      },

      //User Routes
      {
        path: "my-applications",
        element: (
          <UserPrivate>
            <MyApplications />
          </UserPrivate>
        ),
      },
      {
        path: "my-reviews",
        element: (
          <UserPrivate>
            <MyReviews />
          </UserPrivate>
        ),
      },
      {
        path: "*",
        Component: Error404,
      },
    ],
  },
]);