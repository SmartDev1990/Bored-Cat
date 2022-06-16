import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Hero = () => {
  return (
    <section className="section" background-color="#10083B" style={{marginTop: "100px", marginBottom: "100px"}} id="UniqueApe">
      <div className="container">
      <h3 className="feature-content2">Listing Target</h3>
        <div className="listingwrapper">
          <img className="wrappericon" src="/images/listing1.svg" />
             <img className="wrappericon" src="/images/listing2.png" />
             <img className="wrappericon" src="/images/listing3.png" />
             <img className="wrappericon" src="/images/listing4.svg" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
