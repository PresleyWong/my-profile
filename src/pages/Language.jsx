import { useEffect } from "react";
import Data from "../data";

const Language = () => {
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
      {Data.language.map((item, index) => (
        <li key={index} className="mb-2">
          <span className="resume-lang-name font-weight-bold">{item.name}</span>{" "}
          <Proficiency proficiency={item.proficiency} />
        </li>
      ))}
    </ul>
  );
};

export default Language;
