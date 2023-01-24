import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Suspense, lazy, useMemo, useState } from 'react';

const Footer = lazy(async () => import('../Footer/Footer'));
const Hero = lazy(async () => import('../Hero/Hero'));
const Nav = lazy(async () => import('../Navbar/Nav'));

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
        <link
          rel="canonical"
          href="https://portfolio-placeholder-ccb7f.web.app/Register"
        />
        <meta name="description" content="take home project" />
        <meta name="keywords" content="fe, fetch rewards, chris alphonse dev" />
      </Helmet>

      <div>
        {loading ? (
          <section className="body-font grid h-screen  place-items-center  bg-cover ">
            <div className=" text-2xl  text-primary outline-yellow lg:text-9xl">
              HAPPY 10 YEARS ANNIVERSARY
            </div>
          </section>
        ) : (
          <Suspense fallback={<div> Loading ...</div>}>
            <Nav />

            <Hero />

            <Footer />
          </Suspense>
        )}
      </div>
    </HelmetProvider>
  );
}

export default HomePage;
