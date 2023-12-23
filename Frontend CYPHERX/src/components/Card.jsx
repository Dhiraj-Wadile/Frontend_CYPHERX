import React from 'react';
import { FaCircle, FaFlag, FaEllipsisV,FaRegCircle  } from 'react-icons/fa';
import { GiNetworkBars } from "react-icons/gi";

const Card = ({ data }) => {
 
  return (
    <div className="ticket-main bg-white rounded shadow p-4 mb-1">
      <div className="top-line mb-1">
        <span>{data.id}</span>
      </div>
      <div className="middle-line mb-1 flex items-start">
        <div className="m-1 mr-4">
          <FaRegCircle  className="text-gray-500" />
        </div>
        <p className="overflow-hidden text-ellipsis-2">{data.title}</p>
      </div>
      <div className="bottom-line flex items-center ">
        <div className="icon-wrapper border border-gray-500 rounded">
          <GiNetworkBars className="text-gray-500 m-1" />
        </div>
        <div className="tag-wrapper flex items-center m-1">
        {data.tag.map((tag) => (
                    <div className="tag border text-sm border-gray-500 rounded p-0.5 flex items-center">
                    <FaCircle className="text-gray-500 mr-2 text-xs" />
                    <span>{tag}</span>
                  </div>
                ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
