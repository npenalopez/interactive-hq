import React from 'react';
import {Card, Col, Row, Tag} from "antd";
import './Legend.css';
import rooms from "../../data/rooms.json";

interface LegendProps {
    onCommonAreaChange: (id:string) => void;
}

const Legend = ({onCommonAreaChange}:LegendProps) => {
    const renderRooms = (roomType:string) => {
        return rooms
            .filter(({type}) => type === roomType)
            .map(({cssClass, pathId, name})=>
                <Col>
                    <Tag
                        className={`legend-item ${cssClass}`}
                        onClick={() => onCommonAreaChange(`${pathId}`)}
                    >
                        {name}
                    </Tag>
                </Col>
            )
    }

    return(
        <Card className={'min-200'} size={'small'} title={'Common areas'}>
            <Row gutter={[16,16]} justify={'space-between'}>
                <Col span={12}>
                    <h3 className={'text-bold'}>Meeting rooms</h3>
                    <Row gutter={[16,16]}>
                        {renderRooms('Meeting room')}
                    </Row>
                </Col>
                <Col span={12}>
                    <h3 className={'text-bold'}>Others</h3>
                    <Row gutter={[16,16]}>
                        {renderRooms('Others')}
                    </Row>
                </Col>
            </Row>
        </Card>
    )
};

export default Legend;