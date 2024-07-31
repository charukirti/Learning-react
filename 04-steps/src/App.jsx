import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return <Step />;
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
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>


          <StepMessages step = {step} >{messages[step - 1]}</StepMessages>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next<span>👉</span>{" "}
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessages({step, children}) {
 return ( <p className="message">
  <h3>Step {step}</h3>
  {children}
</p>)
}

function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
     {children}
    </button>
  );
}
