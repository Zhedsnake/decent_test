import React from 'react';
import { Link } from "react-router-dom";
import {StuffData} from "../../types/countriesData/countriesData.ts";

interface StaffProps {
  staff: StuffData,
}

const StaffListItem: React.FC<StaffProps> = ({ staff }) => {
  return (
    <li className="app__user-list-item user-list-item">
        <Link to={`stuff/${staff.id}`}>
          <div className="user-list-item__container">
            <div className="user-list-item__image-container">
              <img className="user-list-item__image" src={staff.avatar} alt={`${staff.first_name} ${staff.last_name}`} />
            </div>
            <h3 className="user-list-item__name">
              {staff.first_name} {staff.last_name}
            </h3>
          </div>
      </Link>
    </li>
  );
};

export default StaffListItem;
