import React, { } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pdf from 'react-to-pdf'

const ref = React.createRef()

const CardDetails = () => {

    const cardDetails = useLoaderData();
    const {title, image_url,details,courses_name} = cardDetails;
    console.log(cardDetails)
    return (
        <div className='d-flex justify-content-center my-5' ref={ref}>
        <Card className='bg-light shadow-lg p-2 h-12' style={{ width: '28rem', height: '35rem'}}>
        <Card.Img style={{ height: '18rem'}} className='h-40' variant="top" src={image_url} />
        <Card.Body className='mt-5'>
          <h1>{title}</h1>
          <Card.Text className='text-justify'>{details.length>100? details.slice(0,100)+'...': details}</Card.Text>
           <div className='text-center'>
           <Link to={`/categorie/${courses_name}`}><Button className='px-5 me-5' variant="primary">Details</Button></Link>
           <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <Button  onClick={toPdf} variant="danger">Download Pdf</Button> }
      </Pdf>
           </div>
         
        </Card.Body>
      </Card>
        </div>
    );
};

export default CardDetails;