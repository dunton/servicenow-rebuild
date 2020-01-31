import React, { Component } from "react";
import Homepage from "./Homepage";
import Question from "./Question";
import Fullpage from "./Fullpage";
import Footer from "./Footer";
import Header from "./Header";
import { Container } from "react-bootstrap";
import { getHeaderData } from "../functions/getHeaderData";
import { headerData } from "../data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      slidePosition: null,
      slideType: "homepage",
      whatsThis: false,
      displayType: "desktop"
    };
  }

  determineScreensize = () => {
    const displayType = window.innerWidth > 767 ? "desktop" : "mobile";
    this.setState({
      displayType
    });
  };

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.determineScreensize();
    });
  }

  determineQuestionOrAnswer = index => {
    if (index % 2 === 0) {
      return "answer";
    } else if (index) {
      return "question";
    }

    return "homepage";
  };

  onLeave = (origin, destination, direction) => {
    let slideType = this.determineQuestionOrAnswer(destination.index);
    this.setState({
      slidePosition: destination.index,
      slideType
    });
  };

  displayWhatsThis = () => {
    this.setState(prevState => ({
      whatsThis: !prevState.whatsThis
    }));
  };

  render() {
    const { slideType, whatsThis, slidePosition, displayType } = this.state;
    const { clientLogo, programTitle } = getHeaderData(headerData);
    const show =
      displayType === "desktop" ? (
        <Fullpage onLeave={this.onLeave} />
      ) : (
        <div className="mobile" />
      );
    return (
      <div>
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Header
            whatsThis={whatsThis}
            displayWhatsThis={this.displayWhatsThis}
            clientLogo={clientLogo}
            programTitle={programTitle}
          />
          {show}
          <Footer slideType={slideType} slidePosition={slidePosition} />
        </Container>
      </div>
    );
  }
}

export default App;
