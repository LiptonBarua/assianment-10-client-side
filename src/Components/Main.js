import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Categorie from './Categorie/Categorie';
import Header from './Header/Header';



const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={8} sm={12}>
                      <Outlet></Outlet>
                    </Col>
                    <Col lg={4} sm={12}>
                      <Categorie></Categorie>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;