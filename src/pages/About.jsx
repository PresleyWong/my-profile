import { useEffect } from "react";
import Data from "../data";

const About = (props) => {
  useEffect(() => {
    document.getElementById("section-title").innerHTML = "Summary";
  });

  return <p className="mb-0">{Data.about.description}</p>;
};

export default About;
