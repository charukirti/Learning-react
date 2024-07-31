import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <Step/>
  )
}

 function Step() {
  // const step = 1;

  const [step, setStep] = useState(1);

  // for component close & open
  const [isOpen, setIsOpen] = useState(true);

  // understanding the mechanism of state 👇
  // const [data, setData] = useState({name: 'Albert'})

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
    
    // if (step < 3) setStep((s) => s + 1);

    // This is bad practice to mutate the object
    // data.name = 'Rayan'

    // Using the setter function provided by the useState()
    // setData({name:'Rayan'})

    // step = step + 1 // this will not work as state can not set manually
  }

  // function handleOpenClose() {
  //   setIsOpen(false)
  // }


  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>&times;</button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            Step {step} : {messages[step - 1]}
            {/* {data.name} */}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
