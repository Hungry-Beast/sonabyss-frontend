import React from "react";
import styled from "styled-components";
import { Switch, TextField } from "@mui/material";
import { imgUrl, prodURL } from "../../config";
import RegisterPage from "../SignUp/RegisterPage";

const Container = styled.div`
  background-color: beige;
  padding: 15px;
  /* height: 100vh; */
`;

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const LogoTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 33%;
`;

const SignInLogo = styled.img`
  width: 32vw;
  height: 15vh;
`;

const Heading = styled.h1`
  font-family: "Midnight";
  font-size: 41px;
  line-height: 3px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const QueryText = styled.p``;

const Registration = styled(TextField)`
  margin-bottom: 10px !important;
`;

const SignInPassword = styled(TextField)`
  margin-bottom: 52px !important;
`;

const SignInButton = styled.button`
  font-family: "Midnight";
  background: #ff461f;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 5px 5px 6px #ff1b12;
  border-radius: 165.5px;
  width: 245px;
  height: 64px;
  margin: auto;
  font-size: 24px;
`;

const FooterWrapper = styled.div`
  text-align: center;
  padding-bottom: 54%;
  margin-top: 20px;
`;
const Footer = styled.span``;
const SignUpLink = styled.a``;

const LogInPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "multipart/form-data");

    var formdata = new FormData();

    formdata.append("regNo", e.target.regno.value);
    formdata.append("password", e.target.password.value);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      // content
      redirect: "follow",
    };

    fetch(prodURL + "/api/auth/login", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <Container>
      <LogoTitle>
        <SignInLogo src={imgUrl + "/Slogo.svg"} alt="LogIn Logo" />
        <Heading>Log In</Heading>
      </LogoTitle>

      <SignInForm onSubmit={handleSubmit}>
        <Wrapper>
          <QueryText>Are you a Neristien?</QueryText>
          <Switch />
        </Wrapper>

        <Registration
          name="regno"
          label="Registration no."
          variant="standard"
        />
        <SignInPassword
          name="password"
          // type={"password"}
          label="Password"
          variant="standard"
        />

        <SignInButton>LOG IN</SignInButton>

        <FooterWrapper>
          <Footer>Don't have an accoutnt?</Footer>
          <SignUpLink href="#">Sign Up</SignUpLink>
        </FooterWrapper>
      </SignInForm>
    </Container>
  );
};

export default LogInPage;
