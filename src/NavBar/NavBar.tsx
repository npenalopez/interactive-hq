import {Col, Row, Select} from "antd";
import {Header} from "antd/lib/layout/layout";
import Logo from '../img/logo.png';
import React from "react";
import './NavBar.css';
import colleagues from '../colleagues.json';
import {colleague} from "../App";

interface optionGroup {
    label: string;
    options: Array<option>
}

interface option {
    value: string;
    label: string;
}

interface NavBarProps {
    setDetails: React.Dispatch<React.SetStateAction<colleague>>;
}

const NavBar = ({setDetails}:NavBarProps) => {
    const onChange = (value:string) => {
        const colleague = colleagues.find((colleague) => colleague.id === value);
        if(colleague){
            setDetails({
                name: colleague.name,
                position: colleague.position,
                department:colleague.department,
                pictureUrl:colleague.pictureUrl,
                location: colleague.location,
                blinkingItem: `blink${colleague.id}`,
            })
        }
    }

    const onSearch = (input: string, option: optionGroup | undefined) => {
        if(option){
            return option.label.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0;
        }else {
            return true;
        }
    }

    const options:Array<optionGroup> = [];

    const getColleaguesGroup = (department:string) => {
        const optionGroup:Array<option> = [];

        colleagues.filter(colleague => colleague.department === department).forEach(colleague =>
            optionGroup.push({value: colleague.id, label:colleague.name})
        );
        return optionGroup;
    }

    options.push(
        {
            label:'Executive Board',
            options: getColleaguesGroup('Executive Board')
        },
        {
            label:'CEO Staff',
            options: getColleaguesGroup('CEO Staff')
        },
        {
            label: 'Finance, Accounting & Controlling',
            options: getColleaguesGroup('Finance, Accounting & Controlling')
        },
        {
            label: 'Human Resources',
            options: getColleaguesGroup('Human Resources')
        },
        {
            label: 'Internal Services',
            options: getColleaguesGroup('Internal Services')
        },
        {
            label: 'Sales',
            options: getColleaguesGroup('Sales')
        },
        {
            label: 'Marketing & Sales Operations',
            options: getColleaguesGroup('Marketing & Sales Operations')
        },
        {
            label: 'Signalling Engineering',
            options: getColleaguesGroup('Signalling Engineering')
        },
        {
            label: 'IP Engineering',
            options: getColleaguesGroup('IP Engineering')
        },
        {
            label: 'ICT Engineering',
            options: getColleaguesGroup('ICT Engineering')
        },
        {
            label: 'Products',
            options: getColleaguesGroup('Products')
        },
        {
            label: 'Clearing Operations',
            options: getColleaguesGroup('Clearing Operations')
        },
        {
            label: 'Clearing Operations - Back Office',
            options: getColleaguesGroup('Clearing Operations - Back Office')
        },
        {
            label: 'Hubbing Operations',
            options: getColleaguesGroup('Hubbing Operations')
        },
        {
            label: 'Network Operation Centre',
            options: getColleaguesGroup('Network Operation Centre')
        },
        {
            label: 'Software Development',
            options: getColleaguesGroup('Software Development')
        },
        {
            label: 'Service Delivery',
            options: getColleaguesGroup('Service Delivery')
        },
    );

    return (
        <Header className={'header'}>
            <Row gutter={5} justify={'space-evenly'}>
                <Col span={10}>
                    <Select
                        className={'search-bar'}
                        options={options}
                        showSearch
                        placeholder={'Find a colleague...'}
                        optionFilterProp="children"
                        onChange={onChange}
                        filterOption={(input, option) => onSearch(input, option )}
                    />
                </Col>
                <Col span={4} className={'align-center'}>
                    <h2 className={'text-white'}>HQ floor plan</h2>
                </Col>
                <Col span={10} className={'align-right'}>
                    <img src={Logo} className={'logo'}  alt={'logo'}/>
                </Col>
            </Row>
        </Header>
    )
}

export default NavBar;