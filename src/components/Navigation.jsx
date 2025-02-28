import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Icons } from "../assets/icons/Icons";
import Logout from "./logout";

const Navigation = () => {
  // USESTATE TO PARA SA ACTIVE NA NAV

  const [isActive, setIsActive] = useState(0);

  // USESTATE PARA SA LOGOUT

  const [isLogout, setIsLogout] = useState(false);

  // GINAWA KO LANG ARRAY PARA IMAP KO NALANG SA <ul>

  const navLinks = ["Dashboard", "Products", "Settings"];
  const navPaths = ["/dashboard", "/products", "/settings"];

  const navigate = useNavigate();
  const location = useLocation();

  const navIcon = [
    <Icons.Dashboard size={30} />,
    <Icons.Product size={30} />,
    <Icons.Settings size={30} />,
  ];

  // FUNCTION PARA ISET KUNG ALIN  YUNG ACTIVE

  const handleActive = (activeIndex) => {
    setIsActive(activeIndex);
  };

  // FUNCTION SA  LOGOUT

  const handleLogout = () => {
    setIsLogout((prev) => !prev);
  };

  // NAVIGATE SA LOGIN PAG NAG YES SA LOGOUT

  const handleYesLogout = () => {
    navigate("/");
  };

  return (
    <>
      <div className="bg-dark flex h-screen w-[25vw] flex-col gap-10 pt-14">
        <h1 className="bg-gradient-to-r from-[#535C91] to-[#a9b5df] bg-clip-text p-3 text-center text-3xl font-bold text-transparent">
          EBMS Eco Cooling
        </h1>
        <ul className="text-light font-medium">
          {navLinks.map((links, index) => {
            const isActive = location.pathname.startsWith(navPaths[index]);

            return (
              <NavLink
                to={navPaths[index]}
                key={index}
                className={`nav-item relative my-5 ml-auto flex w-[90%] cursor-pointer items-center gap-5 rounded-tl-full rounded-bl-full p-3 pl-8 ${
                  isActive && "bg-light text-dark relative"
                }`}
                onClick={() => handleActive(index)}
              >
                {navIcon[index]}
                {links}
                {isActive && (
                  <>
                    <div className="rounded-corner-top bg-light absolute -top-5 -right-1 h-[35px] w-[30px]"></div>
                    <div className="rounded-corner-bottom bg-light absolute -right-1 -bottom-5 h-[35px] w-[30px] rounded-full"></div>
                  </>
                )}
              </NavLink>
            );
          })}
        </ul>
        <p
          className="text-light mt-auto mb-8 ml-18 flex cursor-pointer items-center gap-3 hover:opacity-80"
          onClick={handleLogout}
        >
          {<Icons.Logout size={25} />}Logout
        </p>
      </div>
      {isLogout && (
        <Logout onclickNo={handleLogout} onclickYes={handleYesLogout} />
      )}
    </>
  );
};

export default Navigation;
