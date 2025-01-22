import React from "react";

function Footer() {
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/MBrassey",
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/mbrassey/",
    },
    {
      name: "far fa-envelope",
      link: "mailto:matt@brassey.io",
    },
    {
      name: "fas fa-file-alt",
      link: "https://docs.google.com/document/d/1T7uHv2RcH_wzERwJKoahqh9ODKdaJ48ci40nKEBViNY/",
    },
  ];

  return (
    <footer className="footer">
      {icons.map((icon) => (
        <a
          href={icon.link}
          key={icon.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={icon.name}></i>
        </a>
      ))}
    </footer>
  );
}

export default Footer;