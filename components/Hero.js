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
          BORED CAT
          </h3>
            </div>
            <div className="title mb-5">
              <h3 className="subfeature-content navtext">
                The Main NFT in <font color="yellow" font-style= "bold" size="40px" href="https://ricenft.store" >Rice Store</font> Platform,
                Build on <font color="blue" font-style= "bold" size="40px" >Bitgert Chain</font> network
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
