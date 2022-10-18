import styled from "styled-components";
import React from "react";
import { imgUrl } from "../../config";
import { phoneBreak } from "../../breakPoints";

const Background = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  @media (max-width: ${phoneBreak}) {
    /* display: block; */
    /* display: flex;
    flex-direction: column; */
    width: 75vw;
  }
`;
const PopUpContainer = styled.div`
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background: #000000;
  border: 6px solid rgba(255, 0, 0, 0.4);
  border-radius: 2em;
  display: flex;
  flex-direction: column;
  padding: 0.5em 0.5em;
  color: #ffffff;
  @media (max-width: ${phoneBreak}) {
      border-radius: 2.5em;
  }
  
  
`;
const ForCross = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${phoneBreak}) {
      display: flex;
      flex-direction: column;
      border-radius: 3em;
      width: 100%;
  }
`;
const EventDetails = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Midnight Minutes";
  margin: 0 10px;
  @media (max-width: ${phoneBreak}) {
      /* display: block; */
      width: 100%;
      margin: 0;
  }
  
`;
const Head = styled.span`
  width: 100%;
  margin: 0.3em 0;
  font-size: 2.5em;
  @media (max-width: ${phoneBreak}) {
      font-size: 1.5em;
      text-align: center;
  }
`;
const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  @media (max-width: ${phoneBreak}) {
      width: 100%;
  }
`;
const PaymentDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 32%;
  font-family: "Midnight Minutes";
  margin: 0 10px;
  @media (max-width: ${phoneBreak}) {
      width: 60%;
      margin: 10px auto;
  }
`;
const MidDetails = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${phoneBreak}) {
      display: block;
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  @media (max-width: ${phoneBreak}) {
      margin: 0 auto;
      width: 70%;
  }
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
  @media (max-width: ${phoneBreak}) {
      display: flex;
      flex-direction: column;
      justify-content: center;
  }
`;
const Imagecontainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5em;
  /* width: 50%; */
  object-fit: contain;
  @media (max-width: ${phoneBreak}) {
    width: 70%;
    padding: 0;
  }
`;
const Posterimg = styled.img`
  width: 80%;
  margin: 0 auto;
  border-radius: 37px;
  @media (max-width: ${phoneBreak}) {
      border-radius: 20px;
      width: 100%;
  }
`;

const Scannercontain = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  object-fit: contain;
  @media (max-width: ${phoneBreak}) {
    width: 70%;
  }
`;
const Scannerimage = styled.img`
  width: 100%;
  margin: 0 auto;
`;
const Span1 = styled.span`
  padding: 0.3em 0;
  text-align: center;
  font-size: 1.5em;
  width: 100%;
  @media (max-width: ${phoneBreak}) {
      font-size: 1em;
      padding: 0.2em 0;
  }
`;
const Span2 = styled.span`
  @media (max-width: ${phoneBreak}) {
      font-size: 0.5em;
  }
`;
const Span3 = styled.span`
  width: 100%;
  font-size: 2em;
  @media (max-width: ${phoneBreak}) {
      font-size: 1em;
      text-align: center;
  }
`;
// const Span4 = styel
const Submitbutton = styled.button`
  background: #ff1b12;
  width: 175px;
  height: 51px;
  font-size: 22px;
  font-family: "CF Night of Terror PERSONAL";
  box-shadow: 0px 6px 0px #44003d;
  border-radius: 25.5px;
  @media (max-width: ${phoneBreak}) {
      width: 80px;
      height: 20px;
      font-size: 0.7em;
      box-shadow: 0px 3px 0px #44003d;
  }
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0 1em;
`;
const Cross =styled.img`
  width: 3em;
  @media (max-width: ${phoneBreak}) {
      width: 2em;
  }
`;

const PaymentPopUp = () => {
  return (
    <Background>
      <PopUpContainer>
        <Top>
          <Cross src={imgUrl + "/charm_circle-cross.svg"}/>
        </Top>
        <ForCross>

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
                <Span3>Amount: Rs xxxx /-</Span3>
                <Span2>Upload the screenshot after the payment.</Span2>
                <Foot2>
                  <input type="file" required />
                </Foot2>
                <Span2>
                  *in case of processing, money debited contact : +919xxxxxxxx
                  We’ll get right back to you.
                </Span2>
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
        </ForCross>
      </PopUpContainer>
    </Background>
  );
};

export default PaymentPopUp;
