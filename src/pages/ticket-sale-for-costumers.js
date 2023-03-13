import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { SectionContainer, SectionLink } from '../components/common/styled-components/StyledComponents.styles';
import { eventsContext } from '../context';
import { West } from '@mui/icons-material';
import { Typography } from '@mui/material';
import TicketSalePanel from '../components/ticket-sale-panel/TicketSalePanel';

const TicketSaleForCostumers = () => {
  const { eventId } = useParams();
  const eventsData = useContext(eventsContext);
  const currentEvent = eventsData.find((event) => event.id === Number(eventId));

  return (
    <SectionContainer>
        <SectionLink to={`/events/${currentEvent.id}`}>
            <West/>
            <Typography variant='subtitle1'> {currentEvent.title} </Typography>
        </SectionLink>
        <TicketSalePanel event={currentEvent} />
    </SectionContainer>
  )
};

export default TicketSaleForCostumers;