import React from 'react'
import { Button, Typography } from '@mui/material'
import { CalendarTodayOutlined, LocationOnOutlined, ShareOutlined, FavoriteBorder, ConfirmationNumberOutlined } from '@mui/icons-material';
import { EventCardBTicketsRange, EventCardBuyTickets, EventCardCategory, EventCardContainer, EventCardData, EventCardDate, EventCardImage, EventCardLocation, EventCardTitle, EventCardUserActions } from './EventCard.styles';
import { Link } from 'react-router-dom';

const EventCard = ({ id, image, category, title, date, location, cheapestTicket, theMostExpensiveTicket }) => {
  return (
    <EventCardContainer item xs={12} sm={6} md={3} lg={2}>
      <EventCardImage image={image} />
      <EventCardData>
        <EventCardCategory variant="body2"> {category} </EventCardCategory>
        <Link to={`/events/${id}`}>
          <EventCardTitle variant="h3"> {title} </EventCardTitle>
        </Link>
        <EventCardDate>
          <CalendarTodayOutlined />  
          <Typography variant="body1"> {date} </Typography>
        </EventCardDate>
        <EventCardLocation>
          <LocationOnOutlined/>
          <Typography variant="body1"> {location} </Typography>
        </EventCardLocation>
      </EventCardData>
      <EventCardUserActions>
        <Button>
          <ShareOutlined />
          <Typography variant="body1"> Share </Typography>
        </Button>
        <Button>
          <FavoriteBorder />
          <Typography variant="body1"> Like </Typography>
        </Button>
      </EventCardUserActions>
      <EventCardBuyTickets>
        <EventCardBTicketsRange>
          <ConfirmationNumberOutlined />
          {/* the content may be different based on the input. for example, if the data is formatted */}
          <Typography variant="subtitle2"> ${cheapestTicket} - ${theMostExpensiveTicket} </Typography>
        </EventCardBTicketsRange>
        <Link to={`/events/${id}/buy-tickets`}>
          <Button variant="contained" >
            <Typography variant="button"> Tickets </Typography>
          </Button>
        </Link>
      </EventCardBuyTickets>
    </EventCardContainer>
  )
}

export default EventCard