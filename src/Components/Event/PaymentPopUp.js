import styled from "styled-components";
import React from "react";

const Background = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
`;
const PopUpContainer = styled.div`
  /* width: 70vw;
  height: 70vh; */
  border-radius: 12px;
  /* background-color: white; */
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background: #000000;
  border: 8px solid rgba(255, 0, 0, 0.4);
  border-radius: 70px;
  display: flex;
  flex-direction: row;
  padding: 0.5em 1.5em;
  color: #ffffff;
`;
const EventDetails = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Midnight Minutes";
  margin: 10px;
`;
const Head = styled.span`
  width: 100%;
  margin: 0.5em 0;
  font-size: 2.5em;
`;
const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
`;
const PaymentDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  font-family: "Midnight Minutes";
  margin: 10px;
`;
const MidDetails = styled.div`
  display: flex;
  flex-direction: row;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;
const Foot1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0.5em 0;
`;
const Foot2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0.5em 0;
`;
const Imagecontainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5em;
  /* width: 50%; */
  object-fit: contain;
`;
const Posterimg = styled.img`
  width: 80%;
  margin: 0 auto;
  border-radius: 37px;
`;

const Scannercontain = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  object-fit: contain;
`;
const Scannerimage = styled.img`
  width: 80%;
  margin: 0 auto;
`;
const Span1 = styled.div`
  padding: 0.5em 0;
  text-align: center;
  font-size: 2em;
  width: 100%;
`;
const Span3 = styled.div`
  width: 100%;
  font-size: 2em;
`;
const Submitbutton = styled.button`
  background: #ff1b12;
  width: 175px;
  height: 51px;
  font-size: 22px;
  font-family: "CF Night of Terror PERSONAL";
  box-shadow: 0px 6px 0px #44003d;
  border-radius: 25.5px;
`;

const PaymentPopUp = () => {
  return (
    <Background>
      <PopUpContainer>
        <EventDetails>
          <Head>Event name: Mortal Kombat 11</Head>
          <MidDetails>
            <Left>
              <Imagecontainer>
                <Posterimg src="/images/combat.png" alt="" />
              </Imagecontainer>
              <Foot1>
                <Submitbutton>Submit</Submitbutton>
              </Foot1>
            </Left>

            <DetailContainer>
              <Span3>Amount</Span3>
              <Span3>Upload the screenshot after the payment.</Span3>
              <Foot2>
                <input type="file" required />
              </Foot2>
              <p>
                *in case of processing, money debited contact : +919xxxxxxxx
                We’ll get right back to you.
              </p>
            </DetailContainer>
          </MidDetails>
        </EventDetails>
        <PaymentDetails>
          <Span1>Scan</Span1>
          <Scannercontain>
            <Scannerimage src="../images/img.png" alt="Scan" />
          </Scannercontain>
          <Span1>UPI ID: xyz@oksbi</Span1>
        </PaymentDetails>
      </PopUpContainer>
    </Background>
  );
};

export default PaymentPopUp;
