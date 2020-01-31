import React from "react";
import styled from "styled-components";
import { vars } from "../_stylingVariables";

const InsightsAndSolutionWrapper = styled.div`
  right: 20px;
  bottom: 20px;
  position: absolute;
  p {
    font-size: 30px;
    font-family: century-gothic, sans-serif;
    font-weight: 700;
    margin-bottom: 0;
    color: ${vars.darkGreen};
  }
`;

const InsightsAndSolution = () => {
  return (
    <InsightsAndSolutionWrapper>
      <p>Insights&Solution</p>
    </InsightsAndSolutionWrapper>
  );
};

export default InsightsAndSolution;
