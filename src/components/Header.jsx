import Data from "../data";

const Header = () => {
  const PhoneDetail = ({ phone }) => {
    if (phone !== "")
      return (
        <li>
          <a className="text-link" href="#">
            <i
              className="fas fa-mobile-alt fa-fw me-2"
              data-fa-transform="grow-6"
            ></i>
            {Data.about.phone}
          </a>
        </li>
      );
  };
  const mediaList = Data.about.socialMedia.map((item, index) => (
    <li key={index} className="mb-3">
      <a className="text-link" href={item.url} target="blank">
        <span className="fa-container text-center me-2">
          <i className={`fab fa-${item.name} fa-fw`}></i>
        </span>
      </a>
    </li>
  ));

  return (
    <header className="resume-header pt-4 pt-md-0">
      <div className="row">
        <div className="col-block col-md-auto resume-picture-holder text-center text-md-start">
          <img src={Data.about.imageUrl} className="picture" alt="profile" />
        </div>
        <div className="col">
          <div className="row p-4 justify-content-center justify-content-md-between">
            <div className="primary-info col-auto">
              <h1 className="name mt-0 mb-1 text-white text-uppercase text-uppercase">
                {Data.about.firstName} {Data.about.lastName}
              </h1>
              <div className="title mb-3">{Data.about.position}</div>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a
                    className="text-link"
                    href={`mailto:${Data.about.email}`}
                    target="blank"
                  >
                    <i
                      className="far fa-envelope fa-fw me-2"
                      data-fa-transform="grow-3"
                    ></i>
                    {Data.about.email}
                  </a>
                </li>

                <PhoneDetail phone={Data.about.phone} />
              </ul>
            </div>
            <div className="secondary-info col-auto mt-2">
              <ul className="resume-social list-unstyled">{mediaList}</ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
