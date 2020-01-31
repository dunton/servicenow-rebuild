import React, { Component } from "react";

class WistiaVideo extends Component {
  componentDidMount() {
    const script1 = document.createElement("script");
    const script2 = document.createElement("script");
    const { videoid } = this.props;
    script1.src = `//fast.wistia.com/embed/medias/${videoid}.jsonp`;
    script1.async = true;

    script2.src = "//fast.wistia.com/assets/external/E-v1.js";
    script2.async = true;
    document.getElementById(this.props.id).appendChild(script1);
    document.getElementById(this.props.id).appendChild(script2);
  }

  render() {
    const { videoid } = this.props;

    return (
      <div>
        <div
          className={`wistia_embed wistia_async_${videoid} videoFoam=true`}
          style={{ height: "349px", width: "620px" }}
        >
          &nbsp;
        </div>
      </div>
    );
  }
}

export default WistiaVideo;
