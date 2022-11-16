import React, {useState} from 'react';
import './App.css';
import {Layout} from "antd";
import {Content} from "antd/lib/layout/layout";
import {ReactComponent as ComfoneFloorPlanSVG} from './comfone-hq.svg';
import NavBar from "./NavBar/NavBar";
import InfoArea from "./InfoArea/InfoArea";
import $ from "jquery";

export interface colleague {
    name: string;
    position: string;
    department: string;
    pictureUrl: string;
    location: string;
}

const App = () =>{
    const [details, setDetails] = useState<colleague>(
        {
            name: 'Name',
            position: 'Position',
            department:'Department',
            pictureUrl:'../pics/placeholder.png',
            location: 'Location'
        });

    const removeHighlight = () => {
        // @ts-ignore
        $.find('path').map((elem:any) => $(elem).removeClass('blink'));
        // @ts-ignore
        $.find('g').map((elem:any) => $(elem).removeClass('blink'));
    }

    const highlight = (id:string) => {
        removeHighlight();
        if(id){$(`#${id}`).addClass('blink');}
    }

    return (
        <Layout className={'layout'}>
            <NavBar setDetails={setDetails} highlight={highlight}/>
            <Content className={'container'}>
                <ComfoneFloorPlanSVG />
                <InfoArea details={details}  setDetails={setDetails} highlight={highlight}/>
            </Content>
        </Layout>
    );
}

export default App;
