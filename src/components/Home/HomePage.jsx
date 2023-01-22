import { Helmet, HelmetProvider } from "react-helmet-async";

import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import { Suspense } from "react";

function HomePage() {
  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <title>Fetch Rewards | Front-End </title>
        <link rel="canonical" href="" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Helmet>
      <Suspense fallback={<div> Loading ...</div>}>
        <Hero />
        <Footer />
      </Suspense>
    </HelmetProvider>
  );
}

export default HomePage;
