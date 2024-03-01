import PropTypes from 'prop-types'

function UserGreeting(props) {
  return props.isLoggedIn ? (
    <h2 className="success-msg">Welcome {props.username} 😀</h2>
  ) : (
    <h2 className="error-msg">Please log in to continue ☹</h2>
  )
}

UserGreeting.propTypes = {
    isLoggedIn : PropTypes.bool,
    username : PropTypes.string
}

export default UserGreeting
