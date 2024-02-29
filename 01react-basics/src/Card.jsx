import profilePic from '../assets/charukirti.png'

import './index.css'

function Card() {
  return (
    <div className="card">
      <img className='card-img' src={profilePic}></img>
      <h2 className='card-title'>Charukirti</h2>
      <p className='card-description'>A coder, who learning react.js</p>
    </div>
  )
}

export default Card
