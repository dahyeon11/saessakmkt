import React, { Component } from 'react';
import styled from "styled-components";
import Footer from '../components/Footer';
import Header from '../components/Header';
import Item from '../components/Item';

class Main extends Component {


    render () {
        return (
            <div>
                <Container>

                <Header />
                <Item />
                <Footer />

                </Container>
            </div>
        )
    }
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

export default Main;

