import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const NewCards = ({card}) => {
     
    return (
        <Card className='bg-light shadow-lg' style={{ width: '18rem' }}>
        <Card.Img className='h-45' variant="top" src={card.image_url} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text className='text-justify'>{card.details}</Card.Text>
          <Button variant="primary">Details</Button>
        </Card.Body>
      </Card>
    );
};

export default NewCards;