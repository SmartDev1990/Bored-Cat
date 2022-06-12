import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Hero = () => {
  return (
    <section className="section" background-color="#10083B" style={{marginTop: "30px", marginBottom: "30px"}}>
      <div className="container">
      <h3 className="feature-content2">OUR TEAM</h3>
        <div className="wrapper">
        <div className="wrapper-card">
        <img className="wrappericon1" src="/images/NFT8.png" />
        <p className="Team-content">  Ronald </p>
        <p className="Team-content3"> Founder </p>
        </div>
        <div className="wrapper-card">
        <img className="wrappericon1" src="/images/NFT2.png" />
        <p className="Team-content">  Ding </p>
        <p className="Team-content3"> Co-Founder </p>
        </div>
        <div className="wrapper-card">
        <img className="wrappericon1" src="/images/NFT6.png" />
        <p className="Team-content">  Coky </p>
        <p className="Team-content3"> Artist </p>
        </div>
        <div className="wrapper-card">
        <img className="wrappericon1" src="/images/NFT14.png" />
        <p className="Team-content">  Richard </p>
        <p className="Team-content3"> Artist </p>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Hero;
