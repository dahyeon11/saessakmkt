import React, { Component } from 'react';
import styled from "styled-components";


class Footer extends Component {


    render () {
        return (
            <footer style={{'margin': 'auto 0 0 0'}}>
                <More>더보기</More>

            </footer>
        )
    }
}


const More = styled.div`
    font-size: 20px;
    padding: 10px;
    color: #888888;
    background-color: #eeeeee;
    text-align: center;
`

export default Footer;

