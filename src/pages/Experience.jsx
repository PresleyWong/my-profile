import { useEffect } from "react";
import Data from "../data";

export const TechnologiesTags = ({ tags }) => {
  const tagsList = tags.map((item, index) => (
    <li key={index} className="list-inline-item">
      <span className="badge bg-secondary badge-pill">{item}</span>
    </li>
  ));

  if (tags.length > 0)
    return (
      <>
        <h4 className="resume-timeline-item-desc-heading font-weight-bold">
          Technologies used:
        </h4>
        {tagsList}
      </>
    );
};

const Experience = () => {
  useEffect(() => {
    document.getElementById("section-title").innerHTML = "Experience";
  });

  const descriptionList = (data) =>
    data.map((item, index) => <li key={index}>{item}</li>);

  const experienceList = Data.experience.map((exp, i) => {
    return (
      <article key={i} className="resume-timeline-item position-relative pb-5">
        <div className="resume-timeline-item-header mb-2">
          <div className="d-flex flex-column flex-md-row">
            <h3 className="resume-position-title font-weight-bold mb-1">
              {exp.position}
            </h3>
            <div className="resume-company-name ms-auto">{exp.companyName}</div>
          </div>
          <div className="resume-position-time">{exp.time}</div>
        </div>
        <div className="resume-timeline-item-desc">
          <h4 className="resume-timeline-item-desc-heading font-weight-bold">
            Description:
          </h4>
          <ul>{descriptionList(exp.responsibility)}</ul>

          {exp.achievement.length >= 1 && (
            <>
              <h4 className="resume-timeline-item-desc-heading font-weight-bold">
                Achievement:
              </h4>
              <p>{exp.achievement}</p>
            </>
          )}

          <ul className="list-inline">
            <TechnologiesTags tags={exp.techUsed} />
          </ul>
        </div>
      </article>
    );
  });

  return (
    <div className="resume-timeline position-relative">{experienceList}</div>
  );
};

export default Experience;
