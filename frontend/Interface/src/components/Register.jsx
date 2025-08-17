import { useState } from "react";

const RegisterPage = () => {
  // states for inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [role, setRole] = useState("");

  // submit registration handling
  const registerForm = (e) => {
    e.preventDefault();
    // displaying the data in the
    // console for now
    console.log({
      firstName,
      lastName,
      email,
      password,
      country,
      address,
      city,
      region,
      zipCode,
      role,
    });

    //user data for storage
    const userData = {
      firstName,
      lastName,
      email,
      password,
      country,
      address,
      city,
      region,
      zipCode,
      role,
    };

    // save to local storage
    localStorage.setItem("user", JSON.stringify(userData));

    alert("Registration successful! You can now login.");

    //redirect to login page
    window.location.href = "/login";
    // will connect to the backend later
  };
  return (
    <>
      <form
        onSubmit={registerForm}
        action="#"
        method="POST"
        className="space-y-12"
      >
        <div className="border-b border-white/10 pb-12">
          <img
            src="/src/assets/HMS.webp"
            alt="hospital-logo"
            className="w-auto mx-auto h-10"
          />
          <h2 className="text-center text-lg/9 tracking-tight font-medium">
            Hospital Management System Registration
          </h2>
          <p className="mt-1 text-sm/6 text-gray-500 text-center">
            Enter the hospital's official address for correspondence.
          </p>

          {/* personal information */}
          <div className="mt-10 mx-20 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm/6 font-medium text-gray-800"
              >
                First Name
              </label>

              <div className="mt-2">
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  autoComplete="given-name"
                  className="register-input"
                  placeholder="First-Name"
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm/6 font-medium text-gray-800"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  autoComplete="family-name"
                  className="register-input"
                  placeholder="Last Name"
                  required
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-800"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  className="register-input"
                  placeholder="Email Address"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="password"
                className="text-sm/6 font-medium text-gray-800"
              >
                Password
              </label>

              <div className="mt-2">
                <input
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  className="register-input"
                  placeholder="Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-full">
              <label
                htmlFor="country"
                className="block text-sm/6 font-medium text-gray-500"
              >
                Country
              </label>

              <div className="mt-2 grid grid-cols-1">
                <select
                  name="country"
                  id="country"
                  autoComplete="country-name"
                  className="select"
                  required
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option defaultValue="select-your-country">
                    -- Select your country --
                  </option>
                  <option value="ghana">Ghana</option>
                  <option value="nigeria">Nigeria</option>
                  <option value="togo">Togo</option>
                  <option value="burkina-faso">Burkina Faso</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="street-address"
                className="block text-sm/6 font-medium text-gray-800"
              >
                Street Address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="street-address"
                  name="street-address"
                  autoComplete="street-address"
                  className="register-input"
                  placeholder="Street Address"
                  required
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="city"
                className="block text-sm/6 font-medium text-gray-800"
              >
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="city"
                  name="city"
                  autoComplete="address-level2"
                  className="register-input"
                  placeholder="City"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="region"
                className="block text-sm/6 font-medium text-gray-800"
              >
                State/Province
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="region"
                  name="region"
                  autoComplete="address-level1"
                  className="register-input"
                  placeholder="State/Province/Region"
                  onChange={(e) => setRegion(e.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm/6 font-medium text-gray-800"
              >
                ZIP / Postal Code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="postal-code"
                  name="postal-code"
                  autoComplete="postal-code"
                  className="register-input"
                  placeholder="ZIP / Postal Code"
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </div>
            </div>

            {/* role selection */}
            <div
              className="mt-10 space-y-10
            "
            >
              <fieldset>
                <legend className="text-sm/6 font-semibold text-gray-800">
                  Role Selection
                </legend>
                <p className="mt-1 text-sm/6 text-gray-400">
                  Select whether you are a Patient/Doctor/Administrator
                </p>

                <div className="mt-6 flex flex-col md:flex-row md:space-x-6 space-y-3 md:space-y-0">
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="patient"
                      name="role"
                      value="patient"
                      className="role"
                      required
                      onChange={(e) => setRole(e.target.value)}
                    />
                    <label
                      htmlFor="patient"
                      className="block text-sm/6 font-medium text-gray-800"
                    >
                      Patient
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="doctor"
                      name="role"
                      value="doctor"
                      className="role"
                      required
                      onChange={(e) => setRole(e.target.value)}
                    />
                    <label
                      htmlFor="doctor"
                      className="block text-sm/6 font-medium text-gray-800"
                    >
                      Doctor
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="admin"
                      name="role"
                      className="role"
                      value="admin"
                      required
                      onChange={(e) => setRole(e.target.value)}
                    />
                    <label
                      htmlFor="admin"
                      className="block text-sm/6 font-medium text-gray-800"
                    >
                      Administrator
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        {/* register and cancel button */}
        <div className="flex items-center justify-center gap-x-6 mb-3">
          <button type="button" className="btn-submit">
            Cancel
          </button>
          <button type="submit" className="btn-submit">
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default RegisterPage;
