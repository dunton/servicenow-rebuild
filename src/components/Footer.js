import React from "react";
import styled from "styled-components";
import ScrollToBegin from "./ScrollToBegin";
import ScrollForMore from "./ScrollForMore";
import InsightsAndSolution from "./InsightsAndSolution";
import Dot from "./Dot";

const FooterWrapper = styled.div`
  height: 80px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
`;

const PaginationDotsWrapper = styled.div`
  left: 20px;
  bottom: 20px;
  position: absolute;

  .dot {
    height: 7px;
    width: 7px;
    border-radius: 50%;
    display: inline-block;
    background-color: #81b5a1;
    margin: 0px 10px;
    font-family: lato, sans-serif;
    font-weight: 900;
    font-style: normal;

    &.active {
      height: 25px;
      width: 25px;
      background-color: #81b5a1;
      line-height: 25px;
      text-align: center;
      color: white;
      margin: 0;
    }
  }
`;

const Footer = props => {
  let content;
  const { slideType } = props;
  switch (slideType) {
    case "homepage":
      content = <ScrollToBegin />;
      break;
    case "answer":
      content = (
        <div>
          <InsightsAndSolution />
          <PaginationDotsWrapper>
            <Dot slidePosition={props.slidePosition} dotNumber={1} />
            <Dot slidePosition={props.slidePosition} dotNumber={2} />
            <Dot slidePosition={props.slidePosition} dotNumber={3} />
            <Dot slidePosition={props.slidePosition} dotNumber={4} />
            <Dot slidePosition={props.slidePosition} dotNumber={5} />
            <Dot slidePosition={props.slidePosition} dotNumber={6} />
          </PaginationDotsWrapper>
        </div>
      );
      break;
    default:
      content = (
        <div>
          <ScrollForMore />
          <InsightsAndSolution />
          <PaginationDotsWrapper>
            <Dot slidePosition={props.slidePosition} dotNumber={1} />
            <Dot slidePosition={props.slidePosition} dotNumber={2} />
            <Dot slidePosition={props.slidePosition} dotNumber={3} />
            <Dot slidePosition={props.slidePosition} dotNumber={4} />
            <Dot slidePosition={props.slidePosition} dotNumber={5} />
            <Dot slidePosition={props.slidePosition} dotNumber={6} />
          </PaginationDotsWrapper>
        </div>
      );
  }

  return <FooterWrapper>{content}</FooterWrapper>;
};

export default Footer;
