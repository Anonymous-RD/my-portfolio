import React from "react";

const Footer = () => {
  var social_networks = [
    {
      name: "github",
      class: "fab fa-github",
      url: "https://github.com/Anonymous-RD",
    },
    {
      name: "linkedin",
      class: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/rohit-haldar-7b277518b/",
    },
    {
      name: "instagram",
      class: "fab fa-instagram",
      url: "https://instagram.com/@itachii_i",
    },
    {
      name: "facebook",
      class: "fab fa-facebook",
      url: "https://www.facebook.com/Rohit.haldar.143",
    },
    {
      name: "twitter",
      class: "fab fa-twitter",
      url: "https://twitter.com/@rohithaldar22",
    },
  ];
  const networks = social_networks.map(function (network) {
    return (
      <span key={network.name} className="m-4">
        <a href={network.url} target="_blank" rel="noopener noreferrer">
          <i className={network.class}></i>
        </a>
      </span>
    );
  });
  return (
    <footer>
      <div className="col-md-12">
        <div className="social-links">{networks}</div>

        <div className="copyright py-4 text-center">
          <div className="container">
            <small>Copyright &copy; Rohit</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
