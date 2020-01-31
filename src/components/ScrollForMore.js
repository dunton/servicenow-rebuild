import React from "react";
import styled from "styled-components";

const ScrollForMoreWrapper = styled.div`
  right: 112px;
  bottom: 60px;
  position: absolute;
  p {
    margin-bottom: 0;
    span {
      height: 30px;
      width: 30px;
      border-radius: 50%;
      display: inline-block;
      background-color: #d6225d;
      margin: 0 10px 0 0;

      :before {
        border-style: solid;
        border-width: 3px 3px 0 0;
        border-color: white;
        content: "";
        display: inline-block;
        height: 10px;
        left: 10px;
        position: relative;
        vertical-align: top;
        width: 11px;
        top: 8px;
        -webkit-transform: rotate(135deg);
        transform: rotate(135deg);
      }
    }
  }
`;

const ScrollForMore = () => {
  return (
    <ScrollForMoreWrapper>
      <p>
        <span />scroll/swipe for
      </p>
    </ScrollForMoreWrapper>
  );
};

export default ScrollForMore;
