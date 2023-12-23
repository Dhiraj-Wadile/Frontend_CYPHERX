import React from "react";
import { FaUser, FaPlus, FaEllipsisH } from 'react-icons/fa';
import Card from "./Card";

export default function ColumnSection({title, cards}) {
    return (
        <div>
            <div class="grouping-section-main">
                <div class="container-main">
                    <div className="flex justify-between items-center  p-2">
                        {/* Left Side: Profile Icon and User Name */}
                        <div className="flex items-center">
                            <div className="bg-blue-500 rounded-full h-4 w-4 flex items-center justify-center mr-2">
                                <span className="text-white text-xs" style={{ fontSize: '10px' }}>A</span>
                            </div>
                            <span className="text mr-2">{title}</span>
                            <span className="text-gray-500"> {cards.length}</span>
                        </div>

                        {/* Right Side: Add Icon and Three-Dot Icon */}
                        <div className="flex items-center">
                            <FaPlus className="text-xs mr-4 cursor-pointer" />
                            <FaEllipsisH className="text-xs cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div class="ticket-container">
                {cards.map((card) => (
                   <Card
                   data = {card}
               />
                ))}
                

                </div>
            </div>
        </div>
    );
}
