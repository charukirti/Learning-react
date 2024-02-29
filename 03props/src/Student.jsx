/* 
 Props :- 
       - read-only properties shared between components. 
       - A parent componet can share data to a child component
       - <Component key=value />
 
 propTypes :- a mechanism that ensures that the passed value is of the correct datatype

    age: PropTypes.number

- defaultProps - default values for props in case they are not passed from parent component

   'name : 'guest''
*/

import PropTypes from 'prop-types'

function Student(props) {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? 'Yes' : 'No'}</p>
    </div>
  )
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
}

Student.defaultProps = {
    name: 'Guest',
    age: 0,
    isStudent: false
}

export default Student
