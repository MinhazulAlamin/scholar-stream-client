import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';
import { IoSchool } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="mt-24 bg-gradient-to-b from-sky-50 via-white to-sky-100 border-t border-green-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold bg-clip-text t">
              <a
                className="btn btn-ghost text-lg sm:text-3xl font-bold hover:bg-transparent hover:border-0"
                href="/">
                <IoSchool className="text-green-600" />
                Scholar<span className="text-green-600">Stream</span>
              </a>
            </h2>

            <p className="mt-4 text-sm text-gray-600 leading-relaxed max-w-sm mx-auto">
              A modern scholarship management platform helping students discover
              opportunities, track applications, and achieve academic success
              worldwide.
            </p>

            <div className="flex justify-center gap-4 mt-6">
              {[
                { icon: <FaFacebookF />, link: "https://www.facebook.com/MinhazulAlamin007/" },
                { icon: <FaInstagram />, link: "https://www.instagram.com/" },
                { icon: <FaYoutube />, link: "https://www.youtube.com/" },
                { icon: <FaGithub />, link: "https://github.com/MinhazulAlamin" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  target="_blank"
                  className="
                    w-10 h-10 flex items-center justify-center
                    rounded-full
                    bg-white
                    shadow-md
                    text-green-600
                    hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-500
                    hover:text-white
                    transition-all duration-300
                  ">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              About & Support
            </h4>

            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-green-600 transition cursor-pointer">
                About Us
              </li>
              <li className="hover:text-green-600 transition cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-green-600 transition cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-green-600 transition cursor-pointer">
                Contact Support
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-green-200 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Scholar Stream · All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;