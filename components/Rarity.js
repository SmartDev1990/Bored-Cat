import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Hero = () => {
  return (
    <section className="section" background-color="#10083B" style={{marginTop: "100px", marginBottom: "100px"}} id="UniqueApe">
      <div className="container">
      <h3 className="feature-content2">ABOUT BORED CAT</h3>
      <div className="wrappercard2">
       <Row>
        <Col>
        <p className="subrarity-content"><font color="blue">Bored Cat</font> is a generation of cats that came and formed a population in the metverse world. <font color="blue">Bored Cat</font> is also a collection of 2D PFP NFTs built on the <font color="yellow">Binance Smart Chain</font> blockchain network.</p>
        </Col>
        </Row>
        </div>
      </div>
    </section>
  );
}

export default Hero;
