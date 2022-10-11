import React from "react";
// import styled from 'styled-components'
import TextField from "@mui/material/TextField";
import { Autocomplete } from "@mui/material";
import styled from "@emotion/styled";
import { imgUrl } from "../../config";

const StyleFilter = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: flex-end;
  /* position: fixed; */
  /* padding: 1em 0.5em; */
  margin-bottom: 2em;
  background-color: rgba(19, 9, 18, 0.9); ;
  width: 100%;
`;

const PreEvent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  background-color: #000000;
  border: solid #FF0000;
  border-radius: 70px;
  /* border-color: red; */
  color: white;
`;
const Pre =styled.span`
font-size: 1.5em;
font-family: Midnight Minutes;
max-width: 100%;
`;
const AutoStyle = {
  "& .MuiAutocomplete-inputRoot": {
    alignitem:"center",
    justifycontent:"center",
    // backgroundColor: "#000000",
    color:"#FFFFFF",
    fontsize: "25px",
    fontfamily: "Midnight Minutes",
    width: "14rem",
    height: "46px",
    borderRadius: "70px",
    border:" solid #FF0000",
    // padding: "0 15px",
    // margin: "6px",
    
  },

  "& input::placeholder": {
    fontSize: "25px",
    color:"#FFFFFF",
    fontfamily: "Midnight Minutes",
  },
  "& input": {
    fontSize: "25px",
    color:"#FFFFFF",
    fontfamily: "Midnight Minutes",
  },


};

// const theme = createTheme({
//   components: {
//     MuiAutocomplete: {
//       styleOverrides: {
//         root: {
//           '& label': {
//             fontSize: 25,
//             color:"#FFFFFF",
//             fontfamily: "Midnight Minutes",
//           },
//         },
//         input: {
//           fontSize: 25,
//           color:"#FFFFFF",
//           fontfamily: "Midnight Minutes",
//         },
//         listbox: {
//           fontSize: 22,
//         },
//       },
//     },
//   },
// });

const Events = [
  {
    label: "photography",
  },
  { label: "Drama" },
  { label: "game zone" },
  { label: "writer forum" },
  { label: "hobby" },
  { label: "Dance club" },
];
const PopupIcon = (
  <span>
    <svg
      width="22"
      height="21"
      viewBox="0 0 24 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9393 20.0607C11.5251 20.6464 12.4749 20.6464 13.0607 20.0607L22.6066 10.5147C23.1924 9.92893 23.1924 8.97919 22.6066 8.3934C22.0208 7.80761 21.0711 7.80761 20.4853 8.3934L12 16.8787L3.51472 8.3934C2.92893 7.80761 1.97919 7.80761 1.3934 8.3934C0.807611 8.97919 0.807611 9.92893 1.3934 10.5147L10.9393 20.0607ZM10.5 0L10.5 19H13.5L13.5 0L10.5 0Z"
        fill="#fff"
      />
    </svg>
  </span>
);

const FilterSection = () => {
  return (
    <StyleFilter>
      <PreEvent>
        <Pre>PreEvents</Pre>
      </PreEvent>
      {/* <ThemeProvider theme={theme}> */}
      <Autocomplete
        disablePortal
        options={Events}
        sx={AutoStyle}
        popupIcon={PopupIcon}
        renderInput={(params) => (
          <TextField
            placeholder="Events"
            variant="standard"
            {...params}
            InputProps={{ ...params.InputProps, disableUnderline: true }}
          />
        )}
      />
      {/* </ThemeProvider> */}
    </StyleFilter>
  );
};

export default FilterSection;
