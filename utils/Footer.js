import React from 'react';
const Footer = () => (

  <footer className="footer" style={{ marginTop: '2rem', color: 'black', fontFamily: "Archivo" }}>
      ©
    {' '}
    {new Date().getFullYear()}
    , Reactime
    {' '}
  </footer>
);
export default Footer;
