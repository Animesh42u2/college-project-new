import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

  const navigate = useNavigate()

  const [showMenu, setShowMenu] = useState(false)
  const { token, setToken, userData } = useContext(AppContext)

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
  }

  return (
      <div className="flex flex-col">
        {/* Top Strip */}
        <div className="w-full text-white bg-blue-800 px-4 py-4 sm:rounded-lg text-center">
          Hello KIMS: 9876 5432 1098 | KIMS Red Ambulance: 1800 309 8888 | 0674-7111333
        </div>

        {/* Main Navbar */}
        <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
          {/* Logo */}
          <img
              onClick={() => navigate("/")}
              className="w-44 cursor-pointer"
              src={assets.logo}
              alt="KIMS Logo"
          />

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-5 font-medium">
            {["Home", "Doctors", "About", "Contact"].map((item) => {
              const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              return (
                  <NavLink
                      key={item}
                      to={path}
                      className={({ isActive }) =>
                          `relative py-1 transition-all duration-300 hover:text-blue-600 hover:font-semibold ${
                              isActive ? "text-blue-700 font-bold" : ""
                          }`
                      }
                  >
                    {item.toUpperCase()}
                    <div
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-all duration-300"
                        style={{ opacity: window.location.pathname === path ? 1 : 0 }}
                    ></div>
                  </NavLink>
              );
            })}
          </ul>

          {/* User Profile & Authentication */}
          <div className="flex items-center gap-4">
            {token && userData ? (
                <div className="flex items-center gap-2 cursor-pointer group relative">
                  <img className="w-8 rounded-full" src={userData.image} alt="User" />
                  <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />
                  <div className="absolute top-0 right-0 pt-16 font-medium text-base text-gray-600 z-20 hidden group-hover:block">
                    <div className="min-w-44 bg-gray-500 rounded-lg flex flex-col gap-4 p-4 text-white">
                      <p
                          onClick={() => navigate("my-profile")}
                          className="hover:text-black cursor-pointer transition-all duration-300 hover:bg-gray-300 px-2 py-1 rounded"
                      >
                        My Profile
                      </p>
                      <p
                          onClick={() => navigate("my-appointments")}
                          className="hover:text-black cursor-pointer transition-all duration-300 hover:bg-gray-300 px-2 py-1 rounded"
                      >
                        My Appointments
                      </p>
                      <p
                          onClick={logout}
                          className="hover:text-black cursor-pointer transition-all duration-300 hover:bg-gray-300 px-2 py-1 rounded"
                      >
                        Logout
                      </p>
                    </div>
                  </div>
                </div>
            ) : (
                <button
                    onClick={() => navigate("/login")}
                    className="bg-blue-800 text-white px-8 py-3 rounded-full font-light hidden md:block transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
                >
                  Create account
                </button>
            )}

            {/* Mobile Menu Icon */}
            <img
                onClick={() => setShowMenu(true)}
                className="w-6 md:hidden cursor-pointer"
                src={assets.menu_icon}
                alt="Menu"
            />
          </div>

          {/* Mobile Menu */}
          <div
              className={`md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white ${
                  showMenu ? "fixed w-full" : "h-0 w-0"
              }`}
          >
            <div className="flex items-center justify-between px-5 py-6">
              <img className="w-36" src={assets.logo} alt="KIMS Logo" />
              <img
                  className="w-8 cursor-pointer"
                  onClick={() => setShowMenu(false)}
                  src={assets.cross_icon}
                  alt="Close"
              />
            </div>
            <ul className="flex flex-col items-center gap-4 text-lg mt-5 px-5 font-medium">
              {["Home", "Doctors", "About", "Contact"].map((item) => {
                const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                return (
                    <NavLink
                        key={item}
                        onClick={() => setShowMenu(false)}
                        to={path}
                        className="px-4 py-2 rounded inline-block transition-all duration-300 hover:bg-gray-200 hover:shadow-md"
                    >
                      {item}
                    </NavLink>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Navbar