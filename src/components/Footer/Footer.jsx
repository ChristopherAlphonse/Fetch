import Logo from "../../assets/footer-logo.svg";

function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="bg-primary bg-footer">
      <div className="container mx-auto p-6">
        <div className="flex justify-around">
          <div className="-mx-6 w-full lg:w-2/5">
            <div className="px-6">
              <div>
                <a href="#" className="text-2xl font-bold text-white">
                  <img src={Logo} alt="Fetch logo" width={80} />
                </a>
              </div>

              <p className="mt-2 max-w-sm text-white">
                Download the App
                <br />
                <span>
                  Available in the
                  <span className=" mx-1 text-zinc-400 hover:cursor-pointer hover:text-yellow">
                    App Store
                  </span>
                  or
                  <span className=" mx-1 text-zinc-400 hover:cursor-pointer hover:text-yellow">
                    Google Play
                  </span>
                </span>
              </p>
            </div>
          </div>

          <div className=" flex">
            <div className="mr-12">
              <h3 className="uppercase text-gray-700 dark:text-white">About</h3>
              <a
                href="#"
                className="mt-2 block text-sm text-gray-600 hover:underline dark:text-gray-400"
              >
                Company
              </a>
              <a
                href="#"
                className="mt-2 block text-sm text-gray-600 hover:underline dark:text-gray-400"
              >
                community
              </a>
              <a
                href="#"
                className="mt-2 block text-sm text-gray-600 hover:underline dark:text-gray-400"
              >
                Careers
              </a>
            </div>
            <div>
              <h3 className="uppercase text-gray-700 dark:text-white">About</h3>
              <a
                href="#"
                className="mt-2 block text-sm text-gray-600 hover:underline dark:text-gray-400"
              >
                Company
              </a>
              <a
                href="#"
                className="mt-2 block text-sm text-gray-600 hover:underline dark:text-gray-400"
              >
                community
              </a>
              <a
                href="#"
                className="mt-2 block text-sm text-gray-600 hover:underline dark:text-gray-400"
              >
                Careers
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 h-px border-none bg-gray-900 " />

        <div className="flex justify-end">
          <p className="text-center text-gray-100 ">
            ©2013 - {year} Fetch, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
