import React from "react";
import styled from "styled-components";

const WhatsThisDisclaimerWrapper = styled.div`
  position: absolute;
  top: 62px;
  left: 0;
  width: 240px;
  padding: 35px 15px 15px;
  text-align: left;
  background-color: #fff;
  font: 12px "Times New Roman", serif;
  line-height: 150%;
  color: #000;
  text-transform: none;
  border: solid 2px #000;
  z-index: 3000;

  :before {
    bottom: 100%;
    left: 37px;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(0, 0, 0, 0);
    border-bottom-color: #000;
    border-width: 18px;
    margin-left: -18px;
  }
  .whats-this-close {
    right: 7px;
    font-size: 24px;
    top: 8px;
    position: absolute;
    cursor: pointer;
  }
`;

const WhatsThisDisclaimer = () => {
  return (
    <WhatsThisDisclaimerWrapper>
      <div className="whats-this-close">x</div>
      This content was paid for by an advertiser and created by The Wall Street
      Journal advertising department. The Wall Street Journal news organization
      was not involved in the creation of this content.
    </WhatsThisDisclaimerWrapper>
  );
};

export default WhatsThisDisclaimer;
