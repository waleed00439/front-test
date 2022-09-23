import Card from 'react-bootstrap/Card';

function MyCard(name,details,registerLink ,url='#') {
    return (
      <Card style={{ width: '18rem', backgroundImage: 'url(./2.jpeg)', color:'white' }}>
        <Card.Body>
          <Card.Title>{details}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{name}</Card.Subtitle>
          <Card.Text>Register Link : 
            {}
          </Card.Text>
         <Card.Link href={url}>{registerLink}</Card.Link>
        </Card.Body>
      </Card>
    );
  }
  export default MyCard;