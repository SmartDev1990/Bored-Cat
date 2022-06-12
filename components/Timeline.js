import React from 'react';
import { Row, Col, Button } from 'reactstrap';

const Hero = () => {
  return (
    <section className="section"  background-color="#10083B" style={{marginTop: "200px", marginBottom: "100px"}}>
    <div className="container">
    <h3 className="feature-content2">TIMELINE SCHEDULE</h3>
      <div className="timeline">
  <div className="container1 left">
    <div className="date"> Finish ✅ </div>
    <i className="icon fa fa-home"></i>
    <div className="content">
      <h2>Prepared of Project</h2>
      <p>
        IDEA<br />
        Prepared all item regarding NFT items.<br />
        Prepared Website, Discord and Twitter
      </p>
    </div>
  </div>
  <div className="container1 right">
    <div className="date">Finish ✅</div>
    <i className="icon fa fa-gift"></i>
    <div className="content">
      <h2>Generate NFT</h2>
      <p>
        Generate 10k NFT with tools <br />
        Upload Metadata and creating smart contract.
      </p>
    </div>
  </div>
  <div className="container1 left">
    <div className="date">Progress</div>
    <i className="icon fa fa-user"></i>
    <div className="content">
      <h2>Build Communiy</h2>
      <p>
        Build and targeted of 5k discord member and twitter.
      </p>
    </div>
  </div>
  <div className="container1 right">
    <div className="date">Progress</div>
    <i className="icon fa fa-running"></i>
    <div className="content">
      <h2>Opent Mint & Airdrop</h2>
      <p>
        Open Whitelist regarding free and paid minting.
      </p>
    </div>
  </div>
  <div className="container1 left">
    <div className="date">Progress</div>
    <i className="icon fa fa-cog"></i>
    <div className="content">
      <h2>Minting & Listing</h2>
      <p>
      Private-Sale open mint of 1.000 NFTs collection. <br />
      Airdrop for 100 NFTs <br />
      Open Public mint for 3.000 NFTs <br />
      Listing on ToFu and sent listing proposal to pancakeswap
      </p>
    </div>
  </div>
  <div className="container1 right">
    <div className="date">Progress</div>
    <i className="icon fa fa-certificate"></i>
    <div className="content">
      <h2>Investors Reward</h2>
      <p>
        Distribution unmint NFT to Bored Cat NFT holders.
      </p>
    </div>
  </div>
</div>
</div>
    </section>
  );
}

export default Hero;
