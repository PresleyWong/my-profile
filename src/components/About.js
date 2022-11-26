import { useEffect } from "react";

const About = (props) => {
  useEffect(() => {
    document.getElementById("section-title").innerHTML = "Summary";
  });

  return <p className="mb-0">{props.data.description}</p>;
};

export default About;
