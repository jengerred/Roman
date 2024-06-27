import React from 'react';
import { useContext } from 'react';
import { CardsContext } from './CardsContext';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Video from './Video';


function CardLayout() {
  const { cards } = useContext(CardsContext);

  return (
    <div className="cards-container">
      {cards.map((card) => (
        <Card key={card.id} className="Cards">
          <Card.Title className="Card-title">{card.title}</Card.Title>
          <Video src={card.src} /> 
          <Card.Body>
            <Card.Text>{card.text}</Card.Text>
            <Button variant="primary">This button doesn't go anywhere yet!</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CardLayout;
