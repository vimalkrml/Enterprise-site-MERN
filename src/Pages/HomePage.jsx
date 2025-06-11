import React from "react";
import { Helmet } from "react-helmet";
import NavBar from "../Components/NavBar/NavBar";
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Footer from "../Components/Footer/Footer";


const HomePage = () => {
  return (
    <div>
      <Helmet></Helmet>
      <NavBar />
      <>
        <section className="bg-light py-2 py-md-5">
          <Container className="py-5">
            <Row className="align-items-center">
              <Col xs={12} md={12} lg={6} className="mb-5 mb-lg-0 d-flex flex-column d-lg-block">
                <h1 className="display-4 fw-bold mb-4">
                  Build Trust with <span className="text-primary">EMI Benefits</span>
                </h1>
                <p className="text-start text-md-center text-lg-start text-secondary mb-4 fs-5">
                  Unlock seamless EMI options through our partnership with DBS Bank —
                  designed to enhance customer satisfaction and accelerate business growth.
                </p>
                <Button
                  href="#"
                  variant="primary"
                  size="lg"
                  className="rounded-pill px-4 shadow-sm me-auto mx-md-auto"
                >
                  Sign Up Now
                </Button>
              </Col>
              <Col md={12} lg={6} className="text-center">
                <img
                  src="https://www.allen.ac.in/assets/img/emi/emi-image.png"
                  alt="DBS EMI Partnership"
                  className="img-fluid rounded shadow"
                />
              </Col>
            </Row>
          </Container>
        </section>

        <section className="py-5 bg-white vh-md-100 bg-light">
          <Container>
            <div className="py-5">
              <div
                className="text-center px-4 px-md-5 mx-auto"
                style={{ maxWidth: '720px' }}
              >
                <h2 className="fw-bold mb-3 lh-sm" style={{ fontSize: '1.75rem' }}>
                  Hassle-Free EMI Shopping Awaits You!
                </h2>
                <p className="text-secondary mb-4 fs-6">
                  No paperwork. No hidden charges. Just choose your product, pick
                  EMI, and relax — all with DBS Bank's trusted support.
                </p>
                <div className="text-center mb-5">
                  <Button
                    href="#"
                    variant="dark"
                    className="rounded-pill px-4 py-2 fs-6 shadow-sm"
                    style={{ transition: 'all 0.3s ease-in-out' }}
                  >
                    Explore Products →
                  </Button>
                </div>
              </div>

              <Row className="g-4">
                {[
                  {
                    icon: 'bi-shield-check',
                    title: 'Trust & Security',
                    text: 'Backed by DBS to ensure secure, reliable EMI transactions.',
                    bg: 'success',
                  },
                  {
                    icon: 'bi-credit-card',
                    title: 'Flexible Payments',
                    text: '0% interest EMI makes purchases easier for everyone.',
                    bg: 'primary',
                  },
                  {
                    icon: 'bi-lightning-charge',
                    title: 'Instant Approvals',
                    text: 'Quick eligibility checks ensure fast EMI approvals.',
                    bg: 'warning',
                  },
                  {
                    icon: 'bi-phone',
                    title: 'Mobile Friendly',
                    text: 'Manage EMIs anytime through your smartphone.',
                    bg: 'danger',
                  },
                  {
                    icon: 'bi-star',
                    title: 'Top Brands',
                    text: 'Enjoy EMI on the most popular, high-end products.',
                    bg: 'info',
                  },
                  {
                    icon: 'bi-graph-up-arrow',
                    title: 'Boost Your Sales',
                    text: 'Merchants gain better conversions using EMI plans.',
                    bg: 'secondary',
                  },
                ].map((item, index) => (
                  <Col key={index} md={6} lg={4}>
                    <div className="border rounded-4 p-4 text-center h-100 shadow-sm hover-shadow">
                      <div
                        className={`bg-${item.bg} bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3`}
                        style={{ width: '70px', height: '70px' }}
                      >
                        <i className={`bi ${item.icon} text-${item.bg} fs-3`}></i>
                      </div>
                      <h5 className="fw-semibold mb-2">{item.title}</h5>
                      <p className="text-muted">{item.text}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Container>
        </section>

        <section className="s-emi bg-light py-md-5">
          <Container
            className="text-center py-5"
            style={{ maxWidth: '900px' }}
          >
            <div
              className="d-inline-flex align-items-center justify-content-center bg-success text-white rounded-circle mb-5"
              style={{ width: '60px', height: '60px' }}
            >
              <i className="bi bi-quote fs-3"></i>
            </div>

            <p className="fs-3 fs-md-1 fw-medium text-dark mb-4">
              “Why choose{' '}
              <span className="bg-success text-white rounded px-2 py-1">
                EMI with AZZ ?
              </span>{' '}
              Because it builds trust, enhances efficiency, showcases strong
              partnerships, and drives real-time user engagement to elevate your
              business success.”
            </p>

            <p className="text-muted mb-0">
              <span className="text-dark fw-bold">His/Her Name,</span>{' '}
              Chief Strategy Officer, AZZ
            </p>
          </Container>
        </section>

        <section className="bg-success text-white py-5">
          <Container className="text-center">
            <Row className="align-items-center justify-content-center">
              <Col md={10}>
                <h2 className="fw-bold mb-3">
                  Seamless EMI Integration with DBS Bank
                </h2>
                <p className="lead mb-4">
                  Enjoy quick approvals, zero hidden charges, and flexible monthly
                  payments powered by DBS.
                </p>
                <Button
                  href="#"
                  variant="light"
                  size="lg"
                  className="px-4 rounded-pill fw-semibold"
                >
                  Register
                </Button>
              </Col>
            </Row>
          </Container>
        </section>

        <section
          className="s-testimonials  py-5 my-md-5"
        >
          <Container>
            <h3 className="mb-5 text-center fw-bold">
              Real Stories from Happy Customers
            </h3>
            <Row className="g-4">
              {/* Testimonial 1 */}
              <Col xs={12} md={6} lg={4}>
                <Card className="testimonial-card border-0 rounded-4 shadow-sm p-4 h-100">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Alice Johnson"
                      className="rounded-circle me-3"
                      width="50"
                      height="50"
                    />
                    <div>
                      <p className="fw-semibold mb-0">Johnson</p>
                      <p className="text-muted small mb-0">CEO</p>
                    </div>
                  </div>
                  <p
                    className="fst-italic text-body-secondary fs-6"
                    style={{ lineHeight: 1.5 }}
                  >
                    “Partnering with DBS has transformed our financial operations.
                    The EMI benefits have streamlined our processes and built trust
                    with our clients.”
                  </p>
                </Card>
              </Col>

              {/* Testimonial 2 */}
              <Col xs={12} md={6} lg={4}>
                <Card className="testimonial-card border-0 rounded-4 shadow-sm p-4 h-100">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="Michael Smith"
                      className="rounded-circle me-3"
                      width="50"
                      height="50"
                    />
                    <div>
                      <p className="fw-semibold mb-0">Michael</p>
                      <p className="text-muted small mb-0">Researcher</p>
                    </div>
                  </div>
                  <p
                    className="fst-italic text-body-secondary fs-6"
                    style={{ lineHeight: 1.5 }}
                  >
                    “The EMI solutions provided by DBS have significantly improved
                    our cash flow management, allowing us to focus on growth and
                    customer satisfaction.”
                  </p>
                </Card>
              </Col>

              {/* Testimonial 3 */}
              <Col xs={12} md={6} lg={4}>
                <Card className="testimonial-card border-0 rounded-4 shadow-sm p-4 h-100">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src="https://randomuser.me/api/portraits/women/65.jpg"
                      alt="Rachel Lee"
                      className="rounded-circle me-3"
                      width="50"
                      height="50"
                    />
                    <div>
                      <p className="fw-semibold mb-0">Rook Lee</p>
                      <p className="text-muted small mb-0">Marketing Director</p>
                    </div>
                  </div>
                  <p
                    className="fst-italic text-body-secondary fs-6"
                    style={{ lineHeight: 1.5 }}
                  >
                    “With DBS's support, we have enhanced our user engagement
                    strategies, leveraging EMI benefits to foster deeper connections
                    with our customers.”
                  </p>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="s-login py-5 my-lg-5">
          <Container className="bg-light py-5">
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between px-3">
              <div className="text-md-start text-center mb-3 mb-md-0">
                <h2 className="h-sm mb-3 fs-1 fs-md-4">
                  Log in for personalized EMI deals with DBS
                </h2>
                <p className="text-secondary fs-6 mb-0">
                  Unlock EMI offers, track plans, and enjoy seamless shopping with DBS.
                </p>
              </div>
              <div>
                <Button
                  type="button"
                  className="btn-custom-color btn-lg rounded-pill px-4 fs-6 fw-semibold"
                >
                  Login
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </>
      <Footer />
    </div>
  );
};

export default HomePage;