import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import useFormInput from "../../../hooks/useFormInput";
import usePostApi from "../../../hooks/usePostApi";
import { useEffect } from "react";

const FormSignUp = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(false)
  const [isPasswordDone, setIsPasswordDone] = useState(false)
  const [isEmailDone, setIsEmailDone] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isFocusedEmail, setIsFocusedEmail] = useState(false)
  const [isSubmitWrong, setIsSubmitWrong] = useState(false)
  const email = useFormInput('');
  const password = useFormInput('');

  const apiUrlBase = "https://ketemuenak.fly.dev"
  const apiUrl = `${apiUrlBase}/auth/register`;
  const { data, loading, error, request } = usePostApi(apiUrl);

  useEffect(()=>{
    const role = localStorage.getItem("role");
    if (localStorage.getItem('token') !== null){
      navigate('/');
    }
  },[])
  
  const handleButtonRegister = async(e) => {
    e.preventDefault();
    const postData = {
      email: email.value,
      password: password.value,
      role: 'seller'
    };
    try {
      const { response, data: responseData, error: requestError } = await request(
        apiUrl,
        'POST',
        postData
      );
      const token = responseData.token;
      console.log(token)
      if (token) {
        navigate('/signin');
      } else {
        console.log('Received non-200 status code:', response ? response.status : 'No response');
        setErrorMessage('Email or password is incorrect. Please try again.');
      }

      if (requestError) {
        console.error('Error:', requestError);
      }
    } catch (error) {
      console.error('Unhandled error:', error);
    }

  };
  const handlePassword = (e) => {
    var value = e.target.value
    if(value.length >= 8 && /[^\w\s]/.test(value)){
      setIsPasswordDone(true)
    }
    else{
      setIsPasswordDone(false)
    }
  }
  const handleEmail = (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var value = e.target.value
    const isEmailValid = emailRegex.test(value);
    if(isEmailValid){
      setIsEmailDone(true)
    }
    else{
      setIsEmailDone(false)
    }
  }

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
              <Form.Group
                className="mb-3 form-sign-up"
                controlId="formBasicEmail"
              >
                <Form.Label className="form-label">Email<span style={{color:"red"}}>*</span></Form.Label>
                <Form.Control
                  {...email.value}
                  required
                  onChange={(e) => {
                    email.onChange(e);
                    handleEmail(e);
                  }}
                  name="email"
                  type="email"
                  placeholder="Contoh: johndee@gmail.com"
                  onFocus={() => setIsFocusedEmail(true)}
                  onBlur={() => setIsFocusedEmail(false)}
                  className={`inputSignUp ${isEmailDone ? 'focus:border-blue-500 focus:shadow-blue-500 focus:outline-none ' : 'focus:outline-none focus:border-red-500 focus:shadow-red-500'}`}
                  style={
                    isFocusedEmail
                      ? isEmailDone
                        ? { boxShadow: '0 0 0 0.2rem rgba(0, 0, 255, 0.25)', borderColor: 'blue' }
                        : { boxShadow: '0 0 0 0.2rem rgba(220, 53, 69, 0.25)', borderColor: '#dc3545' }
                      : null 
                  }
                />
              </Form.Group>
              <Form.Group
                className="mb-3 form-sign-up"
                controlId="formBasicPassword"
              >
                <Form.Label className="form-label">Create Password<span style={{color:"red"}}>*</span></Form.Label>
                <Form.Control
                  required
                  {...password.value}
                  name="password"
                  type="password"
                  placeholder="6+ karakter"
                  onChange={(e) => {
                    password.onChange(e);
                    handlePassword(e);
                  }}
                  className={`inputSignUp ${isPasswordDone ? 'focus:border-blue-500 focus:shadow-blue-500 focus:outline-none ' : 'focus:outline-none focus:border-red-500 focus:shadow-red-500'}`}

                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  style={
                    isFocused
                      ? isPasswordDone
                        ? { boxShadow: '0 0 0 0.2rem rgba(0, 0, 255, 0.25)', borderColor: 'blue' }
                        : { boxShadow: '0 0 0 0.2rem rgba(220, 53, 69, 0.25)', borderColor: '#dc3545' }
                      : null 
                  }
                />
                <Form.Text className="text-muted">
                  Minimal 8 kata dan 1 symbol.
                </Form.Text>
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
                    fontStyle: "",
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
              padding:0
            }}
          >
            <div className="wrapper">
              <div className="new">
                <h1>Join As Seller</h1>
                <p>
                  Perluas jangkauan daganganmu! Segera daftarkan daganganmu dan
                  raih kesempatan untuk dikenal oleh ribuan pengunjung dalam
                  acara festival kami.
                </p>
              </div>
              <section class="overlay-section-login-seller"></section>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FormSignUp;
