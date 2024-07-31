const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];
export default function App() {
  return (
    <main className="card">
      <Avatar />
      <div className="card__data">
        <Intro />
        <SkillList />
      </div>
    </main>
  );
}

function Avatar() {
  return <img src="./pfp.png" alt="avatar-image" className="avatar" />;
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
      {skills.map((skill) => (
        <Skill
          key={skill.skill}
          skill={skill.skill}
          skillLevel={skill.level}
          backgroundColor={skill.color}
        />
      ))}
    </div>
  );
}

function Skill({skill, skillLevel, backgroundColor}) {
  return (
    <div
      className="skill__list--skill"
      style={{ backgroundColor: backgroundColor }}
    >
      <span>{skill}</span>
      <span>{skillLevel}</span>
    </div>
  );
}
