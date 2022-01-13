import React, { Component } from 'react';
import styled from "styled-components";
import * as Icons from 'react-icons/bi'
import { Link } from 'react-router-dom'


class Footer extends Component {


    render () {
        return (
            <FooterArea>
                <MenuBar>
                    {menu.map((elements, index) => {
                        return (
                            <StyledLink to={elements.link}>
                            <Menu>
                            <IconArea>{elements.icon}</IconArea>
                            <MenuLabel>{elements.menu}</MenuLabel>
                            </Menu>
                            </StyledLink>
                        )
                    })}

                </MenuBar>

            </FooterArea>
        )
    }
}

const FooterArea = styled.div`
position: fixed;
bottom: 0;
left: 0;
right: 0;

`


const MenuBar = styled.div`
    font-size: 20px;
    padding: 10px;
    color: #888888;
    background-color: #eeeeee;
    text-align: center;
    display: flex;
    justify-content: space-between;
    text-decoration: none;
`

const Menu = styled.div`
    margin: 0 15px 0 15px;
`

const IconArea = styled.div`
    color: #444444;
`

const MenuLabel = styled.div`
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    color: #444444;
`

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const menu = [
    {
        menu: '홈',
        icon: <Icons.BiHome />,
        link: '/',
    },
    {
        menu: '카테고리',
        icon: <Icons.BiCategory />,
        link: 'category',
    },
    {
        menu: '우리동네',
        icon: <Icons.BiMapPin />,
        link: 'near',
    },
    {
        menu: '채팅',
        icon: <Icons.BiMessageRoundedDots />,
        link: 'chat',
    },
    {
        menu: '내 정보',
        icon: <Icons.BiIdCard />,
        link: 'login',
    }
]

export default Footer;

