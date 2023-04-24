/** @format */

import React, { useContext, useEffect, useState } from "react";
import { SpinnerDotted } from "spinners-react";
import { BsGoogle } from "react-icons/bs";
import { AiFillApple, AiOutlineUser, AiOutlineCalendar } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";
import { AppContext } from "../../contexts/AppContext";
import axios from "axios";
import Input from "../../components/Input";

function Login() {
  const router = useRouter();

  const {
    setFormData,
    formData,
    currentPage,
    setCurrentPage,
    changeCurrentPageName,
  } = useContext(AppContext);

  const { email, password } = formData;

  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    changeCurrentPageName("");
  }, [currentPage, setCurrentPage]);

  // Send the user details to the api endpoint to login the use
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);
    const userDetails = {
      email,
      password,
    };

    //API endpoint
    const apiEndPoint = `${process.env.PORT}/api/auth/login`;

    // Sending the request with AXIOS
    axios
      .post(apiEndPoint, userDetails)
      .then((response) => {
        setIsloading(false);
        if (typeof window !== "undefined") {
          localStorage.setItem("user", JSON.stringify(response.data));
          router.push("/dashboard");
        }
      })
      .catch((error) => {
        setIsloading(false);
        console.log(error);
      });
  };

  // Get the input valuses
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex justify-center items-center flex-col text-center gap-2 mt-7">
      <h1 className="text-xl font-bold text-[#4E5D78]">Sign In</h1>
      <p className="text-[#4E5D78] text-[14px] font-medium">
        Welcome back, you've been missed!
      </p>
      <div className="flex bg-white drop-shadow-xl p-9 justify-center items-center rounded-lg gap-2 mt-2 flex-col">
        <div className="flex gap-9">
          <button className="text-[#4E5D78] flex justify-center items-center gap-4 bg-gray-100 px-7 py-3 rounded-lg font-poppins font-bold sm:text-[13px] text-[8px]">
            <BsGoogle size={"14"} /> Log in with Google
          </button>
          <button className="text-[#4E5D78] flex justify-center items-center gap-4 bg-gray-100 px-7 py-3 rounded-lg font-poppins font-bold text-[13px]">
            <AiFillApple size={"20"} /> Log in with Apple
          </button>
        </div>

        <div className="w-full relative flex justify-center items-center">
          <div className="h-[2px] bg-gray-200 absolute w-full"></div>
          <h1 className="p-3 text-[#4E5D78] bg-white rounded-full z-20 font-semibold">
            OR
          </h1>
        </div>

        <form className="w-full flex flex-col gap-5" action="" method="post">
          <div className="flex items-center w-full border-2 px-4 h-12 rounded-lg">
            <MdAlternateEmail color="#4E5D78" size="18" />
            <Input
              onChange={handleChange}
              className="px-2 w-full outline-none font-medium text-[15px]"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="flex items-center w-full border-2 px-4 h-12 rounded-lg">
            <FiLock color="#4E5D78" size="18" />
            <input
              onChange={handleChange}
              className="px-2 w-full outline-none font-medium text-[15px]"
              type="password"
              name="password"
              placeholder="Enter Password"
            />
          </div>

          <div className="flex items-center justify-between px-2">
            <div className="flex items-center px-3 w-full gap-2">
              <input className="" type="checkbox" name="remember" id="" />
              <h1 className="text-gray-500 font-medium text-[15px]">
                Remember me
              </h1>
            </div>
            <div className="w-full text-right">
              <h1 className="text-gray-500 font-medium text-[15px]">
                <Link href="/auth/password_rest" legacyBehavior>
                  Forgot Password?
                </Link>
              </h1>
            </div>
          </div>

          <Link href="#" legacyBehavior>
            <button
              onClick={handleSubmit}
              type="submit"
              className="w-full h-11 rounded-lg bg-cyan-500 text-white font-medium flex justify-center items-center"
            >
              {isLoading ? (
                <SpinnerDotted size={25} color="white" thickness={200} />
              ) : (
                "Login"
              )}
            </button>
          </Link>
        </form>
        <h1 className="mt-2 text-[14px] font-semibold text-[#4E5D78]">
          You haven't any account?{" "}
          <span className="text-cyan-500 ml-2">
            <Link href="/auth/signup" legacyBehavior>
              Sign Up
            </Link>
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Login;
