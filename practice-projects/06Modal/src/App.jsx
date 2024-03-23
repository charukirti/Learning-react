import Popup from "./components/Popup";
import { useState } from "react";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <button className="btn-open" 
      onClick={() => setOpenModal(true)}>
        Open modal
      </button>

      {openModal && <Popup closeModal={setOpenModal}/>}
      
    </div>
  );
}

export default App;
