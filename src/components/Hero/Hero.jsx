import "react-toastify/dist/ReactToastify.css";

import { AiFillCaretDown, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";

import { ImLinkedin2 } from "react-icons/im";
import axios from "axios";

function Alt() {
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
    <section className="bg-white">
      <div className="container mx-auto px-6 py-24 lg:py-32">
        <div className="lg:flex">
          <div className="lg:w-1/2">
            <h1 className="text-gray-600  md:text-lg">Welcome back</h1>

            <h1 className="mt-4 text-3xl font-medium capitalize text-gray-800  md:text-4xl lg:text-5xl">
              submit required information
            </h1>
          </div>

          <div className="mt-8 lg:mt-0 lg:w-1/2">
            <form
              className=" grid grid-cols-1 gap-4 gap-y-2 rounded-xl bg-zinc-50 p-10 text-sm shadow-md md:grid-cols-5"
              onSubmit={handleSubmit}
            >
              <div className="col-span-5">
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
              <div className="col-span-5">
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
              <div className="col-span-5">
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

              <div className="col-span-6 ">
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
                    <div className="mx-2">
                      <AiFillCaretDown />
                    </div>
                  </button>
                </div>
              </div>

              <div className="col-span-6 ">
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
                  <button
                    type="button"
                    tabIndex="-1"
                    htmlFor="show_more"
                    className="hover:text-blue-600 cursor-pointer border-l border-gray-200 text-gray-300 outline-none transition-all focus:outline-none"
                  >
                    <div className="mx-2">
                      <AiFillCaretDown />
                    </div>
                  </button>

                  {errors.state && <p>{errors.state}</p>}
                </div>
              </div>
              <button
                className="col-end-6 mt-4 flex transform items-center justify-center rounded-md bg-primary py-2.5  px-9 leading-5 text-white transition-colors duration-300  hover:bg-purple-900 hover:text-yellow focus:outline-none"
                type="submit"
              >
                Submit
              </button>

              <ToastContainer />
            </form>
          </div>
        </div>

        <div className="mt-8 sm:flex sm:items-center md:mt-24">
          <div className="-mx-1.5 mt-4 flex items-center sm:mt-0 sm:w-1/2">
            <a
              className=" mx-1.5 transform text-gray-400 transition-colors duration-300 hover:text-primary"
              href="#"
            >
              <FaTwitter size={25} />
            </a>

            <a
              className=" mx-1.5 transform text-gray-400 transition-colors duration-300 hover:text-primary"
              href="#"
            >
              <ImLinkedin2 size={25} />
            </a>

            <a
              className=" mx-1.5 transform text-gray-400 transition-colors duration-300 hover:text-primary"
              href="#"
            >
              <FaFacebookF size={25} />
            </a>

            <a
              className=" mx-1.5 transform text-gray-400 transition-colors duration-300 hover:text-primary"
              href="#"
            >
              <AiOutlineInstagram size={25} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Alt;
