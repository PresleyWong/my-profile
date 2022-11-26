import { useEffect } from "react";

const Language = (props) => {
  useEffect(() => {
    document.getElementById("section-title").innerHTML = "Language";
  });

  const Proficiency = ({ proficiency }) => {
    if (proficiency !== "")
      return (
        <small className="text-muted font-weight-normal">({proficiency})</small>
      );
  };

  return (
    <ul className="list-unstyled resume-lang-list">
      {props.data.map((item, index) => (
        <li key={index} className="mb-2">
          <span className="resume-lang-name font-weight-bold">{item.name}</span>{" "}
          <Proficiency proficiency={item.proficiency} />
        </li>
      ))}
    </ul>
  );
};

export default Language;
