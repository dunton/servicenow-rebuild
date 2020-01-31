import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { vars } from "../_stylingVariables";
import { createMarkup } from "../functions/createMarkup";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const QuestionWrapper = styled.div`
  background: linear-gradient(to right bottom, #fff 0%, #fff 17%, #c0c2c4 100%);
  height: 100vh;
  padding-top: 60px;
  .row {
    height: 100%;
    &.text-right {
      display: flex;
      flex-direction: row-reverse;
    }
    .image-col {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 90%;
        margin: 0 auto;
        display: block;
      }
    }
    .text {
      text-align: left;
      .top-text {
        padding: 20px 0 0 60px;
        max-width: 95%;
        h1 {
          font-size: 2.43vw;
          font-family: century-gothic, sans-serif;
          font-weight: 700;
          font-style: normal;
          color: ${vars.darkGreen};
          span {
            color: ${vars.lightGreen};
          }
        }
        p {
          color: ${vars.darkGrey};
          font-size: 1.3vw;
          margin-top: 1vw;
          font-family: lato, sans-serif;
          font-weight: 300;
          font-style: normal;
        }
      }

      .callout-box {
        background: #293e40;
        width: 40%;
        bottom: 100px;
        &.left {
          position: absolute;
          left: 0;
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
        }
        &.right {
          position: absolute;
          right: 0;
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        }
        div {
          width: 80%;
          display: block;
          margin: 10px auto;
          h4 {
            color: #fff;
            font-size: 7vw;
            margin: 0;
            font-family: century-gothic, sans-serif;
            font-weight: 700;
            font-style: normal;

            .percent {
              color: #81b5a1;
              font-weight: 100;
              vertical-align: top;
              font-size: 4vw;
              margin-left: 3px;
            }

            .dollar {
              vertical-align: top;
              font-size: 4vw;
            }
            .milli {
              font-size: 5vw;
              margin-top: 1vw;
              color: ${vars.lightGreen};
            }
          }
          p {
            font-size: 1.3vw;
            color: ${vars.grey};
            margin: 0;
            font-family: lato, sans-serif;
            font-weight: 300;
            font-style: normal;
          }
        }
      }
    }
  }
`;

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      didCountup: false
    };
  }

  checkVisiblity = isVisible => {
    if (isVisible) {
      this.setState({
        visible: true,
        didCountup: true
      });
      return;
    }

    this.setState({
      visible: false,
      didCountup: false
    });
    return;
  };

  animateSvg = () => {
    switch (this.props.questionNumber) {
      case 1:
        if (this.state.visible) {
          console.log("1");
        }
        break;
      case 2:
        if (this.state.visible) {
          console.log("2");
        }
        break;
      default:
    }
  };
  render() {
    const {
      title,
      calloutStat,
      calloutText,
      text,
      textSide,
      key
    } = this.props.data;
    const { count } = this.props;
    const calloutClass = `callout-box ${textSide}`;
    const rowClass = `text-${textSide}`;
    const imageUrl = `../svgs/${key}-image.svg`;
    this.animateSvg();
    return (
      <QuestionWrapper>
        <Row className={rowClass}>
          <Col md={7} className="text">
            <div className="top-text">
              <h1>
                <span>{count}.</span> {title}
              </h1>
              <div dangerouslySetInnerHTML={createMarkup(text)} />
            </div>

            <div className={calloutClass}>
              <div>
                <VisibilitySensor onChange={this.checkVisiblity}>
                  <CountUp
                    start={0}
                    end={this.state.didCountup ? calloutStat : 0}
                    duration={1.5}
                    decimals={0}
                  >
                    {({ countUpRef }) => (
                      <h4>
                        <span ref={countUpRef} />
                        <span className="percent">%</span>
                      </h4>
                    )}
                  </CountUp>
                </VisibilitySensor>
                <p>{calloutText}</p>
              </div>
            </div>
          </Col>
          <Col md={5} className="image-col">
            <img
              src="https://d885pvmm0z6oe.cloudfront.net/hubs/servicenow_102298/src/img/main-image-1.svg"
              alt={`${key} graphic`}
            />
          </Col>
        </Row>
      </QuestionWrapper>
    );
  }
}

export default Question;
