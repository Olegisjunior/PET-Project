import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Link } from "react-router-dom";
export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {},
  });

  const Submit = (data) => {
    console.log(data);
  };
  const Error = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="bg-[#1e1e1eee] min-h-[100vh] pb-2 flex justify-center items-center ">
        <div className=" bg-gray-100 w-[80%] h-[120vh] flex flex-col ">
          <div className="SignUp flex justify-center items-center flex-col">
            <h1 className="font-[800] text-xl pt-5">Create an account</h1>
            <p>new user</p>
            <form
              onSubmit={handleSubmit(Submit, Error)}
              className="flex flex-col justify-center items-center py-10 gap-3"
            >
              <label htmlFor="firstName" className="">
                First name
              </label>
              <input
                {...register("firstName", {
                  required: {
                    value: true,
                    message: "This is required.",
                  },
                  minLength: {
                    value: 3,
                    message: "This input start from 3 letters",
                  },
                  maxLength: {
                    value: 20,
                    message: "This input exceed 20 letters",
                  },
                  pattern: {
                    value: /[A-Za-z]/,
                    message: "This input is letters only.",
                  },
                })}
                type="text"
                id="firstName"
                name="firstName"
                className={`w-[250px] h-[2rem] focus:outline-none border-[#1e1e1e] border border-1 focus:border-2 p-2 shadow-xl ${
                  errors.firstName ? ` border-[#ff0000] border-2 border` : null
                }`}
              />
              <ErrorMessage
                errors={errors}
                name="firstName"
                render={({ message }) => (
                  <p className="text-[#ff0000] text-[0.8rem]">{message}</p>
                )}
              />

              <label htmlFor="secondName" className="">
                Second name
              </label>
              <input
                {...register("secondName", {
                  required: {
                    value: true,
                    message: "This is required.",
                  },
                  minLength: {
                    value: 3,
                    message: "This input start from 3 letters",
                  },
                  maxLength: {
                    value: 20,
                    message: "This input exceed 20 letters",
                  },
                  pattern: {
                    value: /[A-Za-z]/,
                    message: "This input is letters only.",
                  },
                })}
                type="text"
                id="secondName"
                name="secondName"
                className={`w-[250px] h-[2rem] focus:outline-none border-[#1e1e1e] border border-1 focus:border-2 p-2 shadow-xl ${
                  errors.secondName ? ` border-[#ff0000] border-2 border` : null
                }`}
              />
              <ErrorMessage
                errors={errors}
                name="secondName"
                render={({ message }) => (
                  <p className="text-[#ff0000] text-[0.8rem]">{message}</p>
                )}
              />

              <label htmlFor="email" className="">
                Email address
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "This is required.",
                  },
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email",
                  },
                })}
                type="email"
                id="email"
                name="email"
                className={`w-[250px] h-[2rem] focus:outline-none border-[#1e1e1e] border border-1 focus:border-2 p-2 shadow-xl ${
                  errors.email ? ` border-[#ff0000] border-2 border` : null
                }`}
              />
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => (
                  <p className="text-[#ff0000] text-[0.8rem]">{message}</p>
                )}
              />
              <label htmlFor="password" className="">
                Password
              </label>
              <input
                {...register("password", {
                  required: true,
                })}
                type="password"
                id="password"
                name="password"
                className={`w-[250px] h-[2rem] focus:outline-none border-[#1e1e1e] border border-1 focus:border-2 p-2 shadow-xl ${
                  errors.password ? ` border-[#ff0000] border-2 border` : null
                }`}
              />
              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => (
                  <p className="text-[#ff0000] text-[0.8rem]">{message}</p>
                )}
              />
              <label htmlFor="2password" className="">
                Confirm password
              </label>
              <input
                {...register("confirm_password", {
                  required: true,
                  validate: (val) => {
                    if (watch("password") != val) {
                      return "Your passwords do no match";
                    }
                  },
                })}
                type="password"
                id="confirm_password"
                name="confirm_password"
                className={`w-[250px] h-[2rem] focus:outline-none border-[#1e1e1e] border border-1 focus:border-2 p-2 shadow-xl ${
                  errors.confirm_password
                    ? ` border-[#ff0000] border-2 border`
                    : null
                }`}
              />
              <ErrorMessage
                errors={errors}
                name="confirm_password"
                render={({ message }) => (
                  <p className="text-[#ff0000] text-[0.8rem]">{message}</p>
                )}
              />
              <p>
                Sign up for email updates, and we’ll deliver special offers
                <br />
                exclusive product news, and event info straight to your inbox:
              </p>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  name="checkbox1"
                  id="checkbox1"
                  className="shadow-xl"
                />
                <label htmlFor="checkbox1">BikeStaff</label>
              </div>

              <button className="bg-gray-300 p-2 shadow-xl">
                Create an account
              </button>
              <Link to="/SignIn">Have account?</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
