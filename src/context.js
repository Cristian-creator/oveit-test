import { createContext } from 'react';

import concert from './images/events/concert.png';
import theater from './images/events/theater.png';
import vipExperiences from './images/events/vip-experiences.png';
import workshopsAndClasses from './images/events/workshops-and-classes.png';

export const eventsContext = createContext([
    {
        id: 9832,
        image: concert,
        category: 'concert',
        title: 'San Francisco Music Hall of Fame Gallery',
        date: '15.07.21 at 6:00pm - 10:30pm',
        location: 'Virtual',
        description: 'Here will be displayed the description of this event. Olutpat quis augue varius viverra mauris urna, imperdiet nunc. Turpis elementum et commodo scelerisque facilisi. Quis ullamcorper vulputate amet, dapibus pellentesque facilisis faucibus. Placerat etiam dolor felis blandit sed neque enim. At suspendisse vel at tincidunt eget accumsan sit semper sed. At in gravida faucibus ultricies. Massa cras ligula integer lacinia amet, pellentesque.',
        tickets: [
            {
                type: 'VIP area', // assuming we receive the type as we want to be displayed
                name: 'vip',
                salesEndDate: '30 Apr 2021',
                price: 100,
                fee: 2.85,
                availableTickets: 50,
                included: [
                    {
                        label: 'Burgers',
                        quantity: 2,
                    }
                ],
                addons: [
                    {
                        label: 'T-Shirt',
                        name: 'tShirt',
                        price: 20,
                        fee: 2.85,
                        available: 100,
                    },
                    {
                        label: 'Beer',
                        name: 'beer',
                        price: 3,
                        fee: 0.52,
                        available: 800,
                    }
                ]
            },
            {
                type: 'General Admision',
                name: 'general',
                salesEndDate: '30 Apr 2021',
                price: 50,
                fee: 2.85,
                availableTickets: 120,
            },
        ]
    },
    {
        id: 312,
        image: theater,
        category: 'theater',
        title: 'The Night Market',
        date: '21.09.21 at 6:00pm - 10:30pm',
        location: 'Virtual',
        description: 'Here will be displayed the description of this event. Olutpat quis augue varius viverra mauris urna, imperdiet nunc. Turpis elementum et commodo scelerisque facilisi. Quis ullamcorper vulputate amet, dapibus pellentesque facilisis faucibus. Placerat etiam dolor felis blandit sed neque enim. At suspendisse vel at tincidunt eget accumsan sit semper sed. At in gravida faucibus ultricies. Massa cras ligula integer lacinia amet, pellentesque.',
        tickets: [
            {
                type: 'VIP area',
                name: 'vip',
                salesEndDate: '30 Apr 2021',
                price: 100,
                fee: 2.85,
                availableTickets: 50,
                included: [
                    {
                        label: 'Burgers',
                        quantity: 2,
                    }
                ],
                addons: [
                    {
                        label: 'T-Shirt',
                        name: 'tShirt',
                        price: 20,
                        fee: 2.85,
                        available: 100,
                    },
                    {
                        label: 'Beer',
                        name: 'beer',
                        price: 3,
                        fee: 0.52,
                        available: 800,
                    }
                ]
            },
            {
                type: 'General Admision',
                name: 'general',
                salesEndDate: '30 Apr 2021',
                price: 50,
                fee: 2.85,
                availableTickets: 120,
            }
        ]
    },
    {
        id: 12932,
        image: vipExperiences,
        category: 'vip experiences',
        title: 'Doga - Bay Area',
        date: '15.04.21 at 6:00pm - 10:30pm',
        location: 'Virtual',
        description: 'Here will be displayed the description of this event. Olutpat quis augue varius viverra mauris urna, imperdiet nunc. Turpis elementum et commodo scelerisque facilisi. Quis ullamcorper vulputate amet, dapibus pellentesque facilisis faucibus. Placerat etiam dolor felis blandit sed neque enim. At suspendisse vel at tincidunt eget accumsan sit semper sed. At in gravida faucibus ultricies. Massa cras ligula integer lacinia amet, pellentesque.',
        tickets: [
            {
                type: 'VIP area',
                name: 'vip',
                salesEndDate: '30 Apr 2021',
                price: 200,
                fee: 2.85,
                availableTickets: 50,
                included: [
                    {
                        label: 'Burgers',
                        quantity: 2,
                    }
                ],
                addons: [
                    {
                        label: 'T-Shirt',
                        name: 'tShirt',
                        price: 20,
                        fee: 2.85,
                        available: 100,
                    },
                    {
                        label: 'Beer',
                        name: 'beer',
                        price: 3,
                        fee: 0.52,
                        available: 800,
                    }
                ]
            },
            {
                type: 'General Admision',
                name: 'general',
                salesEndDate: '30 Apr 2021',
                price: 150,
                fee: 2.85,
                availableTickets: 120,
            }
        ]
    },
    {
        id: 632,
        image: workshopsAndClasses,
        category: 'workshops and classes',
        title: 'In-Shelter Volunteer Orientation at FDR',
        date: '15.07.21 at 6:00pm - 10:30pm',
        location: 'Virtual',
        description: 'Here will be displayed the description of this event. Olutpat quis augue varius viverra mauris urna, imperdiet nunc. Turpis elementum et commodo scelerisque facilisi. Quis ullamcorper vulputate amet, dapibus pellentesque facilisis faucibus. Placerat etiam dolor felis blandit sed neque enim. At suspendisse vel at tincidunt eget accumsan sit semper sed. At in gravida faucibus ultricies. Massa cras ligula integer lacinia amet, pellentesque.',
        tickets: [
            {
                type: 'VIP area',
                name: 'vip',
                salesEndDate: '30 Apr 2021',
                price: 200,
                fee: 2.85,
                availableTickets: 50,
                included: [
                    {
                        label: 'Burgers',
                        quantity: 2,
                    }
                ],
                addons: [
                    {
                        label: 'T-Shirt',
                        name: 'tShirt',
                        price: 20,
                        fee: 2.85,
                        available: 100,
                    },
                    {
                        label: 'Beer',
                        name: 'beer',
                        price: 3,
                        fee: 0.52,
                        available: 800,
                    }
                ]
            },
            {
                type: 'General Admision',
                name: 'general',
                salesEndDate: '30 Apr 2021',
                price: 30,
                fee: 2.85,
                availableTickets: 120,
            }
        ]
    },
]);
