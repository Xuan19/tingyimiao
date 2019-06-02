import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col, Image, Button, Container } from 'react-bootstrap';
import'./Home.css';

export default class Home extends Component{
    render(){
        return(
          <Container>
              <Jumbotron>
                  <h2>停一秒</h2>
                  <p>请扫描二维码</p>
              </Jumbotron>
              <Link to="/about">
                  <Button bsStyle="primary">关于我们</Button>
              </Link>
          </Container>
        )
    }
}