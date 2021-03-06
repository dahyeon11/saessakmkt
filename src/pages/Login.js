import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components";
import GoogleLogin from 'react-google-login'
import naver from '../img/naver.png'
import OAuth from '../components/OAuth';
import postData from '../modules/postdata'



class Login extends Component {
    state = {
        loginInfo: {
            userId: null,
            pwd: null,
        }
    }

    loginHandler = () => {
        console.log('로그인 정보는 ', this.state.loginInfo)
        postData('login', this.state.loginInfo)
        
    }

    render () {
        return (
            <div>
                <Container>
                <Test>로그인</Test>
                <IdInput onChange={(event) => this.setState({loginInfo: {userId: event.target.value, pwd: this.state.loginInfo.pwd}})}></IdInput>
                    <PWDInput onChange={(event) => this.setState({loginInfo: {pwd: event.target.value, userId: this.state.loginInfo.userId}})}></PWDInput>
                    <Btn1 onClick={this.loginHandler}>확인</Btn1>
                    <div style={{margin: '20px 0 0 0'}}/>
                    <Link to='/signup'>
                    <SignUp>회원가입</SignUp>
                    </Link>
                    <div style={{margin: '20px 0 0 0'}}/>
                    <GoogleLogin
    clientId="1"
    buttonText="Google 계정으로 계속하기"
    cookiePolicy={'single_host_origin'}
  />,
                <div style={{margin: '10px 0 0 0'}}/>
                <OAuth />
                </Container>
            </div>
        )
    }
}

const Container = styled.div`
    display: flex;
    margin: 0 auto 0 auto;
    width: 80vw;
    flex-direction: column;
    min-height: 100vh;
`

const Test = styled.div`
margin: 100px 0 20px 0;
font-size: 22px;
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
    type: 'password',
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
    //border-top-left-radius: 20px;
    //border-top-right-radius: 20px;
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

const SignUp = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  text-align: center:
  width: 100%;
  height: 49px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
    -webkit-border-image: none;
`

export default Login;

