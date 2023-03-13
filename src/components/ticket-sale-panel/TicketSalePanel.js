import { CalendarTodayOutlined, LocationOnOutlined, InfoOutlined, CheckCircle } from '@mui/icons-material';
import { MenuItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import { EventCardDate, EventCardLocation } from '../events/EventCard.styles';
import { TicketSaleAddons, TicketSaleAddonsHeader, TicketSaleAddonsHeaderTitle, TicketSaleAddonsIncluded, TicketSaleAddonsIncludedLabel, TicketSaleAddonsRows, TicketSaleContainer, TicketSaleEndDate, TicketSaleFee, TicketSalePanelContainer, TicketSalePriceContainer, TicketSaleRow, TicketSaleSelect, TicketSaleTotal, TicketSaleTotalRow, TSPContent, TSPHeader, TSPHeaderInfo, TSPTitle } from './TicketSalePanel.styles';
import { v4 as uuidv4 } from 'uuid';

const TicketSalePanel = ({ event }) => {
  const { title, date, location, tickets } = event;
  const [order, setOrder] = useState([]);
  const updateOrder = (event) => {
    const { name } = event.target;
    const ticketInOrder = order.filter((ticket) => ticket.name === name);

    if(ticketInOrder.length) {
        const newOrder = order.filter((ticket) => ticket.name !== name);
        setOrder([...newOrder, event.target]);
    } else {
        setOrder([...order, event.target]);
    }
  };

  const getSelectedQuantity = (name) => order.find((ticket) => ticket.name === name)?.value || 0;

  const getPriceOfOrderElement = (value, name) => {
    const productIsTicket = tickets.find((ticket) => ticket.name === name);
    const productIsAddon = tickets.map((ticket) => ticket.addons?.find((addon) => addon.name === name));

    if(productIsTicket?.price) {
        return productIsTicket?.price  * value;
    }

    return productIsAddon[0]?.price * value;
  }; 

  return (
    <TicketSalePanelContainer>
        <TSPHeader>
            <TSPHeaderInfo>
                <EventCardDate>
                    <CalendarTodayOutlined />  
                    <Typography variant="body1"> {date} </Typography>
                </EventCardDate>
                <EventCardLocation>
                    <LocationOnOutlined/>
                    <Typography variant="body1"> {location} </Typography>
                </EventCardLocation>
            </TSPHeaderInfo>
            <TSPTitle variant="h2"> {title} </TSPTitle>
        </TSPHeader>
        <TSPContent>
            {
                tickets.map(({type, name, salesEndDate, price, fee, availableTickets, included, addons}) => (
                    <TicketSaleRow key={type}>
                        <TicketSaleContainer>
                            <Box>
                                <Typography variant='subtitle2'> {type} </Typography>
                                <TicketSaleEndDate variant='body2'> {salesEndDate} </TicketSaleEndDate>
                            </Box>
                            <TicketSalePriceContainer>
                                {/* should use some format */}
                                <Typography variant='body1'> ${price} </Typography>
                                <TicketSaleFee variant='body2'> +${fee} Fee </TicketSaleFee>
                            </TicketSalePriceContainer>
                            <TicketSaleSelect data-tid="sale-select" name={name} value={getSelectedQuantity(name)} onChange={updateOrder}>
                                {
                                    Array.from(Array(availableTickets + 1), (_, index) => index).map((number) => (
                                        <MenuItem data-tid="sale-select" key={uuidv4()} value={number}> {number} </MenuItem>
                                    ))
                                }
                            </TicketSaleSelect>
                        </TicketSaleContainer>
                        {addons?.length > 0 && (
                                <TicketSaleAddons>
                                    <TicketSaleAddonsHeader>
                                        <TicketSaleAddonsHeaderTitle>
                                            <Typography variant='h3'> Addons </Typography>
                                            <InfoOutlined />
                                        </TicketSaleAddonsHeaderTitle>
                                            {included?.length > 0 && included.map(({ label, quantity }) => (
                                                <TicketSaleAddonsIncluded key={label}>
                                                    <CheckCircle />
                                                    <Typography variant="body1"> {quantity} {label} </Typography>
                                                    <TicketSaleAddonsIncludedLabel variant="body2"> included </TicketSaleAddonsIncludedLabel>
                                                </TicketSaleAddonsIncluded>
                                            ))}
                                    </TicketSaleAddonsHeader>
                                    <TicketSaleAddonsRows>
                                        {addons.map(({ label, name, price, fee, available }) => (
                                            <TicketSaleContainer key={name}>
                                                <Typography variant='body1'> {label} </Typography>
                                                <TicketSalePriceContainer>
                                                    {/* should use some format */}
                                                    <Typography variant='body1'> ${price} </Typography>
                                                    <TicketSaleFee variant='body2'> +${fee} Fee </TicketSaleFee>
                                                </TicketSalePriceContainer>
                                                <TicketSaleSelect name={name} value={getSelectedQuantity(name)} onChange={updateOrder}>
                                                    {
                                                        Array.from(Array(available + 1), (_, index) => index).map((number) => (
                                                            <MenuItem key={uuidv4()} value={number}> {number} </MenuItem>
                                                        ))
                                                    }
                                                </TicketSaleSelect>
                                            </TicketSaleContainer>
                                        ))}
                                    </TicketSaleAddonsRows>
                                </TicketSaleAddons>
                            )}
                    </TicketSaleRow>
                ))
            }
        </TSPContent>
        {order.length > 0 && (
            <TicketSaleTotal>
                {order.map(({value, name}) => (
                    <TicketSaleTotalRow key={name}>
                        <Typography variant="body1"> {value} x {name} </Typography>
                        <Typography variant="body1"> ${getPriceOfOrderElement(value, name)} </Typography>
                    </TicketSaleTotalRow>
                ))}
            </TicketSaleTotal>
        )}
    </TicketSalePanelContainer>
  )
}

export default TicketSalePanel