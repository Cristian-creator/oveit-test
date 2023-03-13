import { compareFunction } from "./compareFunction";
/**
 * Receives an array of tickets and returns the cheapest and the most expensive ticket price
 * @param {object} tickets 
 * @returns {object}
 */
export const getCheapestAndTheMostExpensiveTicketPrices = (tickets) => {
    const prices = tickets.map((ticket) => ticket.price).sort(compareFunction);
    return {
      cheapest: prices[0],
      theMostExpensive: prices[prices.length - 1],
    };
  };

