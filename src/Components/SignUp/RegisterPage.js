import { useState } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  Snackbar,
  // Button,
  Alert,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { imgUrl, prodURL } from "../../config";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import "./SignUpCustomization.css";
import CustomizedSwitches from "./CustomSwitch";
import { Link, useNavigate } from "react-router-dom";
import { Close } from "@mui/icons-material";
import { phoneBreak } from "../../breakPoints";

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  /* border: 2px solid green; */
  /* max-width: 390px; */
  align-items: center;
  background-color: #130912;
  height: 100%;
`;

const LogoTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* padding-top: 20%; */
  color: white;
  @media (min-width: 992px) {
    padding-top: 0;
  }
`;

const SignUpLogo = styled.img`
  width: 90px;
  height: 90px;
`;

const Heading = styled.h1`
  font-family: "livingbynumbers";
  font-size: 32px;
  /* color: black; */
  color: #ffffff;
  font-weight: 100;
  margin: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* margin: 10px 0 20px 0; */
`;
const QueryText = styled.p`
  color: #d5c6dc;
  font-weight: 400;
  font-size: 15px;
`;

const InputTagUser = styled(TextField)`
  margin-bottom: 21px !important;
  width: 296px !important;
  height: 50px !important;
  background-color: rgba(22, 10, 19, 0.7) !important;
  &:hover {
    label {
      color: #ff461f !important;
    }
  }
  &:focus {
    label {
      color: #ff461f !important;
    }
  }
  @media (min-width: 992px) {
    margin-bottom: 0px !important;
  }
`;

const InputTagReg = styled(TextField)`
  margin-bottom: 1rem !important;
  @media (min-width: 320px) {
    width: 296px !important;
    min-height: 50px !important;
  }
  background-color: rgba(22, 10, 19, 0.7) !important;
  visibility: ${(props) =>
    props.isnerist === "1" ? "visible" : "hidden"} !important;
  &:hover {
    label {
      color: #ff461f !important;
    }
  }
  &:focus {
    label {
      color: #ff461f !important;
    }
  }
  /* .css-15o4x5l-MuiFormControl-root-MuiTextField-root
  .MuiInput-underline::after {
    border-bottom-color: #ff461f;
  }
  .login-container .css-1ptx2yq-MuiInputBase-root-MuiInput-root::after {
    border-bottom: 2px solid #ff461f;
  } */
  @media (min-width: 992px) {
    margin-bottom: 1rem !important;
  }
`;

const InputTagPh = styled(InputTagReg)`
  display: ${(props) => (true ? "inline-flex" : "none")} !important;
  visibility: ${(props) =>
    props.isnerist === "1" || true ? "visible" : "hidden"} !important;
  margin-bottom: 1rem !important;
  width: 95%;
`;

// const SignUpPassword = styled(Input)`
//   margin-bottom: 10px !important;
//   width: 296px !important;
//   height: 50px !important;
//   background-color: rgba(22, 10, 19, 0.7) !important;
//   /* background-color: white !important; */
// `;

const SignUpPassword = styled(Input)`
  margin-bottom: 1rem !important;
  width: 296px !important;
  min-height: 50px !important;
  background-color: rgba(22, 10, 19, 0.7) !important;
  /* &:hover {
    .password-container label {
      color: #ff461f !important;
    }
  }
  &:focus {
    .password-container label {
      color: #ff461f !important;
    }
  } */
  @media (min-width: 992px) {
    /* margin-bottom: 5px !important; */
    margin-bottom: 0 !important;
  }
`;

const SignUpButton = styled.button`
  font-family: "livingbynumbers";
  border-radius: 165.5px;
  padding: 0.8rem 3rem;
  margin: 1rem auto;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  border: none;
  outline: none;
  background: #ff461f;
  color: #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 5px 5px 6px #ff1b12;
  transition: 80ms ease-in-out;
  &:hover {
    /* padding: 0.8rem 3.4rem 1rem 3rem; */

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 5px 5px 6px #ff1b12;
    cursor: pointer;
  }
  @media (min-width: 992px) {
    margin: 1rem auto;
    /* position: absolute;
    top: 80%; */
  }
`;

const FooterWrapper = styled.div`
  text-align: center;
  /* padding-bottom: 19%; */
  @media (min-width: 992px) {
    margin-top: 0;
    padding: 0;
  }
`;
const Footer = styled.span`
  color: #d5c6dc;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  &:hover {
    text-decoration: underline;
  }
`;
const LoginLink = styled(Link)`
  color: #ff461f;
  font-weight: 400;
  font-size: 15px;
  /* line-height: 18px; */
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

//sx props using starts here ...

const SxStyles = {
  input: { color: "#D5C6DC" },

  "& .MuiFormLabel-root": {
    color: "#D5C6DC",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "18px",
  },
  "& .MuiFormLabel-root.Mui-focused": {
    color: "#D5C6DC",
  },
  "& .MuiInput-underline:before": { borderBottomColor: "#D5C6DC" },
  "& .MuiInput-underline:after": { borderBottomColor: "#D5C6DC" },
  "& .MuiTextField-root": {
    paddingLeft: "8px !important",
  },

  "& .MuiTextField-root:hover": {
    color: "red",
  },
  "& .css-1d1r5q-MuiFormHelperText-root.Mui-error": {
    zIndex: "1 !important",
  },
};

// sx props ends here ...

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;

const SignUpWrapper = styled.div`
  flex: 1;
  background-color: #130912;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  /* padding: 1rem; */
  /* Desktop */
  @media (min-width: 992px) {
    /* padding-top: 19px; */
    padding: 0;
    display: flex;
    justify-content: space-evenly;
    min-width: 350px;
    min-height: 600px;
    /* min-height: 600px; */
    padding: 0.8rem 0;
  }
  @media (max-width: ${phoneBreak}) {
    overflow-y: scroll;
    margin: 1rem 0;
  }
`;

const Container = styled.div`
  /* background-color: #1e1e1e; */
  @media (max-width: 992px) {
    width: 100%;
    /* height: 100vh; */
    transition: 200ms ease-in-out;
  }
  display: flex;
  /* Desktop */
  @media (min-width: 993px) {
    /* display: none; */
    /* position: absolute; */
    align-items: center;
    justify-content: center;
    top: 6%;
    right: 17%;
    z-index: 3;
    /* height: 89vh;
    width: 69vw; */
    max-height: 700px;
    background-color: #000;
    margin: auto;
    /* overflow-y: scroll; */
  }
`;

const PrimaryContainer = styled.div`
  /* display: none; */
  @media (min-width: 992px) {
    background-color: #1e1e1e;
    position: relative;
    z-index: -1;
    height: 100vh;
    width: 100vw;
  }
`;

const SecondaryContainer = styled.div`
  /* display: none; */
  @media (min-width: 992px) {
    background-color: rgba(62, 28, 51, 0.38);
    position: absolute;
    z-index: 1;
    top: 3%;
    right: 8%;
    height: 94vh;
    width: 86vw;
    border-radius: 132px;
    /* filter: blur(4px); */
  }
`;

const ParentContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  overflow-y: auto;
  flex-direction: column;
`;

const LeftContainer = styled.div`
  display: none;
  /* Desktop */
  @media (min-width: 992px) {
    display: flex;
    flex: 2;
    justify-content: space-evenly;
    align-items: center;
    /* padding-top: 3%; */
    background-color: #000000;
    flex-direction: column;
    max-height: 600px;
    height: 100%;

    /* margin: auto 0; */
  }
`;

const WelcomeText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const FirstLine = styled.h2`
  font-family: "livingbynumbers";
  font-weight: 400;
  color: white;
  margin: 0;
  font-size: 39px;
`;
const SecondLine = styled.h1`
  font-family: "livingbynumbers";
  font-weight: 400;
  font-size: 74px;
  line-height: 1;
  color: white;
  margin: 0;
`;
const ThirdLine = styled.h2`
  font-family: "livingbynumbers";
  font-weight: 400;
  font-size: 39px;
  color: white;
  margin: 0;
`;
const FourthLine = styled.h3`
  font-family: "livingbynumbers";
  font-weight: 400;
  font-size: 26px;
  color: white;
  margin: 0;
`;
const BallonGifContainer = styled.div`
  /* position: absolute; */
  /* top: 55%;
  left: 23%; */
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: ; */
`;
const BallonImage = styled.img`
  width: 39%;
  /* margin: 2rem auto; */
`;

const BatManContainer = styled.div`
  position: absolute;
`;
const BatImage = styled.img`
  width: 30%;
`;

const Top = styled.div`
  display: none;
  @media (max-width: ${phoneBreak}) {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding: 0 1em;
    margin-top: 20px;
  }
`;

const Back = styled.img`
  /* display: none; */
  @media (max-width: ${phoneBreak}) {
    width: 2em;
    position: fixed;
    top:20px;
    left:10px;
    /* height: 20px; */
  }
`;

const RegisterPage = ({ setUserAccess }) => {
  const [phoneError, setPhoneError] = useState(false);
  const [pswdError, setPswdError] = useState(false);
  const [confpswdError, setConfPswdError] = useState(false);
  const [regError, setRegError] = useState(false);
  const [confPasswordCheck, setConfPasswordCheck] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [checked, setChecked] = useState(true);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <Close fontSize="small" />
      </IconButton>
    </>
  );
  const navigate = useNavigate();
  const handleRegChange = (e) => {
    var regno = /^[0-9]{6,6}$/g;
    if (e.target.value.match(regno)) {
      setRegError(false);
    } else {
      setRegError(1);
    }
  };

  const handlePhoneChange = (e) => {
    var phoneno = /^\d{10}$/;
    if (e.target.value.match(phoneno)) {
      setPhoneError(false);
    } else {
      setPhoneError(1);
    }
  };

  const handlePasswordChange = (e) => {
    var passwordCheck =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (e.target.value.match(passwordCheck)) {
      setPswdError(false);
    } else {
      setPswdError(true);
    }
  };

  const handleConfPasswordError = (e) => {
    var confPasswordCheck =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (e.target.value.match(confPasswordCheck)) {
      setConfPswdError(false);
    } else {
      setConfPswdError(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hi");
    // setLoading(true);
    var myHeaders = new Headers();
    let isError = false;
    var regno = /^[0-9]{6,6}$/;

    console.log("hi")
    if (checked && !e.target.regno.value.match(regno)) {
      console.log("hi")
      setRegError(1);
      return;
      isError = true;
    }
    var phoneno = /^\d{10}$/;
    if (!e.target.phoneno.value.match(phoneno)) {
      setPhoneError(1);
      isError = true;

      return;
    }
    var passwordCheck =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (!e.target.password.value.match(passwordCheck)) {
      setPswdError(true);
      isError = true;
      return;
    }

    var confPasswordCheck =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (!e.target.confPassword.value.match(confPasswordCheck)) {
      setConfPswdError(true);
      return;
      isError = true;
    }

    if (e.target.confPassword.value !== e.target.password.value) {
      // alert("Ho")
      setConfPasswordCheck(true);
      setLoading(false);
      return;
    }
    if (isError) {
      return;
    }
    setLoading(true);
    myHeaders.append("Content-Type", "application/json");
    let formdata;

    if (checked) {
      formdata = {
        name: e.target.name.value,
        password: e.target.password.value,
        phoneNo: e.target.phoneno.value,
        regNo: e.target.regno.value,
        userType: "s",
      };
    } else {
      formdata = {
        name: e.target.name.value,
        password: e.target.password.value,
        phoneNo: e.target.phoneno.value,
        userType: "o",
      };
    }
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(formdata),
    };

    fetch(prodURL + "/auth/createUser", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        if (result.success) {
          setUserAccess(result);
          localStorage.setItem("user", JSON.stringify(result));

          navigate("/", { state: result });
        } else {
          if (result.error == 1) {
            setPhoneError(2);
          } else if (result.error == 2) {
            setRegError(2);
          }
        }
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
      });
  };

  /// Handling Password
  const [values, setValues] = useState({
    password: "",
    confPassword: "",
    showConfPassword: false,
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleClickShowConfPassword = () => {
    setValues({
      ...values,
      showConfPassword: !values.showConfPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleEventChange = (e) => {
    setValues({ ...values, ["password"]: e.target.value });
    pswdError && handlePasswordChange(e);
    confPasswordCheck && handlePasswordChange(e);
  };

  const handleConfEventChange = (e) => {
    setValues({ ...values, ["confPassword"]: e.target.value });
    confpswdError && handleConfPasswordError(e);
  };

  const handleCloseSignUp = () => {
    navigate("/");
  }

  return (
    <ParentContainer>
      <Top>
        <Back
          onClick={handleCloseSignUp}
          src={imgUrl + "/backarrow.svg"}
        />
      </Top>
      {/* <PrimaryContainer></PrimaryContainer> */}
      <SecondaryContainer></SecondaryContainer>
      <Container>
        <LeftContainer>
          <WelcomeText>
            <FirstLine>Welcome to</FirstLine>
            <SecondLine>Horror land</SecondLine>
            <ThirdLine>Where nightmare comes to life</ThirdLine>
            <FourthLine>let's get you sign up real quick</FourthLine>
          </WelcomeText>

          <BallonGifContainer>
            <BallonImage
              src={imgUrl + "/BallonGhost.gif"}
              // src="https://assets7.lottiefiles.com/packages/lf20_rt9mhehe.json"
              alt="Ghost Ballon Image"
            ></BallonImage>
          </BallonGifContainer>
        </LeftContainer>
        <SignUpWrapper>
          <FormContainer>
            <SignUpForm className="signnup-container" onSubmit={handleSubmit}>
              <LogoTitle>
                <SignUpLogo src={imgUrl + "/Slogo.svg"} alt="LogIn Logo" />
                <Heading>Sign Up</Heading>
              </LogoTitle>

              <InputTagUser
                name="name"
                type={"text"}
                label="Full Name"
                variant="standard"
                autoComplete="off"
                sx={SxStyles}
                required
              />

              <Wrapper>
                <QueryText>Are you a Neristian?</QueryText>
                <CustomizedSwitches checked={checked} setChecked={setChecked} />
              </Wrapper>

              <InputTagReg
                name="regno"
                label="Registration No"
                variant="standard"
                sx={SxStyles}
                error={regError}
                isnerist={checked ? "1" : null}
                helperText={
                  regError === 1
                    ? "Please enter a valid 6 digit reg no. with no /"
                    : regError === 2
                    ? "Registration no already exist"
                    : ""
                }
                onChange={(e) => {
                  regError && handleRegChange(e);
                }}
              />

              <InputTagPh
                name="phoneno"
                label="Phone No"
                variant="standard"
                autoComplete="off"
                sx={SxStyles}
                error={phoneError}
                isnerist={checked ? "1" : null}
                helperText={
                  phoneError === 1|| phoneError === true
                    ? "Please enter a valid 10 digit number"
                    : phoneError === 2
                    ? "Phone number already exist"
                    : ""
                }
                onChange={(e) => {
                  phoneError && handlePhoneChange(e);
                }}
              />

              <FormControl
                variant="standard"
                error={pswdError}
                className="password-container"
                sx={{ marginTop: "5px" }}
              >
                <InputLabel>Password</InputLabel>
                <SignUpPassword
                  // focused
                  name="password"
                  label="Password"
                  variant="standard"
                  autoComplete="off"
                  sx={SxStyles}
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleEventChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff sx={{ color: "white" }} />
                        ) : (
                          <Visibility sx={{ color: "white" }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {pswdError ? (
                  <FormHelperText>
                    Enter a valid pasword having A-Z, a-z, @#%* ,0-9
                  </FormHelperText>
                ) : (
                  ""
                )}
              </FormControl>

              <FormControl
                variant="standard"
                error={confpswdError}
                className="password-container"
              >
                <InputLabel>Confirm Password</InputLabel>
                <SignUpPassword
                  name="confPassword"
                  autoComplete="off"
                  label="Password"
                  variant="standard"
                  // autoComplete="off"
                  sx={SxStyles}
                  type={values.showConfPassword ? "text" : "password"}
                  value={values.confPassword}
                  onChange={handleConfEventChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showConfPassword ? (
                          <VisibilityOff sx={{ color: "white" }} />
                        ) : (
                          <Visibility sx={{ color: "white" }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {confpswdError ? (
                  <FormHelperText>
                    Enter a valid pasword having A-Z, a-z, @#%* ,0-9
                  </FormHelperText>
                ) : (
                  ""
                )}
                {confPasswordCheck ? (
                  <FormHelperText sx={{ color: "red" }}>
                    Password And Confirm Password Should be same
                  </FormHelperText>
                ) : (
                  ""
                )}
              </FormControl>

              <SignUpButton type="submit">SIGN UP</SignUpButton>
            </SignUpForm>
          </FormContainer>

          <BatManContainer>
            <BatImage />
          </BatManContainer>

          <FooterWrapper>
            <Footer>Don't have an account? </Footer>
            <LoginLink to="/signin"> Sign In</LoginLink>
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              // message=""
              action={action}
            >
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Account Created Successfully
              </Alert>
            </Snackbar>
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={loading}
              // onClick={handleCloseBd}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          </FooterWrapper>
        </SignUpWrapper>
      </Container>
    </ParentContainer>
  );
};

export default RegisterPage;
