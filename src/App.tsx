import React, {useState} from 'react';
import './App.css';
import {Layout} from "antd";
import {Content} from "antd/lib/layout/layout";
import {ReactComponent as ComfoneFloorPlanSVG} from './comfone-hq.svg';
import NavBar from "./NavBar/NavBar";
import InfoArea from "./InfoArea/InfoArea";

export interface colleague {
    input: string | undefined;
    name: string;
    position: string;
    department: string;
    pictureUrl: string;
    location: string;
    blinkingItem: string;
}

export const createClass = (name:string,rules:string) => {
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

    return (
        <Layout className={'layout'}>
            <NavBar details={details} setDetails={setDetails}/>
            <Content className={'container'}>
                <ComfoneFloorPlanSVG className={details.blinkingItem}/>
                <InfoArea details={details}  setDetails={setDetails} />
            </Content>
        </Layout>
    );
}

export default App;
