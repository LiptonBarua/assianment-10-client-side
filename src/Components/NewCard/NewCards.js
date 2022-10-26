import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const NewCards = ({card}) => {
     
    return (
        <Card className='bg-light shadow-lg p-2' style={{ width: '18rem' }}>
        <Card.Img className='h-40' variant="top" src={card.image_url} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text className='text-justify'>{card.details.length>100? card.details.slice(0,100)+'...': card.details}</Card.Text>
           <div className='text-center'>
           <Button className='px-5' variant="primary">Details</Button>
           </div>
        </Card.Body>
      </Card>
    );
};

export default NewCards;