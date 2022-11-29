import {Badge} from "antd";
import {AimOutlined} from "@ant-design/icons";
import React from "react";
import {ColleagueDetailsProps} from "./ColleagueDetails";


const DetailedInfo = ({details}:ColleagueDetailsProps) => {
    return (
        <>
            <div>
                <Badge count={details.position} style={{ backgroundColor: 'rgba(220,0,27,1)', marginRight:'5px' }}/>
                <Badge count={details.department} style={{ backgroundColor: '#000000' }} />
            </div>
            <div style={{marginTop:'15px'}}>
                <span className={'location-text'}><AimOutlined /> {details.location}</span>
            </div>
        </>
    );
}

export default  DetailedInfo;