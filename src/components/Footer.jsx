const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <footer className="footer text-center pt-2 pb-5">
      <small className="copyright">© {year}</small>
    </footer>
  );
};

export default Footer;
