import React, { Component } from 'react';
import styled from "styled-components";
import naver from '../img/naver.svg'


class OAuth extends Component {


    render () {
        return (
            <div>
                <Container>

                <Icon /> <Text>네이버로 간편 가입</Text>
                

                </Container>
            </div>
        )
    }
}

const Container = styled.div`
    display: flex;
    color: rgb(123,123,125);
    box-shadow: 1px 1px 4px 0px #999999;
    height: 40px;
    align-items: center;
`

const Icon = styled.img.attrs({
    src: naver,
})`
    width: 30px;
    margin: 0 0 0 10px;
`

const Text = styled.div`
    margin: 0 0 0 10px;
    font-size: 16px;
`

export default OAuth;

