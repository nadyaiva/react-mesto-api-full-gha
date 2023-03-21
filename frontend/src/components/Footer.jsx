import React from "react";

function Footer() {
  const curentYear = new Date().getFullYear()

  return (
    <footer className="container footer">
      <p className="footer__copyright">&copy; {curentYear} Mesto Russia</p>
    </footer>
  );
}

export default Footer;
