import React, { useEffect } from "react";
import Banner from "../components/landingPage/banner/banner";
import About from "../components/landingPage/about/about";
import Expertiese from "../components/landingPage/expertise/expertiese";
import Portfolio from "../components/landingPage/portfolio/portfolio";
import Experience from "../components/landingPage/experinece/experience";
import Qualification from "../components/landingPage/qualification/qualification";
import Contact from "../components/landingPage/contact/contact";
import ContactModal from "../components/common/contactModal/contactModal";

const LandingPage = () => {
  const [modalShow, setModalShow] = React.useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setModalShow(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Banner />
      <About />
      <Expertiese />
      <Portfolio />
      <Experience />
      <Qualification />
      <Contact />
      <ContactModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default LandingPage;
