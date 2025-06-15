import React from "react";
import { Helmet } from "react-helmet";
import NavBar from "../Components/NavBar/NavBar";
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import Footer from "../Components/Footer/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaBullseye, FaLightbulb, FaUserCheck, FaHandshake, FaShieldAlt } from 'react-icons/fa';

const journeySteps = [
  {
    badge: '2012',
    title: 'Founded with Vision',
    description:
      'Our journey began with a bold mission to simplify financial experiences through transparent EMI services, making finance accessible to everyone.',
  },
  {
    badge: '2015',
    title: 'Rapid Expansion',
    description:
      'We scaled into new markets, launched user-friendly mobile platforms, and saw exponential user growth in just a few years.',
  },
  {
    badge: '2019',
    title: 'DBS Partnership',
    description:
      'A strategic collaboration with DBS Bank enabled us to scale securely and offer seamless EMI services trusted across industries.',
  },
  {
    badge: '2024',
    title: 'Global Impact',
    description:
      'Now empowering over 10M+ users in 20+ countries, we continue to redefine affordability and accessibility with smart EMI technology.',
  },
];

const coreValues = [
  {
    icon: <FaUserCheck size={24} />,
    title: 'Customer-Centric',
    description: 'We prioritize the needs, trust, and satisfaction of our users in every decision we make.',
    bg: 'rgba(99, 102, 241, 0.1)',
  },
  {
    icon: <FaLightbulb size={24} />,
    title: 'Innovation',
    description: 'We embrace change and constantly strive to build smarter financial tools.',
    bg: 'rgba(255, 193, 7, 0.1)',
  },
  {
    icon: <FaHandshake size={24} />,
    title: 'Integrity',
    description: 'We build relationships based on honesty, transparency, and ethical practices.',
    bg: 'rgba(40, 167, 69, 0.1)',
  },
  {
    icon: <FaShieldAlt size={24} />,
    title: 'Security',
    description: 'We protect user data with top-tier security and compliance practices.',
    bg: 'rgba(220, 53, 69, 0.1)',
  },
];

const snapshots = [
  {
    image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b',
    caption: 'Product Sprint Showcase – Every Pixel Counts',
  },
  {
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d',
    caption: 'Team Retreat in Goa – Bonding Beyond Work',
  },
  {
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692',
    caption: 'Customer Success Team – Always On',
  },
  {
    image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70',
    caption: 'Culture Day – Diverse & Dynamic',
  },
  {
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692',
    caption: 'Product Sprint Showcase – Every Pixel Counts',
  },
  {
    image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b',
    caption: 'Leadership Meetup – Vision Alignment',
  },
];

const AboutUs = () => {
  return (
    <div>
      <Helmet></Helmet>
      <NavBar />
      <>
        <section className="py-5 my-5 position-relative text-center overflow-hidden">
          <Container className="position-relative" style={{ zIndex: 1 }}>
            <h2 className="fw-bold display-5 d-inline-block px-3 py-1 rounded">
              Our Journey
            </h2>
            <p className="fs-5 text-secondary mx-auto mt-3" style={{ maxWidth: '720px' }}>
              From a small fintech idea in 2012 to impacting millions globally — our journey is powered by purpose, trust, and technology-driven EMI solutions.
            </p>
            <div className="mx-auto mt-4 rounded-pill bg-primary" style={{ width: '60px', height: '4px' }}></div>
          </Container>
        </section>


        <section className="py-5 bg-primary">
          <Container>
            <h2 className="text-center fw-bold mb-4 text-white">Our Vision & Mission</h2>
            <p
              className="text-center text-white-50 mb-5 fs-5"
              style={{ maxWidth: '720px', margin: '0 auto' }}
            >
              We are committed to shaping the future of finance through innovation, trust, and customer-first EMI solutions.
            </p>

            <Row className="g-4 pb-5">
              <Col md={6}>
                <Card className="border-0 shadow h-100 rounded-4">
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3 bg-primary text-white p-3 rounded-circle d-flex align-items-center justify-content-center shadow-sm">
                        <FaLightbulb size={24} />
                      </div>
                      <h5 className="mb-0 fw-bold text-dark">Our Vision</h5>
                    </div>
                    <Card.Text className="text-secondary fs-6">
                      To democratize access to financial tools by making EMIs simpler, smarter, and accessible for everyone—empowering millions to take confident steps toward their goals.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6}>
                <Card className="border-0 shadow h-100 rounded-4">
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3 bg-success text-white p-3 rounded-circle d-flex align-items-center justify-content-center shadow-sm">
                        <FaBullseye size={24} />
                      </div>
                      <h5 className="mb-0 fw-bold text-dark">Our Mission</h5>
                    </div>
                    <Card.Text className="text-secondary fs-6">
                      To offer flexible, transparent EMI plans that foster trust, reduce financial stress, and enhance user engagement across every digital touchpoint we serve.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="py-5 bg-light">
          <Container>
            <h2 className="text-center fw-bold mb-4 text-dark mt-5">Our Core Values</h2>
            <p className="text-center text-secondary fs-5 mb-5" style={{ maxWidth: '720px', margin: '0 auto' }}>
              These values shape every product we build and every partnership we pursue. They guide how we grow and serve.
            </p>

            <Row className="g-4 pb-5">
              {coreValues.map((value, index) => (
                <Col key={index} md={6} lg={3}>
                  <Card className="border-0 h-100 shadow-sm rounded-4" style={{ backgroundColor: value.bg }}>
                    <Card.Body className="text-center p-4">
                      <div className="bg-white text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3 shadow-sm" style={{ width: 50, height: 50 }}>
                        {value.icon}
                      </div>
                      <h5 className="fw-semibold text-dark mb-2">{value.title}</h5>
                      <p className="text-secondary fs-6">{value.description}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="py-5 my-5">
          <Container className="text-center mb-5">
            <h2 className="fw-bold text-dark mb-3">Our Company Journey</h2>
            <p className="text-secondary fs-5 mx-auto" style={{ maxWidth: '640px' }}>
              A timeline of growth, innovation, and customer-first impact, built on trust and technology.
            </p>
          </Container>

          <Container className="d-flex justify-content-center">
            <Swiper
              spaceBetween={30}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              slidesPerView={1}
              style={{ maxWidth: '900px', width: '100%' }}
              className="pb-5"
            >
              {journeySteps.map((step, index) => (
                <SwiperSlide key={index}>
                  <Card className="border-0 rounded-4 shadow-sm h-100 bg-light">
                    <Card.Body className="p-5">
                      <Badge bg="dark" className="mb-3 px-3 py-1">
                        {step.badge}
                      </Badge>
                      <Card.Title className="fw-semibold fs-4 text-dark mb-3">
                        {step.title}
                      </Card.Title>
                      <Card.Text className="text-black fs-6" style={{ lineHeight: '1.8' }}>
                        {step.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        </section>

        <section className="py-5 mb-5">
          <Container>
            <div className="text-center mb-5">
              <h2 className="fw-bold display-6 text-dark mb-3">Team Snapshot</h2>
              <p className="fs-5 text-muted mx-auto" style={{ maxWidth: '680px' }}>
                Glimpses of collaboration, celebration, and the spirit that powers our journey.
              </p>
            </div>

            <Row className="g-4">
              {snapshots.map((shot, idx) => (
                <Col key={idx} xs={12} sm={6} md={4}>
                  <Card className="border-0 shadow-sm h-100 rounded-4 overflow-hidden">
                    <Card.Img
                      variant="top"
                      src={shot.image}
                      alt={shot.caption}
                      style={{ height: '250px', objectFit: 'cover' }}
                    />
                    <Card.Body>
                      <Card.Text className="text-secondary small">{shot.caption}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

      </>
      <Footer />
    </div>
  );
};

export default AboutUs;
