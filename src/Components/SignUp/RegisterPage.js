import { useState } from "react";
import {
  Switch,
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
  Input,
  InputLabel
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { imgUrl, prodURL } from "../../config";
import styled from "styled-components";
import "./SignUpCustomization.css";

const Container = styled.div`
  /* background-color: #130912; */
  // background-color: #1e1e1e;
  width: 100%;
  display: flex;
  /* border: 2px solid black; */
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
  padding-top: 135px;
  color: white;
`;

const SignUpLogo = styled.img`
  width: 72px;
  height: 72px;
`;

const Heading = styled.h1`
  font-family: "Midnight";
  font-size: 27px;
  /* color: black; */
  color: #ffffff;
  line-height: 3px;
  font-weight: 100;
  margin-bottom: 63px;
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
  font-size: 12px;
  line-height: 18px;
`;

const InputTag = styled(TextField)`
  margin-bottom: 10px !important;
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
  /* padding-bottom: 54%; */
  /* margin-top: 20px; */
  margin: 32px 82px 117px 82px;
`;
const Footer = styled.span`
  color: #d5c6dc;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  &:hover {
    text-decoration: underline;
  }
`;
const LoginLink = styled.a`
  color: #ff461f;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

//sx props using

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

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SignUpWrapper = styled.div`
  flex: 1;
  /* background-color: #130912; */
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
const RegisterPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var formdata = new FormData();

    // var raw = JSON.stringify({
    //   "name": "Vishal",
    //   "password": "vishal@123",
    //   "phoneNo": "6909442740",
    //   "regNo": "220/089"
    // });

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

    fetch("https://sonabyss.herokuapp.com/auth/createUser", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  /// Handling Password
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Container>
      <SignUpWrapper>
        <FormContainer>
          <SignUpForm className="signnup-container" onSubmit={handleSubmit}>
            <LogoTitle>
              <SignUpLogo src={imgUrl + "/Slogo.svg"} alt="LogIn Logo" />
              <Heading>Sign Up</Heading>
            </LogoTitle>

            <InputTag
              name="username"
              label="User name"
              variant="standard"
              sx={SxStyles}
            />

            <Wrapper>
              <QueryText>Are you a Neristien?</QueryText>
              <Switch />
            </Wrapper>

            <InputTag
              name="regno"
              label="Registration No"
              variant="standard"
              sx={SxStyles}
            />

            <InputTag
              name="phoneno"
              label="Phone No"
              variant="standard"
              sx={SxStyles}
            />

            <FormControl variant="standard" className="password-container">
            <InputLabel>Password</InputLabel>
              <SignUpPassword
                name="password"
                label="Password"
                variant="standard"
                sx={SxStyles}
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
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
            </FormControl>

            <SignUpPassword
              name="confpassword"
              label="Confirm Password"
              variant="standard"
              sx={SxStyles}
            />

            <SignUpButton>SIGN UP</SignUpButton>
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

export default RegisterPage;
