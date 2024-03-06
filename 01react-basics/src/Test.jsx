import PropTypes from "prop-types";

function SayHello(props) {
  return (
    <h1 className = "text-9xl text-red-600 bg-yellow-500">
      Hello 👋, {props.name}
    </h1>
  );
}

SayHello.propTypes = {
  name: PropTypes.string,
};

export default SayHello;
