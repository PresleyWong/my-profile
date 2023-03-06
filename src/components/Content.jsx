const Content = ({ children }) => {
  return (
    <div className="resume-body p-5">
      <main>
        <section className="resume-section mb-5">
          <h2
            className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3"
            id="section-title"
          >
            {" "}
          </h2>

          <div className="resume-section-content">{children}</div>
        </section>
      </main>
    </div>
  );
};

export default Content;
