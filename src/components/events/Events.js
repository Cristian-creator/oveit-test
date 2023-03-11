import React from 'react'
import { SectionContainer, SectionTitle } from '../common/styled-components/StyledComponents.styles';
import { EventCardsContainer } from './EventCard.styles';
import { aFunctionWhichFormatsData } from '../../utils/aFunctionWhichFormatsData';
import EventCard from './EventCard';
// card images
import concert from '../../images/events/concert.png';
import theater from '../../images/events/theater.png';
import vipExperiences from '../../images/events/vip-experiences.png';
import workshopsAndClasses from '../../images/events/workshops-and-classes.png';

const Events = () => {
  const cardsData = [
    {
        image: concert,
        category: 'concert',
        title: 'San Francisco Music Hall of Fame Gallery',
        date: '15.07.21 at 6:00pm - 10:30pm',
        location: 'Virtual',
        cheapestTicket: 50,
        theMostExpensiveTicket: 100, 
    },
    {
        image: theater,
        category: 'theater',
        title: 'The Night Market',
        date: '21.09.21 at 6:00pm - 10:30pm',
        location: 'Virtual',
        cheapestTicket: 50,
        theMostExpensiveTicket: 100, 
    },
    {
        image: vipExperiences,
        category: 'vip experiences',
        title: 'Doga - Bay Area',
        date: '15.04.21 at 6:00pm - 10:30pm',
        location: 'Virtual',
        cheapestTicket: 150,
        theMostExpensiveTicket: 200, 
    },
    {
        image: workshopsAndClasses,
        category: 'workshops and classes',
        title: 'In-Shelter Volunteer Orientation at FDR',
        date: '15.07.21 at 6:00pm - 10:30pm',
        location: 'Virtual',
        cheapestTicket: 30,
        theMostExpensiveTicket: 200, 
    },
  ];

  return (
    <SectionContainer>
        <SectionTitle variant="subtitle1"> Events </SectionTitle>
        <EventCardsContainer container sx={{  }} >
          {cardsData.map(({ image, category, title, date, location, cheapestTicket, theMostExpensiveTicket }) => (
            <EventCard
              key={title}
              image={image}
              // using a formatting function for cases when 
              // we have a category named 'workshops-and-classes' or 'workshopsAndClasses' 
              category={aFunctionWhichFormatsData(category)}
              title={title}
              // using a function for displaying the desired date format 
              date={aFunctionWhichFormatsData(date)}
              // should format the location? is it received from the server 
              // in the way we want to be displayed? 
              location={location}
              // thousands separator? examples: 10 000 / 10,000 / 10K
              cheapestTicket={cheapestTicket}
              theMostExpensiveTicket={theMostExpensiveTicket }
            />
          ))}
        </EventCardsContainer>
    </SectionContainer>
  )
}

export default Events;