import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
// import ImageRegister from "../../../../image/landing-register.png";
import "./style.css";
// import { authContextRegister } from "../../../context/authRegister";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
// import serviceGirlImage from "../../../../image/seller_signup.png";
// import serviceEoImage from "../../../image/img_service_eo.png";

const FormSignUpEo = () => {
  const navigate = useNavigate();
  // const [postAuthRegister, dataAuthRegister] = useContext(authContextRegister);
  // const { message } = dataAuthRegister?.dataAuthRegister || {};
  // console.log({ dataAuthRegister });

  const [message, setMessage] = useState(false)
  const handleButtonRegister = (e) => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    console.log({ name, email, password });
    postAuthRegister({
      name: name.value,
      email: email.value,
      password: password.value,
    });
    navigate("/signin");
  };

  return (
    <div>
      <Container data-testid="form-page" fluid style={{ overflow: "hidden" }}>
        <Row style={{ height: "100vh" }}>
          <Col className="form-col-1" xs={6}>
            <Form onSubmit={handleButtonRegister}>
              <div className="box-sign-up"></div>
              <a
                className="backArrow"
                href="/"
                style={{ color: "black" }}
        
              >
                {" "}
                <FontAwesomeIcon icon={faArrowLeft} />
              </a>

              <h2 style={{ marginBottom: "20px", fontWeight: "700", fontSize:30 }}>
                Sign Up
              </h2>
              {message && (
                <Alert style={{ textAlign: "center" }} variant="danger">
                  {message}
                </Alert>
              )}
              <Form.Group className="mb-3 form-sign-up">
                <Form.Label className="form-label">Name*</Form.Label>
                <Form.Control
                  required
                  name="name"
                  type="text"
                  placeholder="Nama Lengkap"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 form-sign-up"
                controlId="formBasicEmail"
              >
                <Form.Label className="form-label">Email*</Form.Label>
                <Form.Control
                  required
                  name="email"
                  type="email"
                  placeholder="Contoh: johndee@gmail.com"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 form-sign-up"
                controlId="formBasicPassword"
              >
                <Form.Label className="form-label">Create Password*</Form.Label>
                <Form.Control
                  required
                  name="password"
                  type="password"
                  placeholder="6+ karakter"
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="button-log"
                style={{ position: "inherit" }}
              >
                Sign Up
              </Button>
              <p style={{ margin: ".5em" }}>
                Already have an account?
                <Link
                  to="/signin"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  <u>Sign In here</u>
                </Link>
              </p>
            </Form>
          </Col>
          <Col
            className="form-col-2"
            xs={6}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "0",
            }}
          >
            <div className="wrapper">
              <div className="new">
                <h1>Join As Event Organizers</h1>
                <p>
                  Jadilah bagian dari perubahan yang luar biasa! Bergabunglah
                  sebagai Event Organizer (EO) untuk merencanakan acara atau
                  event unggulan Anda dan jadikan impian acara Anda menjadi
                  kenyataan.
                </p>
              </div>
              <section class="overlay-section-login-eo"></section>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FormSignUpEo;
