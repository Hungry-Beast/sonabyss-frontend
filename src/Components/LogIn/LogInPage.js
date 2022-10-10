import { useState } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { imgUrl, prodURL } from "../../config";
import styled from "styled-components";
import "./LoginCustomization.css";
import CustomizedSwitches from "./LogInCustomSwitch";

const Container = styled.div`
  background-color: #1e1e1e;
  width: 100%;
  display: flex;
  height: 100vh;
`;

const SignUpForm = styled.form`
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

const SignUpLogo = styled.img`
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

const InputTag = styled(TextField)`
  margin-bottom: 21px !important;
  width: 296px !important;
  height: 50px !important;
  background-color: rgba(22, 10, 19, 0.7) !important;
`;

const SignUpPassword = styled(Input)`
  margin-bottom: 10px !important;
  width: 296px !important;
  height: 50px !important;
  background-color: rgba(22, 10, 19, 0.7) !important;
  /* background-color: white !important; */
`;

const SignUpButton = styled.button`
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
  transition: 300ms ease-in-out;
  &:hover {
    /* transform: translate(8px, 8px); */
    /* 
    padding-right: 3.5rem;
    padding-bottom: 1rem; */
    transform: scale(1, 1.2);
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
const LoginLink = styled.a`
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
};

// sx props ends here ...

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SignUpWrapper = styled.div`
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
  const [pswdError, setPswdError] = useState(false);
  const [regError, setRegError] = useState(false);

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
      setPswdError(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();

    var password =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (!e.target.password.value.match(password)) {
      setPswdError(true);
      return;
    }

    var regno = /^[0-9]{6,6}$/g;
    if (!e.target.regno.value.match(regno)) {
      setRegError(true);
      return;
    }

    var phoneno = /^\d{10}$/;
    if (!e.target.phoneno.value.match(phoneno)) {
      setPhoneError(true);
      return;
    }
    myHeaders.append("Content-Type", "application/json");
    var formdata = new FormData();

    formdata.append("name", e.target.username.value);
    formdata.append("password", e.target.password.value);
    formdata.append("phoneNo", e.target.phoneno.value);
    formdata.append("regNo", e.target.regno.value);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(prodURL + "/auth/createUser", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
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

  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Container>
      <SignUpWrapper>
        <FormContainer>
          <SignUpForm className="login-container" onSubmit={handleSubmit}>
            <LogoTitle>
              <SignUpLogo src={imgUrl + "/Slogo.svg"} alt="LogIn Logo" />
              <Heading>Log In</Heading>
            </LogoTitle>
            <Wrapper>
              <QueryText>Are you a Neristien?</QueryText>
              <CustomizedSwitches
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Wrapper>

            <InputTag
              name="regno"
              label="Registration No"
              variant="standard"
              sx={SxStyles}
              error={regError}
              helperText={
                regError ? "Please enter a valid 6 digit reg no. with no /" : ""
              }
              onChange={(e) => {
                regError && handleRegChange(e);
              }}
            />

            {/* <InputTag
                // sx={{display: checked ? 'block' : 'none'}}
                name="phoneno"
                label="Phone No"
                variant="standard"
                sx={SxStyles}
                error={phoneError}
                helperText={
                  phoneError ? "Please enter a valid 10 digit number" : ""
                }
                onChange={(e) => {
                  phoneError && handlePhoneChange(e);
                }}
              /> */}

            <FormControl
              variant="standard"
              error={pswdError}
              className="password-container"
            >
              <InputLabel>Password</InputLabel>
              <SignUpPassword
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
              />
              {pswdError ? (
                <FormHelperText>
                  Enter a valid pasword having A-Z, a-z, @#%* ,0-9
                </FormHelperText>
              ) : (
                ""
              )}
            </FormControl>
            <SignUpButton>LOG IN</SignUpButton>
          </SignUpForm>
        </FormContainer>

        <FooterWrapper>
          <Footer>Don't have an accoutnt?</Footer>
          <LoginLink href="#">Log In</LoginLink>
        </FooterWrapper>
      </SignUpWrapper>
      <RightContainer></RightContainer>
    </Container>
  );
};

export default LogInPage;
