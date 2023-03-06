import { useEffect } from "react";
import { TechnologiesTags } from "../pages/Experience";
import Data from "../data";

const Portfolio = () => {
  useEffect(() => {
    document.getElementById("section-title").innerHTML = "Portfolio";
  });

  return (
    <ul className="list">
      {Data.portfolio.map((item, index) => (
        <div className="row mb-4 border-bottom pb-2" key={index}>
          <div className="col-3">
            <a href={item.url} target="blank">
              <img
                alt={item.title}
                className="img-fluid shadow-1-strong rounded"
                src={item.thumbnail}
              />
            </a>
          </div>
          <div className="col-9">
            <p className="mb-2">
              <strong>{item.title}</strong>
            </p>

            <p className="mb-2">{item.description}</p>

            <p>
              <u>
                <a href={item.url} target="blank">
                  {item.url}
                </a>
              </u>
            </p>

            <div>
              <TechnologiesTags tags={item.techUsed} />
            </div>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default Portfolio;
