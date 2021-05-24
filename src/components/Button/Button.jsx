import React from "react";
import PT from "prop-types";
import { ButtonWrapper } from "./Button.styles";

const Button = ({ onClick, id, value, display, ...rest }) => (
  <ButtonWrapper name={id} onClick={onClick} {...rest}>
    {display ? display : value}
  </ButtonWrapper>
);

Button.propTypes = {
  onClick: PT.func,
  id: PT.string.isRequired,
  value: PT.string.isRequired,
  display: PT.string
};

Button.defaultProps = {
  onClick: () => {},
  display: ""
};

export default Button;
