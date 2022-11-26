import { useEffect } from "react";

const Education = (props) => {
  useEffect(() => {
    document.getElementById("section-title").innerHTML = "Education";
  });

  return (
    <ul className="list-unstyled">
      {props.data.map((item, index) => (
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
