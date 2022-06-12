import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Hero = () => {
  return (
    <section className="section" background-color="#10083B" style={{marginTop: "100px", marginBottom: "100px"}} id="UniqueApe">
      <div className="container">
      <h3 className="feature-content2">10.000 Random Items</h3>
        <div className="wrapper">
          <img className="wrappericon" src="/images/NFT1.png" />
             <img className="wrappericon" src="/images/NFT2.png" />
             <img className="wrappericon" src="/images/NFT3.png" />
           <img className="wrappericon" src="/images/NFT4.png" />
           <img className="wrappericon" src="/images/NFT5.png" />
              <img className="wrappericon" src="/images/NFT6.png" />
              <img className="wrappericon" src="/images/NFT7.png" />
            <img className="wrappericon" src="/images/NFT8.png" />
        </div>
        <div className="wrapper">
          <img className="wrappericon" src="/images/NFT9.png" />
             <img className="wrappericon" src="/images/NFT10.png" />
             <img className="wrappericon" src="/images/NFT11.png" />
           <img className="wrappericon" src="/images/NFT12.png" />
           <img className="wrappericon" src="/images/NFT13.png" />
              <img className="wrappericon" src="/images/NFT14.png" />
              <img className="wrappericon" src="/images/NFT15.png" />
            <img className="wrappericon" src="/images/NFT16.png" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
