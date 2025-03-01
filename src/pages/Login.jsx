import React, { useEffect, useState } from "react";
import { Icons } from "../assets/icons/Icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PopUp from "../components/PopUp";

const Login = () => {
  // LAGAYAN TO NG VALUE SA USERNAME AT  PASSWORD AT DUN SA ICON NA MATA

  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isHidden, setIsHidden] = useState(false);

  // USESTATE PARA SA POPUP PAG SUCCESS AND ERROR LOGIN

  const [popUpError, setPopUpError] = useState(false);
  const [popUpSuccess, setPopUpSuccess] = useState(false);

  // FETCHING DON SA USER SA FAKEDB PALTAN NALANG YUNG LINK SA API NG BACK END

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:3001/user");
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  const handlePassword = () => {
    setIsHidden((prev) => !prev);
  };

  const navigate = useNavigate();

  // FUNCTION SA LOGINFORM

  const handleSubmit = (e) => {
    e.preventDefault();

    const userFound = users.find(
      (user) =>
        user.username === username.trim() && user.password === password.trim(),
    );

    if (userFound) {
      setPopUpSuccess(true);
      setTimeout(() => {
        setPopUpSuccess(false);
        navigate("/dashboard");
      }, 1500);
    } else {
      setPopUpError(true);
      setTimeout(() => {
        setPopUpError(false);
      }, 1500);
    }
  };

  document.title = "Login Form";

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="bg-dark shadow-login my-auto flex w-max flex-col gap-16 rounded-xl px-18 py-10">
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="bg-gradient-to-r from-[#535C91] to-[#a9b5df] bg-clip-text p-3 text-[45px] font-bold text-transparent">
            EBMS Eco Cooling
          </h1>
          <h3 className="text-light text-sm">
            Inventory system of defective and materials
          </h3>
        </div>
        <form className="flex flex-col gap-8" action="" onSubmit={handleSubmit}>
          <div className="relative">
            <Icons.User
              size={24}
              className="text-dark absolute top-1/2 ml-5 -translate-y-1/2"
            />
            <input
              type="text"
              placeholder="Username"
              className="inputs w-full rounded-md pl-15"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="relative">
            <Icons.Password
              size={24}
              className="text-dark absolute top-1/2 ml-5 -translate-y-1/2"
            />
            <input
              type={isHidden ? "text" : "password"}
              placeholder="Password"
              className="inputs w-full rounded-md px-15"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {isHidden ? (
              <Icons.Hide
                size={30}
                className="text-dark absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer"
                onClick={handlePassword}
              />
            ) : (
              <Icons.Unhide
                size={30}
                className="text-dark absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer"
                onClick={handlePassword}
              />
            )}
          </div>
          <input
            type="submit"
            value="Login"
            className="inputs my-6 cursor-pointer rounded-md font-semibold hover:opacity-90"
          />
        </form>
      </div>

      <PopUp
        text={"Please enter correct username and password !"}
        bgColor={"bg-red-500"}
        textColor={"text-white"}
        isTrue={popUpError}
      />

      <PopUp
        text={"Login Successfully !"}
        bgColor={"bg-green-700 px-7"}
        textColor={"text-white"}
        isTrue={popUpSuccess}
      />
    </div>
  );
};

export default Login;
