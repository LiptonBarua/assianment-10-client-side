import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Courses = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        fetch('http://localhost:4000/categories-list')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    }, [])
    return (
        <div>
           <Container>
            <Row>
                <Col>
                </Col>
                <Col>
                </Col>
            </Row>
           </Container>
        </div>
    );
};

export default Courses;