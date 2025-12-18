import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import Loader from '../pages/Loader/Loader';
import Navbar from '../components/NavBar';
import ReactToaster from '../ReactToaster/ReactToaster';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const Root = () => {
  const { loading } = use(AuthContext);

  if (loading) {
    return <Loader/>;
  }
  return (
    <div data-theme="light" className="max-w-400 mx-auto bg-green-50">

      {/* <ScrollToTop/> */}
      <Navbar></Navbar>
      <ReactToaster />
      <Outlet></Outlet>
      {/* <ScrollToTopButton/> */}
      <Footer></Footer>
    </div>
  );
};

export default Root;