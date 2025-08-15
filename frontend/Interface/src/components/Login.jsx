import React, { useState } from "react";

const Login = () => {
  // making it email and password function and connect to backend later

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    // will connect to backend later
  };

  return (
    <>
      <div className="">
        <section className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 md:border-2 border-gray-500 p-20 rounded-2xl w-full max-w-md mx-auto shadow-lg mt-20">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* image and hospital titlte */}
            <img
              src="/src/assets/HMS.webp"
              alt="hospital-logo"
              className="w-auto mx-auto h-10"
            />
            <h2 className="text-center text-lg/9 tracking-tight font-medium">
              Hospital Management System
            </h2>
          </div>

          {/*login form*/}
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} action="#" method="POST" className="space-y-6">
              {/* email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-800"
                >
                  Email Address
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="email-input"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* password */}
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm/6 font-medium text-gray-800"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-400 hover:text-indigo-300"
                    >
                      Forgot password
                    </a>
                  </div>
                </div>

                <div className="mt-2">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    autoComplete="current-password"
                    className="email-input"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              {/* login and register button */}
              <div className="flex gap-3 mt-10">
                <button type="submit" className="btn">
                  Login
                </button>
                <button type="submit" className="btn">
                  Register
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
