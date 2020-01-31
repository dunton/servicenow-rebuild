import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { data } from "../data";
import { produceSections } from "../functions/produceSections";
import { Container } from "react-bootstrap";
import Homepage from "./Homepage";

class Fullpage extends Component {
  constructor() {
    super();
    this.state = {
      fullpages: [
        {
          text: "question-1"
        },
        {
          text: "question-2"
        }
      ]
    };
  }

  render() {
    const { text } = this.state;
    const { onLeave } = this.props;
    const anchors = [
      "question-1",
      "question-2",
      "question-3",
      "question-4",
      "question-5",
      "question-6"
    ];
    return (
      <ReactFullpage
        debug
        onLeave={onLeave}
        anchors={anchors}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <Homepage />
              {produceSections(data)}
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );
  }
}

export default Fullpage;
