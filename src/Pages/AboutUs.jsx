import React from "react";
import { Helmet } from "react-helmet";
import NavBar from "../Components/NavBar/NavBar";
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import Footer from "../Components/Footer/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const cards = [
  {
    badge: 'Vision',
    title: 'Empowering Access Through EMI',
    description:
      'Our mission is to make financial services accessible to all through transparent EMI options that reduce barriers. We envision a financial ecosystem where affordability meets innovation, helping every user to achieve their goals with ease and clarity.',
    bg: 'rgb(255, 177, 238)',
  },
  {
    badge: 'Trust',
    title: 'Trust Built on Transparency',
    description:
      'Every EMI plan we offer is designed with clarity—no hidden fees, no surprises—building long-term customer confidence. We believe trust is earned, and our focus on simplicity, support, and open communication sets us apart.',
    bg: 'rgb(255, 142, 89)',
  },
  {
    badge: 'Partnership',
    title: 'Powering Possibilities with DBS',
    description:
      'Our exclusive collaboration with DBS Bank delivers secure, reliable EMI processing at scale. Together, we combine cutting-edge banking infrastructure with smart user experiences to redefine affordability for businesses and customers alike.',
    bg: 'rgb(218, 249, 104)',
  },
  {
    badge: 'Engagement',
    title: 'Driving Customer Action',
    description:
      'Interactive EMI tools and instant approvals improve engagement and conversions across channels. Our system encourages exploration and trust through transparent plans, dynamic UI, and responsive support.',
    bg: 'rgb(143, 154, 255)',
  },
  {
    badge: 'Benefits',
    title: 'Flexible EMI Plans',
    description:
      'Low-interest options, instant eligibility checks, and tailored repayment cycles put customers in control. Whether short- or long-term, our EMI benefits are built to support real-life goals and reduce financial stress.',
    bg: 'rgb(252, 253, 84)',
  },
];

const AboutUs = () => {
  return (
    <div>
      <Helmet></Helmet>
      <NavBar />
      <>
        <section className="py-5 my-5">
          <Container className="text-center">
            <h2 className="fw-semibold fs-2 mb-2">Our Journey Through Time</h2>
            <p className="fw-normal fs-5 text-secondary mx-auto mb-5" style={{ maxWidth: '600px' }}>
              Explore the key milestones that shaped our growth—from humble beginnings to a global presence built on innovation, trust, and impact.
            </p>
            <Row className="g-4 justify-content-center">
              <Col xs={12} md={6} lg={3}>
                <Card className="h-100 text-start bg-primary bg-opacity-10 rounded-3 border-0 shadow-sm p-4 d-flex flex-column">
                  <i className="bi bi-calendar-check fs-1 mb-3 text-primary"></i>
                  <h3 className="fw-semibold fs-5 mb-3">Founded in 2012</h3>
                  <p className="text-dark flex-grow-1">
                    Started with a bold mission to simplify financial experiences through technology and transparency.
                  </p>
                </Card>
              </Col>

              <Col xs={12} md={6} lg={3}>
                <Card className="h-100 text-start bg-success bg-opacity-10 rounded-3 border-0 shadow-sm p-4 d-flex flex-column">
                  <i className="bi bi-bar-chart-line fs-1 mb-3 text-success"></i>
                  <h3 className="fw-semibold fs-5 mb-3">2015 – Rapid Growth</h3>
                  <p className="text-dark flex-grow-1">
                    Expanded into new markets, launched mobile platforms, and grew our customer base tenfold.
                  </p>
                </Card>
              </Col>

              <Col xs={12} md={6} lg={3}>
                <Card className="h-100 text-start bg-warning bg-opacity-10 rounded-3 border-0 shadow-sm p-4 d-flex flex-column">
                  <i className="bi bi-bank fs-1 mb-3 text-warning"></i>
                  <h3 className="fw-semibold fs-5 mb-3">2019 – DBS Partnership</h3>
                  <p className="text-dark flex-grow-1">
                    Formed a strategic alliance with DBS Bank to enhance EMI infrastructure and customer trust at scale.
                  </p>
                </Card>
              </Col>

              <Col xs={12} md={6} lg={3}>
                <Card className="h-100 text-start bg-danger bg-opacity-10 rounded-3 border-0 shadow-sm p-4 d-flex flex-column">
                  <i className="bi bi-stars fs-1 mb-3 text-danger"></i>
                  <h3 className="fw-semibold fs-5 mb-3">2024 – Global Impact</h3>
                  <p className="text-dark flex-grow-1">
                    Over 10 million users empowered across 20+ countries, delivering flexible, trustworthy EMI experiences daily.
                  </p>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>


        <section className="py-5">
          <Container className="text-center mb-5">
            <h2 className="fw-bold text-dark mb-3">Why Choose Our EMI Experience</h2>
            <p className="text-secondary fs-5 mx-auto" style={{ maxWidth: '640px' }}>
              Trusted EMI offerings, backed by DBS, to improve your financial journey with security and flexibility.
            </p>
          </Container>

          <Container className="d-flex justify-content-center">
            <Swiper
              spaceBetween={30}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              slidesPerView={1}
              style={{ maxWidth: '800px', width: '100%' }}
            >
              {cards.map((card, index) => (
                <SwiperSlide key={index}>
                  <Card
                    className="border-0 rounded-4 shadow-sm h-100"
                    style={{ backgroundColor: card.bg }}
                  >
                    <Card.Body className="p-5">
                      <Badge bg="dark" className="mb-3 px-3 py-1">
                        {card.badge}
                      </Badge>
                      <Card.Title className="fw-semibold fs-4 text-dark mb-3">
                        {card.title}
                      </Card.Title>
                      <Card.Text className="text-black fs-6" style={{ lineHeight: '1.8' }}>
                        {card.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        </section>

      </>
      <Footer />
    </div>
  );
};

export default AboutUs;
