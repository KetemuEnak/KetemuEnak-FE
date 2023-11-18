import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import useFormInput from "../../hooks/useFormInput";
import { useEffect, useState } from "react";
import usePostApi from "../../hooks/usePostApi";

const FormSignInEo = () => {
  const navigate = useNavigate();
  const [isPasswordDone, setIsPasswordDone] = useState(false)
  const [isEmailDone, setIsEmailDone] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isFocusedEmail, setIsFocusedEmail] = useState(false)
  const [isSubmitWrong, setIsSubmitWrong] = useState(false)
  const [errorMessage, setErrorMessage] = useState('');

  const email = useFormInput('');
  const password = useFormInput('');

  const apiUrlBase = "https://ketemuenak.fly.dev"
  const apiUrl = `${apiUrlBase}/auth/login`;
  const { data, loading, error, request } = usePostApi(apiUrl);

  useEffect(()=>{
    const role = localStorage.getItem("role");
    if (localStorage.getItem('token') !== null && role == "seller"){
      navigate('/seller');
    }
    if (localStorage.getItem('token') !== null && role == "eo"){
      navigate('/event');
    }
  },[])
  
  
  const handleButtonRegister = async(e) => {
    e.preventDefault();

    if(isPasswordDone==true && isEmailDone===true){
      const postData = {
        email: email.value,
        password: password.value,
      };
      try {
        const { response, data: responseData, error: requestError } = await request(
          apiUrl,
          'POST',
          postData
        );
        if (response && response.status === 200) {
          const token = responseData.token;
          const id = responseData.user.id
          if (token) {
            localStorage.setItem('role','eo')
            localStorage.setItem('token', `${token}`)
            localStorage.setItem('id', `${id}`)
            navigate('/event');
          } else {
            console.log('Received non-200 status code:', response ? response.status : 'No response');
          }
        } else{
          setErrorMessage('Email or password is incorrect. Please try again.');
        }
        if (requestError) {
          console.error('Error:', requestError);
        }
      } catch (error) {
        console.error('Unhandled error:', error);
      }
    }
    else{
      setIsSubmitWrong(true)
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
      <div className="h-screen flex">
        <div className="w-1/2 bg-gray-10 p-8 flex flex-col justify-center item-end">
          <Form onSubmit={handleButtonRegister} className="container-login">
              <div className="box-sign-up"></div>
              <a
                className="backArrow"
                href="/"
                style={{ color: "black" }}
              >
                {" "}
                <FontAwesomeIcon icon={faArrowLeft} />
              </a>

              <h2 style={{ fontWeight: "700", fontSize:30 }}>
                Welcome Back!
              </h2>
              <p style={{ marginBottom: "20px"}}>Join as Event Organizers</p>
              {/* {message && (
                <Alert style={{ textAlign: "center" }} variant="danger">
                  {message}
                </Alert>
              )} */}
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address<span style={{color:"red"}}>*</span></Form.Label>
                <Form.Control
                  required
                  {...email.value}
                  className={`inputLogin ${isEmailDone ? 'focus:border-blue-500 focus:shadow-blue-500 focus:outline-none ' : 'focus:outline-none focus:border-red-500 focus:shadow-red-500'}`}
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => {
                    email.onChange(e);
                    handleEmail(e);
                  }}
                  onFocus={() => setIsFocusedEmail(true)}
                  onBlur={() => setIsFocusedEmail(false)}
                  style={
                    isFocusedEmail
                      ? isEmailDone
                        ? { boxShadow: '0 0 0 0.2rem rgba(0, 0, 255, 0.25)', borderColor: 'blue' }
                        : { boxShadow: '0 0 0 0.2rem rgba(220, 53, 69, 0.25)', borderColor: '#dc3545' }
                      : null 
                  }
                />
                <Form.Text className="text-muted">
                  We&#39;ll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password<span style={{color:"red"}}>*</span></Form.Label>
                <Form.Control
                  {...password.value}
                  required
                  className={`inputLogin ${isPasswordDone ? 'focus:border-blue-500 focus:shadow-blue-500 focus:outline-none ' : 'focus:outline-none focus:border-red-500 focus:shadow-red-500'}`}
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    password.onChange(e);
                    handlePassword(e);
                  }}
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
                {isSubmitWrong ? (   <Form.Text className="text-muted">
                  <span  className="text-red-500">
                  Make sure the password is at least 8 characters and contains at least 1 symbol.
                    </span>
                </Form.Text>) : null}

                {errorMessage ? (   <Form.Text className="text-muted">
                  <span  className="text-red-500">
                  {errorMessage}
                    </span>
                </Form.Text>) : null}


              </Form.Group>


              <Button
                variant="primary"
                type="submit"
                className="button-log"
                style={{ position: "inherit" }}
              >
                Sign In
              </Button>

              <p style={{ marginTop: ".5em" }}>
                Don’t have an account, Signup as
                <Link
                  to="/signup-eo"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "bold",
                    fontStyle: "",
                  }}
                >
                  {" "}
                  <u>EO</u>
                </Link>
              </p>
            </Form>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center">
          <div className="wrapper">
            <div className="new">
              <h1 style={{fontSize:"20px", fontWeight:"700", marginBottom: "20px"}}>Ketemu Enak </h1>
              <p> 
                Langkah pertama menuju perubahan besar! <br /> Bersama-sama,
                kita mendukung pertumbuhan UMKM di Indonesia. Mari bergabung,
                tunjukkan keindahan bisnis lokal atau daftarkan event
                menarikmu. <br /> <br />
                <span style={{fontWeight:"600"}}>
                  Login sekarang untuk mendukung dan memajukan UMKM di Indonesia!
                </span>
              </p>
            </div>
            <section className="overlay-section-login-all"></section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSignInEo;
