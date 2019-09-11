import React from "react";
import Text from "./Text";

function Loading() {
  return (
    <div className="spinner">
      <div>
        <div className="lds-css ng-scope">
          <div
            style={{ width: "100%", height: "100%" }}
            className="lds-double-ring"
          >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <Text className="loader-text">Loading...</Text>
    </div>
  );
}

export default Loading;
