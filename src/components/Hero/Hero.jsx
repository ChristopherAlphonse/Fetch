import { useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";

function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    occupation: "",
    state: "",
  });

  const [errors, setErrors] = useState({});
  const [occupations, setOccupations] = useState([]);
  const [states, setStates] = useState([]);

  useEffect(() => {
    axios
      .get("https://frontend-take-home.fetchrewards.com/form")
      .then((res) => {
        setOccupations(res.data.occupations);
        setStates(res.data.states);
      })
      .catch((error) => {
        console.log(`error on  line 26 in Hero component ${error}`);
      });
  }, [formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors({});
    if (!formData.name) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name is required",
      }));
    }
    if (!formData.email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
    }
    if (!formData.password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required",
      }));
    }
    if (!formData.occupation) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        occupation: "Occupation is required",
      }));
    }
    if (!formData.state) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        state: "State is required",
      }));
    }
    if (Object.keys(errors).length) {
      toast.error("Please complete all the fields", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      axios
        .post("https://frontend-take-home.fetchrewards.com/form", formData)
        .then((res) => {
          setFormData({
            name: "",
            email: "",
            password: "",
            occupation: "",
            state: "",
          });

          console.log(res);
          toast.success("Submitted", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="h-half flex max-w-full items-center justify-center">
      <div className="flex min-h-screen items-center justify-center  p-6">
        <div className="container mx-auto ">
          <div className="mb-6 rounded bg-white p-4 px-4 shadow-lg md:p-8">
            <div className="grid grid-cols-1 gap-4 gap-y-2 text-sm lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-syne text-xl  font-bold">Personal Details</p>
                <p className="font-lexend">Please fill out all the fields.</p>
              </div>

              <div className="lg:col-span-2">
                <form
                  className="grid grid-cols-1 gap-4 gap-y-2 text-sm md:grid-cols-5"
                  onSubmit={handleSubmit}
                >
                  <div className="md:col-span-5">
                    <label htmlFor="name">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      className="mt-1 h-10 w-full rounded border bg-gray-50 px-4"
                    />
                    {errors.name && <p>{errors.name}</p>}
                  </div>
                  <div className="md:col-span-5">
                    <label htmlFor="email">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 h-10 w-full rounded border bg-gray-50 px-4"
                      placeholder="youremail@host.com"
                    />
                    {errors.email && <p>{errors.email}</p>}
                  </div>
                  <div className="md:col-span-5">
                    <label htmlFor="password">
                      Password <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      className="mt-1 h-10 w-full rounded border bg-gray-50 px-4"
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                  </div>
                  {/* dfdsfdsfsfs */}
                  <div className="md:col-span-3">
                    <label htmlFor="occupation">
                      Occupation <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 flex h-10 items-center rounded border border-gray-200 bg-gray-50">
                      <select
                        required
                        id="occupation"
                        name="occupation"
                        value={formData.occupation}
                        onChange={handleChange}
                        className="w-full appearance-none bg-transparent px-4 text-gray-800 outline-none"
                      >
                        <option value="" disabled>
                          Select an occupation
                        </option>
                        {occupations.map((occupation) => (
                          <option
                            key={occupation}
                            value={occupation}
                            className="font-syne"
                          >
                            {occupation}
                          </option>
                        ))}
                      </select>

                      {errors.occupation && <p>{errors.occupation}</p>}

                      <button
                        type="button"
                        tabIndex="-1"
                        htmlFor="show_more"
                        className="hover:text-blue-600 cursor-pointer border-l border-gray-200 text-gray-300 outline-none transition-all focus:outline-none"
                      >
                        <svg
                          className="mx-2 h-4 w-4 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="18 15 12 9 6 15" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  {/* fsdfsfsfdsf */}
                  <div className="md:col-span-2">
                    <label htmlFor="state">
                      State <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 flex h-10 items-center rounded border border-gray-200 bg-gray-50">
                      <select
                        required
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full appearance-none bg-transparent px-4 text-gray-800 outline-none"
                      >
                        <option value="" disabled>
                          Select a state
                        </option>
                        {states.map((state) => (
                          <option
                            key={state.abbreviation}
                            value={state.abbreviation}
                            className="font-syne"
                          >
                            {state.name}
                          </option>
                        ))}
                      </select>
                      {errors.state && <p>{errors.state}</p>}
                      <button
                        type="button"
                        tabIndex="-1"
                        htmlFor="show_more"
                        className="hover:text-blue-600 cursor-pointer border-l border-gray-200 text-gray-300 outline-none transition-all focus:outline-none"
                      >
                        <svg
                          className="mx-2 h-4 w-4 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="18 15 12 9 6 15" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <button
                    className="  col-end-6 mt-2 transform rounded-md bg-primary px-8 py-2.5 leading-5 text-white transition-colors  duration-300 hover:bg-purple-600 focus:outline-none"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <a
          href="https://www.buymeacoffee.com/ChristopherAl"
          target="_blank"
          className="bottom-0 right-0 float-right p-4 md:absolute"
          rel="noreferrer"
        >
          <img
            src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg"
            alt="Buy Me A Coffee"
            className="ring-purple w-14 -rotate-45 rounded-full shadow-lg ring transition-all hover:shadow-sm hover:ring-4"
          />
        </a>
      </div>
    </div>
  );
}

export default Hero;
