import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <article className="resume-wrapper text-center position-relative">
      <div className="resume-wrapper-inner mx-auto text-start bg-white shadow-lg">
        <Header />
        <Navbar />
        <Content> {children}</Content>
      </div>
    </article>
  );
};

export default Layout;
