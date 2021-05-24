import React from "react";
import PT from "prop-types";
import { LastOperationWrapper } from "./LastOperation.styles";

const LastOperation = ({ operation, isAnimated }) => (
  <LastOperationWrapper>{operation}</LastOperationWrapper>
);

LastOperation.propTypes = {
  operation: PT.oneOfType([PT.string, PT.number])
};

LastOperation.defaultProps = {
  operation: ""
};

export default LastOperation;
