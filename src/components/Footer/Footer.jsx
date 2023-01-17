import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

import Logo from "../../assets/footer-logo.svg";

function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <>
      <footer className="body-font bg-primary text-gray-100">
        <div className="container mx-auto flex flex-col flex-wrap px-5 py-24 md:flex-row md:flex-nowrap md:items-center lg:items-start">
          <div className="mx-auto w-64 flex-shrink-0 text-center md:mx-0 md:text-left">
            <a className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start">
              <img
                className="mx-auto mb-3 h-[12rem]"
                src={Logo}
                alt="Fetch logo"
              />
            </a>
          </div>
          <div className="-mb-10 mt-10 flex flex-grow flex-wrap text-center md:mt-0 md:pl-20 md:text-left">
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <nav className="mb-10 list-none">
                <li>
                  <a className=" font-medium hover:text-yellow ">
                    Fetch For Business
                  </a>
                </li>
                <li>
                  <a className=" font-medium hover:text-yellow">
                    Affiliates & Influencers
                  </a>
                </li>
                <li>
                  <a className=" font-medium hover:text-yellow">
                    Contact Support
                  </a>
                </li>
                <li>
                  <a className=" font-medium hover:text-yellow">
                    Work At Fetch
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <nav className="mb-10 list-none">
                <li>
                  <a className=" hover:text-yellow">Terms of Service</a>
                </li>
                <li>
                  <a className=" hover:text-yellow">Privacy Policy</a>
                </li>
                <li>
                  <a className="href='#' hover:text-yellow ">
                    California Consumer Privacy Act
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div>
          <a
            href="#"
            className="text-white hover:text-yellow"
            aria-label="facebook"
          >
            <BsFacebook className="fa-icon h-10 md:h-7 " size={25} />
          </a>
          <a
            href="#"
            className="text-white hover:text-yellow"
            aria-label="Twitter"
          >
            <BsTwitter className="fa-icon h-10 md:h-7 " size={25} />
          </a>
          <a
            href="#"
            className="text-white hover:text-yellow"
            aria-label="Instagram"
          >
            <BsInstagram className="fa-icon h-10 md:h-7 " size={25} />
          </a>
          <a
            href="#"
            className="text-white hover:text-yellow"
            aria-label="Youtube"
          >
            <BsYoutube className="fa-icon h-10 md:h-7 " size={25} />
          </a>

          <article className="mb-0 text-sm text-white  sm:text-center md:text-left md:text-xs">
            ©{year} - Fetch, All rights reserved.
          </article>
        </div>
        <div className="bg-gray-100" />
      </footer>
    </>
  );
}

export default Footer;
