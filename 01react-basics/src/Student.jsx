/* eslint-disable react/prop-types */
/* Props :- 
       - read-only properties shared between components. 
       - A parent componet can share data to a child component
       - <Component key=value />
        
*/

function Student(props) {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? 'Yes' : 'No'}</p>
    </div>
  )
}

export default Student
