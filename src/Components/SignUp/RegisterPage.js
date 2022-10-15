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
  Button,
  Alert,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { imgUrl, prodURL } from "../../config";
import styled from "styled-components";
import "./SignUpCustomization.css";
import CustomizedSwitches from "./CustomSwitch";
import { Link, useNavigate } from "react-router-dom";
import { Close } from "@mui/icons-material";

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
  display: ${(props) => (true ? "inline-flex" : "none")} !important;
`;

// const SignUpPassword = styled(Input)`
//   margin-bottom: 10px !important;
//   width: 296px !important;
//   height: 50px !important;
//   background-color: rgba(22, 10, 19, 0.7) !important;
//   /* background-color: white !important; */
// `;

const SignUpPassword = styled(Input)`
  margin-bottom: 10px !important;
  width: 296px !important;
  height: 50px !important;
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
  transition: 80ms ease-in-out;
  &:hover {
    /* padding: 0.8rem 3.4rem 1rem 3rem; */
    
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
const RegisterPage = () => {
  const [phoneError, setPhoneError] = useState(false);
  const [pswdError, setPswdError] = useState(false);
  const [confpswdError, setConfPswdError] = useState(false);
  const [regError, setRegError] = useState(false);
  const [confPasswordCheck, setConfPasswordCheck] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    var myHeaders = new Headers();
    let isError = false;
    var passwordCheck =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (!e.target.password.value.match(passwordCheck)) {
      setPswdError(true);
      // return;
      isError = true;
    }

    var confPasswordCheck =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (!e.target.confPassword.value.match(confPasswordCheck)) {
      setConfPswdError(true);
      // return;
      isError = true;
    }

    var regno = /^[0-9]{6,6}$/g;
    if (!e.target.regno.value.match(regno)) {
      setRegError(true);
      // return;
      isError = true;
    }

    var phoneno = /^\d{10}$/;
    if (!e.target.phoneno.value.match(phoneno)) {
      setPhoneError(true);
      isError = true;

      // return;
    }
    if (e.target.confPassword.value !== e.target.password.value) {
      // alert("Ho")
      setConfPasswordCheck(true);
      setLoading(false);
      return;
    }
    if (isError) {
      setLoading(false);
      return;
    }
    myHeaders.append("Content-Type", "application/json");
    let formdata;

    if (checked) {
      formdata = {
        name: e.target.name.value,
        password: e.target.password.value,
        phoneNo: e.target.phoneno.value,
        regNo: e.target.regno.value,
        userType: checked ? "s" : "o",
      };
    } else {
      formdata = {
        name: e.target.name.value,
        password: e.target.password.value,
        phoneNo: e.target.phoneno.value,
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
          localStorage.setItem("user", JSON.stringify(result));

          navigate("/", { state: result });
        } else {
          if (result.error == 1) {
            setPhoneError(2);
          } else if (result.error == 1) {
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
  };

  const handleConfEventChange = (e) => {
    setValues({ ...values, ["confPassword"]: e.target.value });
    confpswdError && handleConfPasswordError(e);
  };

  const [checked, setChecked] = useState(false);
  return (
    <Container>
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
              sx={SxStyles}
              // required
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
              isNerist={checked}
              helperText={
                regError ? "Please enter a valid 6 digit reg no. with no /" : ""
              }
              onChange={(e) => {
                regError && handleRegChange(e);
              }}
            />

            <InputTagPh
              name="phoneno"
              label="Phone No"
              variant="standard"
              sx={SxStyles}
              error={phoneError}
              isNerist={false}
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
              <SignUpPassword
                focused
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

            <FormControl
              variant="standard"
              error={confpswdError}
              className="password-container"
            >
              <InputLabel>Confirm Password</InputLabel>
              <SignUpPassword
                name="confPassword"
                label="Password"
                variant="standard"
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

            <SignUpButton>SIGN UP</SignUpButton>
          </SignUpForm>
        </FormContainer>

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
      <RightContainer></RightContainer>
    </Container>
  );
};

export default RegisterPage;
