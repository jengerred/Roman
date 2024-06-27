import React from 'react';
import { createContext, useState } from 'react';


const CardsContext = createContext();

const CardsProvider = function ({ children })  {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: 'Animation #1',
      text: 'Roman\'s first animation on this webpage.',
    src: '/Animation1.mp4'
    },
    {
        id: 2,
        title: 'Animation #2',
        text: 'Roman\'s second animation on this webpage.',
    src: '/Animation2.mp4'
      },
      {
        id: 3,
        title: 'Animation #3',
        text: 'Roman\'s third animation on this webpage.',
src: '/Animation3.mp4'
      },
      {
          id: 4,
          title: 'Animation #4',
          text: 'Roman\'s fourth animation on this webpage.',
      src: '/Animation4.mp4'
        },
        {
            id: 5,
            title: 'Animation #5',
            text: 'Roman\'s fifth animation on this webpage.',
        src: '/Animation5.mp4'
          },
          {
            id: 6,
            title: 'Animation #6',
            text: 'Roman\'s sixth animation on this webpage.',
        src: '/Animation6.mp4'
          },
          {
            id: 7,
            title: 'Animation #7',
            text: 'Roman\'s seventh animation on this webpage.',
        src: '/Animation7.mp4'
          },
          {
            id: 8,
            title: 'Animation #8',
            text: 'Roman\'s eigth animation on this webpage.',
        src: '/Animation8.mp4'
          },
          {
            id: 9,
            title: 'Animation #9',
            text: 'Roman\'s ninth animation on this webpage.',
        src: '/Animation9.mp4'
          },
    // Add more cards here...
  ]);

  return (
    <CardsContext.Provider value={{ cards, setCards }}>
      {children}
    </CardsContext.Provider>
  );
};

export { CardsProvider, CardsContext };