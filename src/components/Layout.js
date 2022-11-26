const Layout = ({ children }) => {
  return (
    <article className="resume-wrapper text-center position-relative">
      <div className="resume-wrapper-inner mx-auto text-start bg-white shadow-lg">
        {children}
      </div>
    </article>
  );
};

export default Layout;
