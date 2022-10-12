import React from "react";
// import styled from 'styled-components'
import TextField from "@mui/material/TextField";
import { Autocomplete } from "@mui/material";
import styled from "@emotion/styled";
import { imgUrl } from "../../config";
import './Style.css'

const StyleFilter = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
  /* justify-content: center; */
  /* padding: 1em 0; */
  margin-bottom: 2em;
  background-color: rgba(19, 9, 18, 0.9); ;
  width: 100%;
  /* position: fi; */
`;

const PreEventDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content:flex-end;
  width: 60%;
`;
const PreEvent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 2.5em;
  background-color: #000000;
  border: solid #FF0000;
  border-radius: 70px;
  color: white;
`;
const Pre =styled.span`
font-size: 2em;
font-family: Midnight Minutes;
max-width: 100%;
`;

const AutoCompleteDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 40%;
`;
const AutoStyle = {
  "& .MuiAutocomplete-inputRoot": {
    display:"flex",
    flexdirection:"row",
    alignitem:"center",
    justifycontent:"flexend",
    backgroundColor: "#000000",
    color:"#FFFFFF",
    fontsize: "25px",
    fontfamily: "Midnight Minutes",
    width: "17em",
    borderRadius: "70px",
    border:" solid #FF0000",
  
    // padding: "0 0 0 1em",
    // margin: "6px",
    
  },

  "& input::placeholder": {
    fontSize: "1em",
    opacity:"5",
    color:"#FFFFFF",
  },
  "& input": {
    // fontSize: "2em",
    padding:"0.5em",
    color:"#FFFFFF",
    fontfamily: "Midnight",
  },

};


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
      // height="21"
      padding="0.5em"
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
    <StyleFilter className='event-card'>
      <PreEventDiv>
      <PreEvent>
        <Pre>PreEvents</Pre>
      </PreEvent>
      </PreEventDiv>
      <AutoCompleteDiv>
        <Autocomplete
          className="AutoCom"
          disablePortal
          options={Events}
          sx={AutoStyle}
          // open={true}
          popupIcon={PopupIcon}
          disableClearable
          renderInput={(params) => (
            <TextField
              placeholder="Clubs"
              variant="standard"
              {...params}
              InputProps={{ ...params.InputProps, disableUnderline: true }}
            />
          )}
        />
      </AutoCompleteDiv>

    </StyleFilter>
  );
};

export default FilterSection;
