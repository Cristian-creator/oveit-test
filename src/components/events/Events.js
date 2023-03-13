import React, { useContext } from 'react'
import { SectionContainer, SectionTitle } from '../common/styled-components/StyledComponents.styles';
import { EventCardsContainer } from './EventCard.styles';
import { aFunctionWhichFormatsData } from '../../utils/aFunctionWhichFormatsData';
import EventCard from './EventCard';
import { eventsContext } from '../../context';
import { getCheapestAndTheMostExpensiveTicketPrices } from '../../utils/getCheapestAndTheMostExpensiveTicketPrices';

const Events = () => {
  const eventsData = useContext(eventsContext);

  return (
    <SectionContainer>
        <SectionTitle variant="subtitle1"> Events </SectionTitle>
        <EventCardsContainer container>
          {eventsData.map(({ id, image, category, title, date, location, tickets }) => (
            <EventCard
              key={id}
              id={id}
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
              cheapestTicket={getCheapestAndTheMostExpensiveTicketPrices(tickets).cheapest}
              theMostExpensiveTicket={getCheapestAndTheMostExpensiveTicketPrices(tickets).theMostExpensive}
            />
          ))}
        </EventCardsContainer>
    </SectionContainer>
  )
}

export default Events;