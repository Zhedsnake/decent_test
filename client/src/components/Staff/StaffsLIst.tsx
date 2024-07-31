import React from 'react';
import StaffListItem from "./StaffListItem";
import {StuffData} from "../../types/countriesData/countriesData.ts";

interface StaffsLIstProps {
    staffs: StuffData[],
}

const StaffsLIst: React.FC<StaffsLIstProps> = ({staffs}) => {
    return (
        <div className="app__users">
            <div className="app__users-container">
                <ul className="app__users-list">
                    {staffs.map((staff) => (
                        staff && <StaffListItem key={staff.id} staff={staff} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default StaffsLIst;