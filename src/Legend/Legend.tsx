import React from 'react';
import {Card, Col, Row, Tag} from "antd";
import './Legend.css';

interface LegendProps {
    onCommonAreaChange: (id:string) => void;
}

const Legend = ({onCommonAreaChange}:LegendProps) => {
    return(
        <Card className={'min-200'} size={'small'} title={'Common areas'}>
            <Row gutter={[16,16]} justify={'space-between'}>
                <Col span={12}>
                    <h3 className={'text-bold'}>Meeting rooms</h3>
                    <Row gutter={[16,16]}>
                        <Col>
                            <Tag className={'legend-item americas'} onClick={()=> onCommonAreaChange('path4304')}>Americas</Tag>
                        </Col>
                        <Col>
                            <Tag className={'legend-item europe'} onClick={()=> onCommonAreaChange('path20178')}>Europe</Tag>
                        </Col>
                        <Col>
                            <Tag className={'legend-item africa'} onClick={()=> onCommonAreaChange('path4220')}>Africa</Tag>
                        </Col>
                        <Col>
                            <Tag className={'legend-item antarctica'} onClick={()=> onCommonAreaChange('path9670')}>Antarctica</Tag>
                        </Col>
                        <Col>
                            <Tag className={'legend-item asia'} onClick={()=> onCommonAreaChange('path3294')}>Asia</Tag>
                        </Col>
                        <Col>
                            <Tag className={'legend-item australia'} onClick={()=> onCommonAreaChange('path9672')}>Australia</Tag>
                        </Col>
                        <Col>
                            <Tag className={'legend-item multi'} onClick={()=> onCommonAreaChange('path87852')}>Multipurpose room</Tag>
                        </Col>
                    </Row>
                </Col>
                <Col span={12}>
                    <h3 className={'text-bold'}>Others</h3>
                    <Row gutter={[16,16]}>
                        <Col>
                            <Tag className={'legend-item video'} onClick={()=> onCommonAreaChange('path4222')}>Video room</Tag>
                        </Col>
                        <Col>
                            <Tag className={'legend-item multi'} onClick={()=> onCommonAreaChange('path4324')}>Facility room</Tag>
                        </Col>
                        <Col>
                            <Tag className={'legend-item multi'} onClick={()=> onCommonAreaChange('path4306')}>Storage room</Tag>
                        </Col>
                        <Col>
                            <Tag className={'legend-item red'} onClick={()=> onCommonAreaChange('path4390')}>HR meeting</Tag>
                        </Col>
                        <Col>
                            <Tag className={'legend-item red'} onClick={()=> onCommonAreaChange('path4416')}>HR Finance archive</Tag>
                        </Col>
                        <Col>
                            <Tag className={'legend-item red'} onClick={()=> onCommonAreaChange('path4346')}>ICT archive</Tag>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card>
    )
};

export default Legend;