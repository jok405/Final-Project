import React from 'react';
const NavLink = require('react-router-dom').NavLink;

import './HomePage.css';

import { EdgeHeader, FreeBird, Container, Col, Row, CardBody, Fa } from 'mdbreact';

class HomePage extends React.Component {
  render(){
    return(
      <div>
        <EdgeHeader color="indigo darken-3" />
        <FreeBird>
          <Row>
            <Col md="10" className="mx-auto float-none white z-depth-1 py-2 px-2">
              <CardBody>
                <h2 className="h2-responsive"><strong>Music App</strong></h2>
                <p className="pb-4">Reactified Music App!</p>
              </CardBody>
            </Col>
          </Row>
        </FreeBird>
        <Container>
          <Row>
            <Col md="10" className="mx-auto mt-4">
              <p className="text-center">A music media player visually appealing and more user-friendly.</p>
              <p className="text-center">Harnessing the youtube api to support your musical taste in a responsive and dynamic way.</p>
              <p className="text-center">We present you a framework containing the best features of bootstrap woven with react - please enjoy.</p>
              <hr/>
              <h3 className="text-center mb-3">See it in action!</h3>
              <Row>
                <Col md="4" className="text-center home-feature-box">
                  <NavLink to="/css">
                    <Fa icon="css3" className="pink-text" />
                    <span>Profile</span>
                  </NavLink>
                </Col>
                <Col md="4" className="text-center home-feature-box">
                  <NavLink to="/components">
                    <Fa icon="fab fa-youtube" className="red-text" />
                    <span>Youtube Music Search</span>
                  </NavLink>
                </Col>
                <Col md="4" className="text-center home-feature-box">
                  <NavLink to="/javascript">
                    <Fa icon="fas fa-bookmark" className="green-text" />
                    <span>Bookmarked Library</span>
                  </NavLink>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomePage;
