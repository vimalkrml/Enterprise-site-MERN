import React from "react";
import { Helmet } from "react-helmet";
import NavBar from "../Components/NavBar/NavBar";
import { Container } from "react-bootstrap";
import Footer from "../Components/Footer/Footer";

const AboutUs = () => {
  return (
    <div>
      <Helmet></Helmet>
      <NavBar />
      <>
        {/* Banner section here */}
        <Container Fluid>
          <div className="py-3">AboutUs content here</div>
        </Container>
      </>
      <Footer />
    </div>
  );
};

export default AboutUs;
