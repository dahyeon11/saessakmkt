import React, { Component } from 'react';
import styled from "styled-components";
import * as IoIcons from 'react-icons/io5'
import * as RiIcons from 'react-icons/ri'

class Header extends Component {


    render () {
        return (
            <header>
                <div>
                <TopBaseBar>
                <Logo>
                    <RiIcons.RiSeedlingFill size={40} />
                    <Title>새싹마켓</Title>
                </Logo>
                <IoIcons.IoSearchOutline style={{'margin-left': 'auto'}} size={30} />
                </TopBaseBar>
                </div>
            </header>
        )
    }
}
const Logo = styled.div`
    font-size: 20px;
    font-weight: 700;
    line-height: 25px;

`

const Title = styled.span`
    font-size: 20px;
    font-weight: 700;
    margin: 0 5px 0 5px;
`

const TopBaseBar = styled.div`
    position: fixed;
    display: flex;
    padding: 20px;
    height: 60px;
    width: 100%;
    color: #FFF;
    background-color: rgb(23, 200, 36);
    justify-content: center;
    align-items: center;

`

export default Header;

