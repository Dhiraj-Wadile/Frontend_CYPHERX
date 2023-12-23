// MainSection.jsx
import React, { useEffect, useState } from 'react';
import ColumnSection from './ColumnSection';
import axios from "axios";
const MainSection = ({ groupBy, orderingBy }) => {
    // Parse the provided data into JavaScript objects
    
    const [tickets, setTickets] = useState([])
    const [users, setUsers] = useState([])
    useEffect(() => {

        did()

    }, [])

    async function did(params) {
        const data = await getData();
        setTickets(data.tickets)
        setUsers(data.users)
    }

    // Function to group tickets based on the selected option
    const groupTickets = () => {
        switch (groupBy) {
            case 'user':
                return tickets.reduce((grouped, ticket) => {
                    const user = users.find((u) => u.id === ticket.userId);
                    const groupName = user ? user.name : 'Unknown User';
                    grouped[groupName] = grouped[groupName] || [];
                    grouped[groupName].push(ticket);
                    return grouped;
                }, {});
            case 'status':
                return tickets.reduce((grouped, ticket) => {
                    grouped[ticket.status] = grouped[ticket.status] || [];
                    grouped[ticket.status].push(ticket);
                    return grouped;
                }, {});
            case 'priority':
                return tickets.reduce((grouped, ticket) => {
                    grouped[ticket.priority] = grouped[ticket.priority] || [];
                    grouped[ticket.priority].push(ticket);
                    return grouped;
                }, {});
            default:
                return { All: tickets };
        }
    };

    // Function to order tickets based on the selected option
    const orderTickets = (groupedTickets) => {
        const sortedTickets = Object.keys(groupedTickets).reduce(
            (ordered, group) => {
                ordered[group] = groupedTickets[group].sort((a, b) => {
                    if (orderingBy === 'title') {
                        return a.title.localeCompare(b.title);
                    } else if (orderingBy === 'priority') {
                        return a.priority - b.priority;
                    }
                    return 0;
                });
                return ordered;
            },
            {}
        );

        return sortedTickets;
    };

    // Get the grouped and ordered tickets
    const groupedTickets = groupTickets();
    const orderedTickets = orderTickets(groupedTickets);

    // Render ColumnSection components based on the grouped and ordered tickets
    return (
        <main className='h-auto w-full p-5 bg-gray-100'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full outline-1' style={{ minHeight: "84vh" }}>
                {Object.keys(orderedTickets).map((group) => (
                    <ColumnSection key={group} title={group} cards={orderedTickets[group]} />
                ))}
            </div>
        </main>

    );
};

export default MainSection;


async function getData() {
    try {
        const response = await axios.get(`https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers`);
        return response.data;
    } catch (error) {
        console.error("Error:", error);
    }
}