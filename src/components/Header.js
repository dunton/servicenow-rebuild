import React from "react";
import styled from "styled-components";
import WhatsThisDisclaimer from "./WhatsThisDisclaimer";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  box-shadow: -1px 4px 20px 0px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  background: white;
  z-index: 1000;
  .program-title {
    margin: 0 0 0 15px;
  }
  .whats-this {
    span {
      position: relative;
      text-decoration: underline;
    }
  }
  .lockup {
    height: 100%;
    margin-right: 15px;
    display: inline-block;
    div {
      display: inline;
    }
    img {
      height: 50%;
      width: auto;
      margin-top: 0;
      vertical-align: middle;
      margin-top: 10px;
    }

    #client-logo {
      margin-right: 18px;
    }

    #wsjcc-logo {
      border-left: 1px solid black;
      padding-left: 18px;
    }
  }
`;

const Header = props => {
  const { displayWhatsThis, whatsThis, clientLogo, programTitle } = props;
  const disclaimer = whatsThis ? <WhatsThisDisclaimer /> : null;
  return (
    <HeaderWrapper>
      <div className="program-title">{programTitle}</div>
      <div className="whats-this">
        Paid Program -{" "}
        <span onClick={displayWhatsThis}>What's This {disclaimer}</span>
      </div>

      <div className="lockup">
        <div id="client-logo">
          <a
            href="https://www.servicenow.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={clientLogo} alt="client-logo" />
          </a>
        </div>
        <div id="wsjcc-logo">
          <a
            href="https://www.wsj.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://d885pvmm0z6oe.cloudfront.net/hubs/servicenow_102298/src/img/wsjcc_logo_sn_colorway.svg"
              alt="wsjcc_logo_sn_colorway"
            />
          </a>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
