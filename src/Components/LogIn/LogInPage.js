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
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { imgUrl, prodURL } from "../../config";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./LoginCustomization.css";
import CustomizedSwitches from "./LogInCustomSwitch";

const Container = styled.div`
  background-color: #1e1e1e;
  width: 100%;
  display: flex;
  height: 100vh;
`;

const LogInForm = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  /* border: 2px solid green; */
  /* max-width: 390px; */
  align-items: center;
`;

const LogoTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 20%;
  color: white;
`;

const LogInLogo = styled.img`
  width: 90px;
  height: 90px;
`;

const Heading = styled.h1`
  font-family: "Midnight";
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
`;
const InputTagPh = styled(InputTagReg)`
  display: ${(props) => (!props.isNerist ? "inline-flex" : "none")} !important;
`;

const LogInPassword = styled(Input)`
  margin-bottom: 10px !important;
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
`;

const LogInButton = styled.button`
  font-family: "Midnight";
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
  &:hover {
    transition: 80ms ease-in-out;
    padding: 0.8rem 3.4rem 1rem 3rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 5px 5px 6px #ff1b12;
    cursor: pointer;
  }
`;

const FooterWrapper = styled.div`
  text-align: center;
  padding-bottom: 19%;
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
  padding: 1rem;
`;

const RightContainer = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: flex;
    flex: 3;
  }
`;
const LogInPage = () => {
  const [phoneError, setPhoneError] = useState(false);
  const [pswdError, setPswdError] = useState(0);
  const [regError, setRegError] = useState(false);
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
        console.log(response);
        if (response.status === 400) {
          setPswdError(2);
          return 0;
        } else {
          return response.json();
        }
      })
      .then((result) => {
        console.log(result);
        if (result) {
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

  const [checked, setChecked] = useState(false);
  // console.log(checked);

  return (
    <Container>
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
                regError ? "Please enter a valid 6 digit reg no. with no /" : ""
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
                <FormHelperText>
                  Incorrect Password 
                </FormHelperText>
              ) : (
                ""
              )}
            </FormControl>
            <LogInButton>SIGN IN</LogInButton>
          </LogInForm>
        </FormContainer>

        <FooterWrapper>
          <Footer>Don't have an account? </Footer>
          <LoginLink to="/signup"> Sign Up</LoginLink>
        </FooterWrapper>
      </LogInWrapper>
      // <RightContainer></RightContainer>
    </Container>
  );
};

export default LogInPage;
