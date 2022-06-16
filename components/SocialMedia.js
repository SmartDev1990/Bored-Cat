import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const Hero = () => {
  return (
    <section  background-color="#10083B" style={{marginTop: "100px", marginBottom: "100px"}}>
      <div className="container">
        <div className="wrapper">
        <Button className="SocialMedia">
          RICE WEBSITE
        </Button>
        <Button className="SocialMedia">
          SWAP RICE
        </Button>
        <Button className="SocialMedia">
          RICE STORE
        </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
