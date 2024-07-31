import Clik from "./Clik";

export default function App() {
  return (
    <div className="card">
      <Avatar />

      <div className="card__data">
        <Intro />
        <SkillList />
      </div>

      {/* <Clik/> */}
    </div>
  );


}

function Avatar() {
  return <img src="./pfp.png" alt="avatar-image" className="avatar"/>;
}

function Intro() {
  return (
    <div>
      <h1>Charukirti Chougule</h1>
      <p>
        Just a normal who trying to learn how to code. Previously learnt HTML,
        CSS and JS. Now learning React.js
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill__list">
      <Skill skill="HTML" skillLevel="💪" bgColor="#e84118" />
      <Skill skill="CSS" skillLevel="👍" bgColor="#00a8ff" />
      <Skill skill="JavaScript" skillLevel="💪" bgColor = "#fbc531"/>
      <Skill skill="React" skillLevel="👶" bgColor = "#0097e6"/>
      <Skill skill = 'Git' skillLevel = '👍' bgColor="#353b48"/>
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill__list--skill" style={{backgroundColor : props.bgColor}}>
      <span>{props.skill}</span>
      <span>{props.skillLevel}</span>
    </div>
  );
}
