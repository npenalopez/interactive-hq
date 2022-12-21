import {Col, Row, Select} from "antd";
import {Header} from "antd/lib/layout/layout";
import Logo from '../../images/logo.png';
import React from "react";
import './NavBar.css';
import {colleague} from "../../App";
import {normalizeText, optionGroup, options} from "./navBarHelpers";

interface NavBarProps {
    details: colleague;
    onColleagueChange: (value:string) => void;
}

const onSearch = (input: string, option: optionGroup | undefined) => option ? normalizeText(option.label).indexOf(normalizeText(input)) >= 0 : true;

const NavBar = ({details, onColleagueChange}:NavBarProps) => {
    return (
        <Header className={'header'}>
            <Row gutter={5} justify={'space-evenly'}>
                <Col span={10}>
                    <Select
                        value={details.input}
                        className={'search-bar'}
                        options={options}
                        showSearch
                        placeholder={'Find a colleague...'}
                        optionFilterProp="children"
                        onChange={onColleagueChange}
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