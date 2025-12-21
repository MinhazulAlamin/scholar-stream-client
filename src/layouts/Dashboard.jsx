import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import Loader from '../pages/Loader/Loader';
import DashSidebar from '../pages/Dashboard/DashSidebar';
import ReactToaster from '../ReactToaster/ReactToaster';
import { Outlet } from 'react-router';

const Dashboard = () => {

  const { loading } = use(AuthContext);

  if (loading) {
    return <Loader />;
  }

  return (
    <div data-theme="light" className="flex max-w-[1440px] mx-auto bg-sky-50">
      {/* <ScrollToTop/> */}
      <DashSidebar />
      <ReactToaster/>
      <Outlet />
    </div>
  );
};

export default Dashboard;