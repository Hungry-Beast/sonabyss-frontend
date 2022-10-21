import { useState } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  Alert,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { imgUrl, prodURL } from "../../config";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./LoginCustomization.css";
import CustomizedSwitches from "./LogInCustomSwitch";
import { phoneBreak } from "../../breakPoints";

const LogInForm = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #130912;
  /* border: 2px solid green; */
  /* max-width: 390px; */
  align-items: center;
  @media (max-width: ${phoneBreak}) {
    max-height: 500px;
  }
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

const LogInLogo = styled.img`
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

const InputTagReg = styled(TextField)`
  margin-bottom: 21px !important;
  width: 296px !important;
  height: 50px !important;
  background-color: rgba(22, 10, 19, 0.7) !important;
  display: ${(props) => (props.isNerist ? "inline-flex" : "none")} !important;
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
    margin-bottom: 3px !important;
  }
`;
const InputTagPh = styled(InputTagReg)`
  display: ${(props) => (!props.isNerist ? "inline-flex" : "none")} !important;
`;

const LogInPassword = styled(Input)`
  /* margin-bottom: 10px !important; */
  width: 296px !important;
  height: 50px !important;
  background-color: rgba(22, 10, 19, 0.7) !important;
  /* &:hover {
    label {
      color: #ff461f !important;
    }
  }
  &:focus {
    label {
      color: #ff461f !important;
    }
  } */
  @media (min-width: 992px) {
    /* margin-bottom: 5px !important; */
    /* margin-top: 10px !important; */
  }
`;

const LogInButton = styled.button`
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
    padding-bottom: 26%;
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
  // margin: '0',

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
};

// sx props ends here ...

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const LogInWrapper = styled.div`
  flex: 1;
  background-color: #130912;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* padding: 1rem; */
  /* Desktop */
  @media (min-width: 992px) {
    padding-top: 19px;
    display: flex;
    justify-content: space-evenly;
  }
`;
// const

const Container = styled.div`
  background-color: #1e1e1e;
  width: 100%;
  display: flex;
  height: 100vh;
  @media (min-width: 992px) {
    /* display: none; */
    position: absolute;
    top: 10%;
    right: 17%;
    z-index: 3;
    height: 82vh;
    width: 69vw;
    background-color: blue;
    margin: auto;
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
`;

const LeftContainer = styled.div`
  display: none;
  /* Desktop */
  @media (min-width: 992px) {
    display: flex;
    flex: 2;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 3%;
    background-color: #000000;
    flex-direction: column;
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
// const FourthLine = styled.h3`
//   font-family: "livingbynumbers";
//   font-weight: 400;
//   font-size: 26px;
//   color: white;
//   margin: 0;
// `;
const BallonGifContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BallonImage = styled.img`
  width: 46%;
  /* margin:2rem 0; */
  /* mix-blend-mode: difference; */
  /* mix-blend-mode: multiply; */
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
    /* height: 20px; */
  }
`;

const LogInPage = ({ setUserAccess }) => {
  const [phoneError, setPhoneError] = useState(false);
  const [pswdError, setPswdError] = useState(0);
  const [regError, setRegError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(true);

  const navigate = useNavigate();
  const handleRegChange = (e) => {
    var regno = /^[0-9]{6,6}$/g;
    if (e.target.value.match(regno)) {
      setRegError(false);
    } else {
      setRegError(true);
    }
  };

  const handlePhoneChange = (e) => {
    var phoneno = /^\d{10}$/;
    if (e.target.value.match(phoneno)) {
      setPhoneError(false);
    } else {
      setPhoneError(true);
    }
  };

  const handlePasswordChange = (e) => {
    var password =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (e.target.value.match(password)) {
      setPswdError(false);
    } else {
      setPswdError(1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    let isError = false;

    var password =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (!e.target.password.value.match(password)) {
      setPswdError(1);
      // return;
      isError = true;
    }
    if (checked) {
      var regno = /^[0-9]{6,6}$/g;
      if (!e.target.regno.value.match(regno)) {
        setRegError(true);
        // return;
        isError = true;
      }
    } else {
      var phoneno = /^\d{10}$/;
      if (!e.target.phoneno.value.match(phoneno)) {
        setPhoneError(true);
        // return;
        isError = true;
      }
    }
    if (isError) {
      return;
    }
    setLoading(true);
    myHeaders.append("Content-Type", "application/json");
    let formdata;

    // formdata.append("name", e.target.username.value);
    if (checked) {
      formdata = {
        regNo: e.target.regno.value,
        password: e.target.password.value,
      };
    } else {
      formdata = {
        phoneNo: e.target.phoneno.value,
        password: e.target.password.value,
      };
    }
    console.log(formdata);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(formdata),
      redirect: "follow",
    };

    fetch(prodURL + "/auth/login", requestOptions)
      .then((response) => {
        setLoading(false);
        console.log(response);
        if (response.status === 400) {
          setPswdError(2);
          return 0;
        } else {
          return response.json();
        }
      })
      .then((result) => {
        setLoading(false);
        console.log(result);
        if (result) {
          setUserAccess(result);
          localStorage.setItem("user", JSON.stringify(result));
          navigate("/");
        }
      })
      .catch((error) => {
        // <Alert severity="error">Servier issues</Alert>
        console.log("error", error);
      });
  };

  /// Handling Password
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleEventChange = (e) => {
    setValues({ ...values, ["password"]: e.target.value });
    pswdError && handlePasswordChange(e);
  };

  const handleClose = () => {
    navigate("/");
  }

  // console.log(checked);

  return (
    <ParentContainer>
      <Top>
        <Back
          onClick={handleClose}
          src={imgUrl + "/backarrow.svg"}
        />
      </Top>

      {/* <PrimaryContainer></PrimaryContainer> */}
      <SecondaryContainer></SecondaryContainer>
      <Container>
        <LeftContainer>
          <WelcomeText>
            <FirstLine>Welcome again to</FirstLine>
            <SecondLine>Horror land</SecondLine>
            <ThirdLine>Log in at your own RISK</ThirdLine>
            {/* <FourthLine>let's get you sign up real quick</FourthLine> */}
          </WelcomeText>

          <BallonGifContainer>
            <BallonImage
              src={imgUrl + "/BallonGhost.gif"}
              // src="https://assets7.lottiefiles.com/packages/lf20_rt9mhehe.json"
              alt="Ghost Ballon Image"
            ></BallonImage>
          </BallonGifContainer>
        </LeftContainer>
        <LogInWrapper>
          <FormContainer>
            <LogInForm className="login-container" onSubmit={handleSubmit}>
              <LogoTitle>
                <LogInLogo src={imgUrl + "/Slogo.svg"} alt="LogIn Logo" />
                <Heading>Log In</Heading>
              </LogoTitle>
              <Wrapper>
                <QueryText>Are you a Neristian?</QueryText>
                <CustomizedSwitches checked={checked} setChecked={setChecked} />
              </Wrapper>

              <InputTagReg
                name="regno"
                label="Registration No"
                variant="standard"
                sx={SxStyles}
                isNerist={checked}
                error={regError}
                helperText={
                  regError
                    ? "Please enter a valid 6 digit reg no. with no /"
                    : ""
                }
                onChange={(e) => {
                  regError && handleRegChange(e);
                }}
                autoComplete="off"
              />

              <InputTagPh
                // sx={{display: checked ? 'block' : 'none'}}
                name="phoneno"
                label="Phone No"
                variant="standard"
                sx={SxStyles}
                isNerist={checked}
                // focused
                error={phoneError}
                helperText={
                  phoneError ? "Please enter a valid 10 digit number" : ""
                }
                onChange={(e) => {
                  phoneError && handlePhoneChange(e);
                }}
              />

              <FormControl
                variant="standard"
                error={pswdError}
                className="password-container"
              >
                <InputLabel>Password</InputLabel>
                <LogInPassword
                  name="password"
                  label="Password"
                  variant="standard"
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
                  autoComplete="on"
                />
                {pswdError === 1 ? (
                  <FormHelperText>
                    Enter a valid pasword having A-Z, a-z, @#%* ,0-9
                  </FormHelperText>
                ) : pswdError === 2 ? (
                  <FormHelperText>Incorrect Password</FormHelperText>
                ) : (
                  ""
                )}
              </FormControl>
              <LogInButton>SIGN IN</LogInButton>
            </LogInForm>
          </FormContainer>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
            // onClick={handleCloseBd}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          <FooterWrapper>
            <Footer>Don't have an account? </Footer>
            <LoginLink to="/signup"> Sign Up</LoginLink>
          </FooterWrapper>
        </LogInWrapper>
        {/* // <RightContainer></RightContainer> */}
      </Container>
    </ParentContainer>
  );
};

export default LogInPage;
