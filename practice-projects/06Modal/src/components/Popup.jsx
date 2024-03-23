import './Popup.css'

function Popup({closeModal}) {
  return (
    <div className="bg-overlay">
      {/* modal content */}
      <div className="modal-container">
        <button className="btn-close" onClick={() => closeModal(false)}>X</button>
        <div className="title">
          <h1>Are you sure you want to continue</h1>
        </div>
        <div className="body">
          Lorem, ipsum dolor sit amet consectetur adipisicing.
        </div>
        <div className="footer">
          <button onClick={() => closeModal(false)} className='btn-cancle'>Cancle</button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
