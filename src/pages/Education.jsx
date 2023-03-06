import { useEffect } from "react";
import Data from "../data";

const Education = () => {
  useEffect(() => {
    document.getElementById("section-title").innerHTML = "Education";
  });

  return (
    <ul className="list-unstyled">
      {Data.education.map((item, index) => (
        <li key={index} className="mb-2">
          <div className="resume-degree font-weight-bold">{item.course}</div>
          <div className="resume-degree-org">{item.universityName}</div>
          <div className="resume-degree-time">{item.time}</div>
        </li>
      ))}
    </ul>
  );
};

export default Education;
