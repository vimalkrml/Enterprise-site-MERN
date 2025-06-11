import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-top pt-5 pb-3 text-secondary">
      <section className="container px-3">
        <Row className="gy-4">
          <Col xs={12} sm={6} md={3}>
            <div className="fw-bold fs-5 text-dark mb-3">AZZ</div>
            <p className="small mb-1">© 2025 Azz Enterprise LLC</p>
          </Col>

          <Col xs={6} sm={6} md={3}>
            <div className="text-uppercase fw-semibold small mb-3 text-dark">
              Company
            </div>
            <ul className="list-unstyled small mb-0">
              <li className="mb-2">
                <Link to="/about" className="text-secondary text-decoration-none link-primary-hover">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/blog" className="text-secondary text-decoration-none link-primary-hover">
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/catalog" className="text-secondary text-decoration-none link-primary-hover">
                  Catalog
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/investors" className="text-secondary text-decoration-none link-primary-hover">
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-secondary text-decoration-none link-primary-hover">
                  Sustainability
                </Link>
              </li>
            </ul>
          </Col>

          <Col xs={6} sm={6} md={3}>
            <div className="text-uppercase fw-semibold small mb-3 text-dark">
              Products
            </div>
            <ul className="list-unstyled small mb-0">
              <li className="mb-2">
                <Link to="/store" className="text-secondary text-decoration-none link-primary-hover">
                  Store
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/play" className="text-secondary text-decoration-none link-primary-hover">
                  Play
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/workspace" className="text-secondary text-decoration-none link-primary-hover">
                  Workspace
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/cloud" className="text-secondary text-decoration-none link-primary-hover">
                  Cloud
                </Link>
              </li>
              <li>
                <Link to="/buy" className="text-secondary text-decoration-none link-primary-hover">
                  Buy
                </Link>
              </li>
            </ul>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <div className="text-uppercase fw-semibold small mb-3 text-dark">
              Connect
            </div>
            <ul className="list-unstyled small mb-0 d-flex flex-column gap-2">
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-secondary text-decoration-none link-primary-hover">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-secondary text-decoration-none link-primary-hover">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-secondary text-decoration-none link-primary-hover">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-secondary text-decoration-none link-primary-hover">
                  YouTube
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-secondary text-decoration-none link-primary-hover">
                  Contact
                </Link>
              </li>
            </ul>
          </Col>
        </Row>

        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center mt-4 pt-3 border-top small text-secondary">
          <div>© 2025 Azz Enterprise. All rights reserved.</div>
          <div className="mt-2 mt-sm-0">
            <Link to="/help" className="text-secondary text-decoration-none me-3 link-primary-hover">
              Help
            </Link>
            <Link to="/privacy-policy" className="text-secondary text-decoration-none me-3 link-primary-hover">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-secondary text-decoration-none me-3 link-primary-hover">
              Terms of Service
            </Link>
            <Link to="/privacy-controls" className="text-secondary text-decoration-none link-primary-hover">
              Privacy Controls
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
