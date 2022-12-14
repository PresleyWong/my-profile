import { useEffect } from "react";

const Skills = (props) => {
  useEffect(() => {
    document.getElementById("section-title").innerHTML = "Skills";
  });

  const listItem = (param) =>
    param.map((item, index) => (
      <li key={index} className="mb-2">
        <div className="resume-skill-name">{item}</div>
      </li>
    ));

  return (
    <>
      <div className="resume-skill-item">
        <h4 className="resume-skills-cat font-weight-bold">Frontend</h4>
        <ul className="list mb-4">{listItem(props.data.frontend)}</ul>
      </div>

      <div className="resume-skill-item">
        <h4 className="resume-skills-cat font-weight-bold">Backend</h4>
        <ul className="list">{listItem(props.data.backend)}</ul>
      </div>

      <div className="resume-skill-item">
        <h4 className="resume-skills-cat font-weight-bold">Others</h4>
        <ul className="list">{listItem(props.data.other)}</ul>
      </div>
    </>
  );
};

export default Skills;
