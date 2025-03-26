// const Footer = () => <div className="footer">This is Footer</div>;

// export default Footer;

const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Copyright &copy; {currYear}, Made with 💗 by <strong>Rathore</strong>
      </p>
    </footer>
  );
};
export default Footer;