import PropTypes from 'prop-types'

function Greet(props) {
  return (
    <>
      <p>
        Hello 👋 {props.name}, {props.message}
      </p>
    </>
  )
}

Greet.propTypes = {
  name: PropTypes.string,
  message: PropTypes.string,
}

export default Greet
