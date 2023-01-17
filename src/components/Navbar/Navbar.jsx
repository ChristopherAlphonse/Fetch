import Logo from "../Logo/Logo";

function Navbar() {
  return (
    <div className="md:py-0 py-4 flex justify-between">
      <Logo />

      <div className="hidden md:flex">
        <nav className="flex items-center mt-0">
          <ul className="list-none m-0 p-0">
            <button
              type="button"
              className=" text-lg btn py-2.5 px-5 mr-2 mb-2  font-medium  rounded-lg border border-gray-200 bg-primary text-white"
            >
              <a href="/Register">Register</a>
            </button>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
