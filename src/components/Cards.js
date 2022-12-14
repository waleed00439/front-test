import Card from 'react-bootstrap/Card';

function MyCard(nickName,name,teamGame,url='#') {
    return (
      <Card style={{ width: '50rem', backgroundImage: 'url(./2.jpeg)', color:'white' }}>
        <Card.Body>
          <Card.Title>{nickName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{name}</Card.Subtitle>
          <Card.Text>teamGame : 
            {teamGame}
          </Card.Text>
          {/* <Card.Link href={url}>Click here!</Card.Link> to add link */}
        </Card.Body>
      </Card>
    );
  }
  export default MyCard;