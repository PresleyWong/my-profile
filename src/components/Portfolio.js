import { useEffect } from "react";
import { TechnologiesTags } from "./Experience";

const Portfolio = (props) => {
  useEffect(() => {
    document.getElementById("section-title").innerHTML = "Portfolio";
  });

  return (
    <ul className="list">
      {props.data.map((item, index) => (
        <div className="row mb-4 border-bottom pb-2" key={index}>
          <div className="col-3">
            <img
              alt="Hollywood Sign on The Hill"
              className="img-fluid shadow-1-strong rounded"
              src={item.thumbnail}
            />
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
              <TechnologiesTags tags={item.toolUsed} />
            </div>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default Portfolio;
