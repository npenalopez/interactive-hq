import React from 'react';
import Meta from "antd/es/card/Meta";
import {Avatar, Card} from "antd";
import './ColleagueDetails.css';
import {colleague} from "../App";
import DetailedInfo from "./DetailedInfo";

export interface ColleagueDetailsProps {
    details: colleague;
}

const ColleagueDetails = ({details}:ColleagueDetailsProps) => {
    return (
        <Card size={'small'} title={'Colleague details'} className={'min-200'}>
            <Meta
                avatar={<Avatar src={process.env.PUBLIC_URL+details.pictureUrl}  className={'colleague-pic'}  />}
                title={details.name}
                description={<DetailedInfo details={details} />}
            />
        </Card>
    );
}

export default ColleagueDetails;