import { Helmet, HelmetProvider } from "react-helmet-async";
import { Suspense, useMemo, useState } from "react";

import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Nav from "../Navbar/Nav";

function HomePage() {
  const [loading, setLoading] = useState(false);

  useMemo(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <title>Fetch Rewards | Front-End </title>
        <link rel="canonical" href="" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Helmet>

      <div>
        {loading ? (
          <section className="body-font grid h-screen  place-items-center  bg-cover ">
            <div className=" text-2xl  text-primary outline-yellow lg:text-9xl">
              HAPPY 10 YEARS ANNIVERSARY
            </div>
          </section>
        ) : (
          <>
            <Suspense fallback={<div> Loading ...</div>}>
              <Nav />

              <Hero />
              <Footer />
            </Suspense>
          </>
        )}
      </div>
    </HelmetProvider>
  );
}

export default HomePage;
