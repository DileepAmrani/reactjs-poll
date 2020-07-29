import React from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/BounceLoader";
 
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
 
class Loader extends React.Component {

  render() {
    return (
      <div className="sweet-loading">
        <ClipLoader
          css={override}
          size={100}
          color={"#123abc"}
          loading={true}
        />
      </div>
    );
  }
}


export default Loader