import React from 'react';
import {Card, Col, Row, Tag} from "antd";
import './Legend.css';

interface LegendProps {
    getCommonArea: (id:string) => void;
}

const Legend = ({getCommonArea}:LegendProps) => {
    return(
        <Card className={'min-200'} size={'small'} title={'Common areas'}>
            <Row gutter={[16,16]} justify={'space-between'}>
                <Col span={12}>
                    <h3 className={'text-bold'}>Meeting rooms</h3>
                    <Row gutter={[16,16]}>
                        <Col>
                            <Tag className={'legend-item americas'} onMouseEnter={()=> getCommonArea('path4304')}>Americas</Tag>
                        </Col>
                        <Col>
                            <Tag className={'legend-item europe'} onMouseEnter={()=> getCommonArea('path20178')}>Europe</Tag>
                        </Col>
                        <Col>
                            <Tag className={'legend-item africa'} onMouseEnter={()=> getCommonArea('path4220')}>Africa</Tag>
                        </Col>
                        <Col>
                            <Tag className={'legend-item antarctica'} onMouseEnter={()=> getCommonArea('path9670')}>Antarctica</Tag>
                        </Col>
                        <Col>
                            <Tag className={'legend-item asia'} onMouseEnter={()=> getCommonArea('path3294')}>Asia</Tag>
                        </Col>
                        <Col>
                            <Tag className={'legend-item australia'} onMouseEnter={()=> getCommonArea('path9672')}>Australia</Tag>
                        </Col>
                        <Col>
                            <Tag className={'legend-item multi'} onMouseEnter={()=> getCommonArea('path87852')}>Multipurpose room</Tag>
                        </Col>
                    </Row>
                </Col>
                <Col span={12}>
                    <h3 className={'text-bold'}>Others</h3>
                    <Row gutter={[16,16]}>
                        <Col>
                            <Tag className={'legend-item video'} onMouseEnter={()=> getCommonArea('path4222')}>Video room</Tag>
                        </Col>
                        <Col>
                            <Tag className={'legend-item multi'} onMouseEnter={()=> getCommonArea('path4324')}>Facility room</Tag>
                        </Col>
                        <Col>
                            <Tag className={'legend-item multi'} onMouseEnter={()=> getCommonArea('path4306')}>Storage room</Tag>
                        </Col>
                        <Col>
                            <Tag className={'legend-item red'} onMouseEnter={()=> getCommonArea('path4390')}>HR meeting</Tag>
                        </Col>
                        <Col>
                            <Tag className={'legend-item red'} onMouseEnter={()=> getCommonArea('path4416')}>HR Finance archive</Tag>
                        </Col>
                        <Col>
                            <Tag className={'legend-item red'} onMouseEnter={()=> getCommonArea('path4346')}>ICT archive</Tag>
                        </Col>
                    </Row>
                </Col>
            </Row>



        </Card>
    )
};

export default Legend;