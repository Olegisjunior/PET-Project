import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Link } from "react-router-dom";
export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
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
          <div className="SignIn flex justify-center items-center flex-col">
            <h1 className="font-[800] text-xl pt-5">Log in</h1>
            <p>return user</p>
            <form
              onSubmit={handleSubmit(Submit, Error)}
              className="flex flex-col justify-center items-center py-10 gap-3"
            >
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

              <div className="flex gap-2">
                <input
                  type="checkbox"
                  name="checkbox1"
                  id="checkbox1"
                  className="shadow-xl"
                />
                <label htmlFor="checkbox1">Remember me</label>
              </div>

              <button className="bg-gray-300 p-2 shadow-xl">Log in</button>

              <Link to="/SignUp">no have account?</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
