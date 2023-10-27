/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

// importing loader
import Loader from "../Components/Loader";

// importimg authAction userLogin
import { userLogin } from "../redux/authAction";

import { useSelector, useDispatch } from "react-redux";

const intialState = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState(intialState);


  const { loading, error, success } = useSelector(
    (state) => state.auth
  );

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const togglePasswordVisibility = () => {
    var password = document.getElementById("password");
    var value = password.getAttributeNode("type").value;
    if (value === "password") password.setAttribute("type", "text");
    else password.setAttribute("type", "password");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(formValue));
    navigate("/home");
  };

  return (
    <section className="w-screen h-screen bg-gray-50 dark:bg-gray-900 flex justify-center items-center">
      <div className="lg:w-2/3 md:w-10/12 w-11/12 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-red-400 ext-center">
              Login to your account
            </h1>

            <div className="w-full bg-gradient-to-br from-orange-500 to-pink-500 flex flex-col justify-evenly items-center rounded-lg">
              <button
                type="button"
                className="w-8/12 flex justify-evenly items-center"
              >
                <div className="border-0 bg-transparent p-2 flex justify-center items-center text-white">
                  <span className="mx-2">Login using google</span>
                  <FaGoogle className="text-2xl" />
                </div>
              </button>
            </div>

            <div className="w-full flex flex-col justify-evenly items-center rounded-lg text-white">
              OR
            </div>
            {/*  form */}
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Use your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="example@email.com"
                  onChange={onInputChange}
                  autoComplete="true"
                  required
                ></input>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={onInputChange}
                  autoComplete="true"
                  required
                ></input>
              </div>
              <div className="flex items-center justify-end">
                <div className="flex items-center h-5">
                  <input
                    name="remember"
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    onChange={togglePasswordVisibility}
                  ></input>
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="remember"
                    className="text-gray-500 dark:text-gray-300"
                  >
                    show password
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-gradient-to-br from-orange-500 to-pink-500"
              >
                {loading ? <Loader /> : "Login"}
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to="/register"
                  className="font-medium text-red-400 hover:underline dark:text-primary-500"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
