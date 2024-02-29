/* eslint-disable react/prop-types */
function Welcome(props) {
    return (
      <>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
      </>
    );
  }

function MyComponent() {
    return <Welcome name = "Charukirti" age = {22} />;
  }


  
  

export default MyComponent