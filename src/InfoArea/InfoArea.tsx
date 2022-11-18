import {Col, Row} from "antd";
import ColleagueDetails from "../ColleagueDetails/ColleagueDetails";
import Legend from "../Legend/Legend";
import React from "react";
import './InfoArea.css';
import {colleague, createClass} from "../App";

interface InfoAreaProps {
    details: colleague;
    setDetails:  React.Dispatch<React.SetStateAction<colleague>>;
}

const InfoArea = ({details, setDetails}:InfoAreaProps) => {
    const getCommonArea = (id:string) => {
        createClass(`.blink${id} #${id}`,"animation: hideshow 2s ease infinite; -webkit-animation: hideshow 2s ease infinite;");
        setDetails({
            name: 'Name',
            position: 'Position',
            department:'Department',
            pictureUrl: '../pics/placeholder.png',
            location: 'Location',
            blinkingItem: `blink${id} #${id}`,
        });
    }

    return (
        <Row gutter={10} className={'info-area'}>
            <Col span={9} >
                <ColleagueDetails details={details} />
            </Col>
            <Col span={15}>
                <Legend getCommonArea={getCommonArea}/>
            </Col>
        </Row>
    )
}

export default InfoArea;