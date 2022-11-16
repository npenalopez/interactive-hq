import {Col, Row} from "antd";
import ColleagueDetails from "../ColleagueDetails/ColleagueDetails";
import Legend from "../Legend/Legend";
import React from "react";
import './InfoArea.css';
import {colleague} from "../App";

interface InfoAreaProps {
    details: colleague;
    setDetails:  React.Dispatch<React.SetStateAction<colleague>>;
    highlight: (id:string)=> void;
}
const InfoArea = ({details, setDetails, highlight}:InfoAreaProps) => {

    const resetColleagueDetails = () => {
        setDetails({
            name: 'Name',
            position: 'Position',
            department:'Department',
            pictureUrl: '../pics/placeholder.png',
            location: 'Location',
        })
    }

    const getCommonArea = (id:string) => {
        highlight(id);
        resetColleagueDetails();
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