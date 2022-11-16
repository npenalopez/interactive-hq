import React from 'react';
import Meta from "antd/es/card/Meta";
import {Avatar, Badge, Card} from "antd";
import './ColleagueDetails.css';
import {colleague} from "../App";
import {AimOutlined} from "@ant-design/icons";

interface ColleagueDetailsProps {
    details: colleague;
}

const ColleagueDetails = ({details}:ColleagueDetailsProps) => {

    const DetailedInfo = () => {
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

    return (
        <Card size={'small'} title={'Colleague details'} className={'min-200'}>
            <Meta
                avatar={<Avatar src={details.pictureUrl}  className={'colleague-pic'}  />}
                title={details.name}
                description={<DetailedInfo />}
            />
        </Card>
    );

}

export default ColleagueDetails;