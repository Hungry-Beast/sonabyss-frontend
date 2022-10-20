import React from "react";
// import styled from 'styled-components'
import TextField from "@mui/material/TextField";
import { Autocomplete, FormControl, MenuItem, Select } from "@mui/material";
import styled from "@emotion/styled";
import { imgUrl } from "../../config";
// import "./Style.css";
import { phoneBreak } from "../../breakPoints";
import { useNavigate } from "react-router-dom";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "./Style.css";

const StyleFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
  /* padding: 1em 0; */
  margin-bottom: 2em;
  background-color: rgba(19, 9, 18, 0.9);
  width: 100%;
  justify-content: space-between;
  @media (max-width: ${phoneBreak}) {
    flex-direction: column-reverse;
  }
  /* position: fi; */
`;

const PreEventDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 60%; */
  flex: 1;
  @media (max-width: ${phoneBreak}) {
    width: 100%;
    margin-top: 1rem;
    /* margin: 0; */
    justify-content: center;
  }
`;
const PreEvent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 2.5em;
  background-color: #000000;
  border: solid #ff0000;
  border-radius: 70px;
  color: white;
`;
const Pre = styled.span`
  font-size: 2em;
  font-family: "pasdecourbe", sans-serif;
  max-width: 100%;
  @media (max-width: ${phoneBreak}) {
    font-size: 1.3em;
  }
`;

const AutoCompleteDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* width: 40%; */
  flex: 1;
  @media (max-width: ${phoneBreak}) {
    width: 100%;
    justify-content: space-between;
  }
`;
const BackArrow = styled.img`
  display: none;
  @media (max-width: ${phoneBreak}) {
    display: block;
  }
`;
const AutoStyle = {
  "& .MuiPaper-root": {
    background: "rgba(0, 0, 0, 0.98) ",
    color: "white",
  },
  "& .MuiAutocomplete-inputRoot": {
    display: "flex",
    flexdirection: "row",
    alignitem: "center",
    justifycontent: "flexend",
    backgroundColor: "#000000",
    color: "#FFFFFF",
    fontsize: "15px",
    fontfamily: "pasdecourbe",
    width: "17em",
    borderRadius: "70px",
    border: " solid #FF0000",

    // padding: "0 0 0 1em",
    // margin: "6px",
  },

  "& input::placeholder": {
    fontSize: "1em",
    opacity: "5",
    color: "#FFFFFF",
  },
  "& input": {
    // fontSize: "2em",
    padding: "0.5em",
    color: "#FFFFFF",
    fontfamily: "pasdecourbe",
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
  <span
    style={{
      margin: "0 10px ",
    }}
  >
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
// const Select = styled.select`
//   width: 10rem;
//   height: 35px;
//   background: white;
//   color: gray;
//   padding-left: 5px;
//   font-size: 14px;
//   border: none;
//   margin-left: 10px;

//   option {
//     color: black;
//     background: black;
//     display: flex;
//     white-space: pre;
//     min-height: 20px;
//     padding: 0px 2px 1px;
//     width: 60%;
//     margin: 0.5rem auto !important;

//     background: black;
//     border: 14px solid #ff0000;
//     box-shadow: inset 0px 1px 1px 1px #ffffff;
//     border-radius: 0.5em;
//     font-size: 1.7rem;
//     color: white;
//   }
// `;
// const SelectBox = styled(Autocomplete)`
//   .css-9e5uuu-MuiPaper-root-MuiAutocomplete-paper {
//     background: rgba(0, 0, 0, 0.98) !important;
//     border: 5px solid #ffffff !important;
//     border-radius: 35px !important;
//     color: #ffffff !important;
//     font-family: "pasdecourbe" !important;
//     font-style: normal;
//     font-weight: 400;
//     width: 100%;
//     font-size: 1.5rem;
//   }
// `;
const FilterSection = ({ clubs, setSelectedClub, getEvents, selectedClub }) => {
  const navigate = useNavigate();
  console.log(clubs);
  const Arrow = () => {
    return <ArrowDownwardIcon color="white" />;
  };

  return (
    <StyleFilter className="event-card">
      <div
        style={{
          flex: "1",
        }}
      ></div>
      <PreEventDiv>
        <PreEvent>
          <Pre>PreEvents</Pre>
        </PreEvent>
      </PreEventDiv>
      <AutoCompleteDiv>
        <BackArrow
          onClick={() => {
            navigate(-1);
          }}
          src={imgUrl + "/backArrow.svg"}
        />
        {/* <SelectBox
          className="AutoCom"
          disablePortal
          options={clubs}
          sx={AutoStyle}
          // open={true}
          popupIcon={PopupIcon}
          disableClearable
          onChange={(event, newValue) => {
            setSelectedClub(newValue);
            getEvents(newValue.value);
            // console.log(newValue)
          }}
          blurOnSelect="touch"
          renderInput={(params) => (
            <TextField
              placeholder="Clubs"
              variant="standard"
              {...params}
              InputProps={{ ...params.InputProps, disableUnderline: true }}
              focused={false}
            />
          )}
        /> */}
        <FormControl
          sx={{
            display: " flex",
            alignItems: "flex-end",
          }}
          fullWidth
        >
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedClub && selectedClub.value}
            label="Age"
            sx={{
              width: "70% !important",
            }}
            IconComponent={() => (
              <ArrowDownwardIcon
                style={{ color: "white", margin: "0 10px !important" }}
              />
            )}
            onChange={(event, newValue) => {
              console.log(newValue.props);
              setSelectedClub(newValue.props);
              getEvents(newValue?.props?.value);
            }}
          >
            {clubs &&
              clubs.length !== 0 &&
              clubs.map((club) => (
                <MenuItem value={club.value}>{club.label}</MenuItem>
              ))}
          </Select>
        </FormControl>
        {/* <Select 
        >
          <option value="" hidden>
          Type
          </option>
          <option value="1">Audi</option>
          <option value="2">BMW</option>
          <option value="3">Citroen</option>
          <option value="4">Ford</option>
        </Select> */}
      </AutoCompleteDiv>
    </StyleFilter>
  );
};

export default FilterSection;
