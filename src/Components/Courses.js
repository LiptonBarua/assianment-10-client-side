import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                <Col lg={8}>
                 
                </Col>
                <Col lg={4}>
                <h3>Courses: {categories.length}</h3>
                    {
                        categories.map(categorie=><p key={categorie.id}>
                            <Link>{categorie.courses_name}</Link>
                        </p>)
                    }
                </Col>
            </Row>
           </Container>
        </div>
    );
};

export default Courses;