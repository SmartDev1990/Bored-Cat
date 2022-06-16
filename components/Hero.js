import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from "reactstrap";
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';

const mapStateToProps = state => ({ ...state })

// const mapDispatchToProps = dispatch => ({
//   setTotalSupply: totalSupply => dispatch(setTotalSupply(totalSupply))
// })

const Feature = (props) => {
return (
    <div className="block" style={{paddingTop: "100px", paddingButtom: "100px"}}>
      <div className="container">
          <div className="feature-header">
          <h3 className="feature-content">
            🐈‍⬛ BORED CAT 🐈‍⬛
          </h3>
            </div>
            <div className="title mb-5">
              <h3 className="subfeature-content navtext">
                10.000 Unique <font color="blue" weight= "bold" size="40px" >Bored Cat</font> NFT <br />
                Build on <font color="yellow" font-style= "bold" size="40px" >Binance Smart Chain</font> network
              </h3>
                <Col className="feature-btn-group">
                <a
                  href="#"
                  className="btn2"
                  >MINT BORED CATs</a
                >
                  </Col>
            </div>
        </div>
    </div>
  );
}

export default connect(mapStateToProps, null)(Feature);
