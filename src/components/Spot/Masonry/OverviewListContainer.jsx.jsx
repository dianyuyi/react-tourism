import React from "react";
import OverviewList from "./OverviewList";
// import { testData } from "../../../data/testdata";
import PropTypes from "prop-types";

//refer: https://codesandbox.io/s/yvn1zwml51

class OverviewListContainer extends React.PureComponent {
  static childContextTypes = {
    customElement: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  getChildContext() {
    const { container } = this.state;
    return {
      customElement: container,
    };
  }

  render() {
    const { scenicSpot } = this.props;
    return (
      <div
        id="scroll-wrapper"
        style={{ overflow: "auto", width: "100%" }}
        ref={(e) => this.setState({ container: e })}
      >
        <OverviewList items={scenicSpot} />
      </div>
    );
  }
}

export default OverviewListContainer;
