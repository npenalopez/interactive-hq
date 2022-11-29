import React, {useState} from 'react';
import './App.css';
import {Col, Layout, Row} from "antd";
import {Content} from "antd/lib/layout/layout";
import {ReactComponent as ComfoneFloorPlanSVG} from './comfone-hq.svg';
import NavBar from "./NavBar/NavBar";
import colleagues from "./colleagues.json";
import ColleagueDetails from "./ColleagueDetails/ColleagueDetails";
import Legend from "./Legend/Legend";

export interface colleague {
    input: string | undefined;
    name: string;
    position: string;
    department: string;
    pictureUrl: string;
    location: string;
    blinkingItem: string;
}

const createCSSClass = (name:string,rules:string) => {
    const style = document.createElement('style');
    document.getElementsByTagName('head')[0].appendChild(style);
    if(style.sheet){
        style.sheet.insertRule(name+"{"+rules+"}",0);
    }
}

const App = () =>{
    const [details, setDetails] = useState<colleague>(
        {
            input: undefined,
            name: 'Name',
            position: 'Position',
            department:'Department',
            pictureUrl:process.env.PUBLIC_URL+'/pics/placeholder.png',
            location: 'Location',
            blinkingItem: '',
        });

    const onCommonAreaChange = (id:string) => {
        createCSSClass(`.blink${id} #${id}`,"animation: hideshow 2s ease infinite; -webkit-animation: hideshow 2s ease infinite;");
        setDetails({
            input: undefined,
            name: 'Name',
            position: 'Position',
            department:'Department',
            pictureUrl: '../pics/placeholder.png',
            location: 'Location',
            blinkingItem: `blink${id} #${id}`,
        });
    }

    const onColleagueChange = (value:string) => {
        const colleague = colleagues.find((colleague) => colleague.id === value);
        if(colleague){
            createCSSClass(`.blink${colleague.id} #${colleague.id}`,"animation: hideshow 2s ease infinite; -webkit-animation: hideshow 2s ease infinite;");
            setDetails({
                input:colleague.name,
                name: colleague.name,
                position: colleague.position,
                department:colleague.department,
                pictureUrl:colleague.pictureUrl,
                location: colleague.location,
                blinkingItem: `blink${colleague.id}`,
            });
        }
    }

    return (
        <Layout className={'layout'}>
            <NavBar details={details} onColleagueChange={onColleagueChange}/>
            <Content className={'container'}>
                <ComfoneFloorPlanSVG className={details.blinkingItem}/>
                <Row gutter={10} className={'info-area'}>
                    <Col span={9} >
                        <ColleagueDetails details={details} />
                    </Col>
                    <Col span={15}>
                        <Legend onCommonAreaChange={onCommonAreaChange}/>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
}

export default App;
