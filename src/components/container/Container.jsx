import PropTypes from "prop-types";
import { CardWrapper } from "./Wrapper.styled";

export const Container = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
