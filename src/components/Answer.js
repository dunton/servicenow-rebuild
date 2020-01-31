import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { vars } from "../_stylingVariables";
import { createMarkup } from "../functions/createMarkup";
import WistiaVideo from "./WistiaVideo";

const AnswerWrapper = styled.div`
  height: 100vh;
  // padding-top: 60px;
  .row {
    height: 100%;
    display: flex;
    &.video-left {
      flex-direction: row-reverse;
    }
    &.video-top {
      flex-direction: column-reverse;

      .col-md-6 {
        max-width: 100%;
        .video-holder {
          width: 50%;
          margin: auto;
        }
      }
    }
    .video-col {
      background: ${vars.darkGreen};
      padding: 0;
      display: flex;
      align-items: center;

      .video-holder {
        width: 100%;
      }
    }
    .text {
      h1 {
        margin-top: 80px;
        margin-right: auto;
        margin-left: auto;
        font-size: 2.43vw;
        max-width: 80%;
      }
      p {
        font-size: 1.3vw;
        margin-top: 1vw;
        margin-right: auto;
        margin-left: auto;
        max-width: 80%;
      }
      .cta-container {
        margin-right: auto;
        margin-left: auto;
        max-width: 80%;
        .cta {
          padding: 8px 50px;
          background: ${vars.darkGreen};
          color: #fff;
          border-radius: 5px;
          border: 1px solid transparent;
          cursor: pointer;
          font-family: century-gothic, sans-serif;
          font-weight: 700;
          font-style: normal;
          font-size: 1.3vw;

          &:hover {
            background: ${vars.lightGreen};
            color: ${vars.darkGreen};
          }
        }
      }
    }
  }
`;

class Answer extends Component {
  constructor(props) {
    super(props);
  }

  checkIfVideoSlide = videoId => {
    if (videoId === undefined) {
      return false;
    }

    return true;
  };

  render() {
    const {
      videoPosition,
      title,
      subTitle,
      videoSubject,
      videoSubjectTitle,
      text,
      ctaText,
      key,
      videoId
    } = this.props.data;
    const videoRowClass = `video-${videoPosition}`;
    const cta = ctaText ? (
      <div className="cta-container">
        <span className="cta">{ctaText}</span>
      </div>
    ) : (
      false
    );
    const videoContent = this.checkIfVideoSlide(videoId) ? (
      <WistiaVideo id={key} videoid={videoId} />
    ) : (
      false
    );
    return (
      <AnswerWrapper>
        <Row className={videoRowClass}>
          <Col md={6} className="text">
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={createMarkup(text)} />
            {cta}
          </Col>
          <Col md={6} className="video-col">
            <div className="video-holder" id={key}>
              {videoContent}
            </div>
          </Col>
        </Row>
      </AnswerWrapper>
    );
  }
}

export default Answer;
