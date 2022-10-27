import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const NewCourses = ({course}) => {
    const {title, image_url,details,id, Price} = course;
    return (
        <div>
            
        <Card className='bg-light shadow-lg p-2 h-12' style={{ width: '18rem' }}>
        <Card.Img className='h-40' variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <p>Price: {Price}</p>
          <Card.Text className='text-justify'>{details.length>100? details.slice(0,100)+'...': details}</Card.Text>
           <div className='text-center'>
           <Link to={`/courses/${id}`}><Button className='px-5' variant="primary">Details</Button></Link>
           </div>
        </Card.Body>
      </Card>
        </div>
    );
};

export default NewCourses;