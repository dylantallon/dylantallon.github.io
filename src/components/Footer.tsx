import React from "react";

const footerStyle: React.CSSProperties = {
  backgroundColor: "darkblue",
  height: "60px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderTopWidth: "5px",
  borderTopStyle: "solid",
  borderTopColor: "rgb(0, 0, 69)",
};

const Footer = () => {
  return (
    <footer style={footerStyle}>©2022 by Dylan Tallon. Made with React.</footer>
  );
};

export default Footer;
