import { Helmet, HelmetProvider } from "react-helmet-async";

import Logo from "./assets/footer-logo.svg";

function PageNotFound() {
  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <title>Fetch Rewards | Page Not Found</title>
        <link rel="canonical" href="/404" />
        <meta name="description" content="page not found" />
        <meta name="keywords" content="404" />
      </Helmet>

      <section className="flex h-full items-center p-16 dark:bg-gray-900 dark:text-gray-100">
        <div className="container mx-auto my-8 flex flex-col items-center justify-center px-5">
          <img src={Logo} alt="Fetch logo" className="" />
          <div className="max-w-md text-center">
            <h2 className="font-lexend mb-8 text-9xl font-extrabold dark:text-gray-600">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="mb-4 text-2xl font-semibold ">
              Sorry, we couldn&apos;t find this page.
            </p>
            <div>
              Return to the
              <button type="button">
                <a
                  href="/"
                  className="mx-auto ml-2 mt-6 flex rounded border-0 bg-primary py-2 px-5 text-white hover:text-yellow focus:outline-none"
                >
                  Home Page
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
}

export default PageNotFound;
