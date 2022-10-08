import { Switch, TextField } from "@mui/material";
import { imgUrl, prodURL } from "../../config";
import styled from "styled-components";

const Container = styled.div`
  /* background-color: beige; */
  background-color: #130912;
  padding: 15px;
  /* height: 100vh; */
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
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
  width: 72px;
  height: 72px;
`;

const Heading = styled.h1`
  font-family: "Midnight";
  font-size: 27px;
  line-height: 3px;
  color: #ffffff;
  font-weight: 100;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  /* padding-left: 8px !important; */

  &:hover {
    background-color: red;
  }
`;

const SignUpPassword = styled(TextField)`
  margin-bottom: 10px !important;
  width: 296px !important;
  height: 50px !important;
  background-color: rgba(22, 10, 19, 0.7) !important;
`;

const SignUpButton = styled.button`
  font-family: "Midnight";
  background: #ff461f;
  color: #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 5px 5px 6px #ff1b12;
  border-radius: 165.5px;
  width: 184px;
  height: 48px;
  margin: auto;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`;

const FooterWrapper = styled.div`
  text-align: center;
  padding-bottom: 54%;
  margin-top: 20px;
`;
const Footer = styled.span`
  color: #d5c6dc;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
`;
const LoginLink = styled.a`
  color: #ff461f;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
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
};

const RegisterPage = () => {
  return (
    <Container>
      <LogoTitle>
        <SignUpLogo src={imgUrl + "/Slogo.svg"} alt="LogIn Logo" />
        <Heading>Sign Up</Heading>
      </LogoTitle>

      <SignUpForm>

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
          name="phoneno"
          label="Phone No"
          variant="standard"
          sx={SxStyles}
        />

        <SignUpPassword
          name="password"
          label="Password"
          variant="standard"
          sx={SxStyles}
        />

        <SignUpPassword
          name="confpassword"
          label="Confirm Password"
          variant="standard"
          sx={SxStyles}
        />

        <SignUpButton>SIGN UP</SignUpButton>
      </SignUpForm>

      <FooterWrapper>
        <Footer>Don't have an accoutnt?</Footer>
        <LoginLink href="#">Log In</LoginLink>
      </FooterWrapper>
    </Container>
  );
};

export default RegisterPage;
