import React, { useContext } from 'react'
import { CalendarTodayOutlined, ConfirmationNumberOutlined, FavoriteBorder, LocationOnOutlined, ShareOutlined } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import AboutVendor from '../components/about-vendor/AboutVendor';
import { SectionContainer, SectionTitle } from '../components/common/styled-components/StyledComponents.styles';
import { EventCardBTicketsRange } from '../components/events/EventCard.styles';
import { EventDetailsBottom, EventDetailsBuyTickets, EventDetailsContainer, EventDetailsDate, EventDetailsDescription, EventDetailsImage, EventDetailsInfo, EventDetailsInfoContainer, EventDetailsLocation, EventDetailsUserActions } from '../components/events/EventDetails.styles';
import { eventsContext } from '../context';

import presentationImage from '../images/event-details/presentation-image.png';
import { getCheapestAndTheMostExpensiveTicketPrices } from '../utils/getCheapestAndTheMostExpensiveTicketPrices';

const EventDetails = () => {
  const { eventId } = useParams();
  const eventsData = useContext(eventsContext);
  const { title, date, location, description, tickets } = eventsData.find((event) => event.id === Number(eventId));

  return (
    <>
    <SectionContainer>
        <SectionTitle variant="subtitle1"> Events </SectionTitle>
        <EventDetailsContainer>
          <EventDetailsImage image={presentationImage} />
          <EventDetailsInfoContainer>
            <EventDetailsInfo>
              <Typography variant="subtitle1"> {title} </Typography>
              <EventDetailsDate>
                <CalendarTodayOutlined />  
                <Typography variant="subtitle2"> {date} </Typography>
              </EventDetailsDate>
              <EventDetailsLocation>
                <LocationOnOutlined/>
                <Typography variant="subtitle2"> {location} </Typography>
              </EventDetailsLocation>
              <EventDetailsDescription variant="body1"> {description} </EventDetailsDescription>
            </EventDetailsInfo>
            <EventDetailsBottom>
              <EventDetailsBuyTickets>
                <Link to={`/events/${eventId}/buy-tickets`}>
                  <Button variant="contained" >
                    <Typography variant="body1"> Tickets </Typography>
                  </Button>
                </Link>
                <EventCardBTicketsRange>
                  <ConfirmationNumberOutlined />
                  {/* the content may be different based on the input. for example, if the data is formatted */}
                  <Typography variant="subtitle2"> ${getCheapestAndTheMostExpensiveTicketPrices(tickets).cheapest} - ${getCheapestAndTheMostExpensiveTicketPrices(tickets).theMostExpensive} </Typography>
                </EventCardBTicketsRange>
              </EventDetailsBuyTickets>
              <EventDetailsUserActions>
                <Button>
                  <ShareOutlined />
                  <Typography variant="body1"> Share </Typography>
                </Button>
                <Button>
                  <FavoriteBorder />
                  <Typography variant="body1"> Like </Typography>
                </Button>
              </EventDetailsUserActions>
            </EventDetailsBottom>
          </EventDetailsInfoContainer>
        </EventDetailsContainer>
    </SectionContainer>
    <AboutVendor />
    </>
  )
}

export default EventDetails;