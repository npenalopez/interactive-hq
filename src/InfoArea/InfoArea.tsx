import {Col, Row} from "antd";
import ColleagueDetails from "../ColleagueDetails/ColleagueDetails";
import Legend from "../Legend/Legend";
import React from "react";
import './InfoArea.css';
import {colleague} from "../App";

interface InfoAreaProps {
    details: colleague;
    onCommonAreaChange:  (id:string) => void;
}

const InfoArea = ({details, onCommonAreaChange}:InfoAreaProps) => {
    return (
        <Row gutter={10} className={'info-area'}>
            <Col span={9} >
                <ColleagueDetails details={details} />
            </Col>
            <Col span={15}>
                <Legend onCommonAreaChange={onCommonAreaChange}/>
            </Col>
        </Row>
    )
}

export default InfoArea;