import React, { Component } from 'react';
import styled from "styled-components";
import Footer from '../components/Footer';
import Header from '../components/Header';
import axios from 'axios'


class Main extends Component {
    state = {
        userId: '',
        password: '',
        email: '',
    }

    submit = async () => {
        const options = {
            method: 'post',
            url: 'https://api.cokkirimarket.xyz/user/signup',
            data: {
                user_id: this.state.userId,
                password: this.state.password,
                email: this.state.email
            }
        }
        const newUser = axios(options)
        console.log(newUser)
    }

    render () {
        return (
            <div>
                <Container>

                <IdInput onChange={(e)=> this.setState({userId: e.target.value})} />
                <PWDInput onChange={(e)=> this.setState({password: e.target.value})} />
                <EmailInput onChange={(e)=> this.setState({email: e.target.value})} />

                <Btn1 onClick={this.submit}>전송</Btn1>

                </Container>
            </div>
        )
    }
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto 0 auto;
    align-items: center;
    width: 60vw;
    min-height: 100vh;
`

const IdInput = styled.input.attrs({
    type: 'text',
    placeholder: '아이디',
    
})`
display: block;
position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
    -webkit-border-image: none;

`

const PWDInput = styled.input.attrs({
    type: 'text',
    placeholder: '비밀번호',
    
})`
display: block;
position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
    -webkit-border-image: none;

`

const EmailInput = styled.input.attrs({
    type: 'text',
    placeholder: '이메일',
    
})`
display: block;
position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
    -webkit-border-image: none;

`

const Btn1 = styled.button`
margin: 15px 0 0 0;
font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  display: block;
  width: 100%;
  height: 49px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: #03c75a;
`

export default Main;

