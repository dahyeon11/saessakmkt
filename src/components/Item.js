import React, { Component } from 'react';
import styled from "styled-components";
//import pinkbean from '../img/pinkbean.jpg'
import * as RiIcons from 'react-icons/ri'
import * as AiIcons from 'react-icons/ai'
import dummyData from '../data/dummy';


class Item extends Component {
    state = {
        isLiked: false,
    }

    likedHandler = () => {
        this.setState({isLiked: !this.state.isLiked})
    }

    render () {
        return (
            <div style={{margin: '60px 0 0 0'}}>
                {dummyData.map((elements, index) => {
                    return (
                        <ItemWrapper>
                        <ImgArea><ItemImg img={elements.img} /></ImgArea>
                        <ContentArea>
                            <ItemTitle>{elements.title}</ItemTitle>
                            <ItemDescription>{elements.description}</ItemDescription>
                        
                            <UserInfo>
                            <Location><RiIcons.RiMapPinLine size={18} /> {elements.location}</Location>
                            <AiIcons.AiOutlineMessage style={{'margin-left': 'auto'}} size={20} />
                            {this.state.isLiked || <RiIcons.RiHeart3Line onClick={this.likedHandler} size={20} />}
                            {this.state.isLiked && <RiIcons.RiHeart3Fill onClick={this.likedHandler} size={20} />}
                                            
                            </UserInfo>
                        </ContentArea>
                        
                        </ItemWrapper>
                    )                   
                })}
                {console.log(dummyData)}

                <ItemWrapper>
                <ImgArea><img src={`data:image/jpeg;base64,${dummyData[0].img}`} /></ImgArea>
                <ContentArea>
                    <ItemTitle>너무너무너무귀여운굉크넨이녕</ItemTitle>
                    <ItemDescription>귀여운굉크넨인형입니다. 다현이선물로 아주 2추천드립니다.</ItemDescription>

                    <UserInfo>
                    <Location><RiIcons.RiMapPinLine size={18} /> 서울시 성북구</Location>
                    <AiIcons.AiOutlineMessage style={{'margin-left': 'auto'}} size={20} />
                    {this.state.isLiked || <RiIcons.RiHeart3Line onClick={this.likedHandler} size={20} />}
                    {this.state.isLiked && <RiIcons.RiHeart3Fill onClick={this.likedHandler} size={20} />}
                    
                    </UserInfo>
                </ContentArea>

                </ItemWrapper>
            </div>
           
        )
    }
}

const ItemWrapper = styled.div`
    display: flex;
    height: 100px;
    margin: 30px 0 0 0;
    -webkit-text-stroke: 0.45px;
`
const ImgArea = styled.div`
    flex-shrink: 0;
    height: 100px;
    width: 100px;
    margin: 0 15px 0 15px;

`

const ItemImg = styled.img.attrs(props => ({
    src: `data:image/jpeg;base64,${props.img}`,
}))`
    height: 100px;
    width: 100px;
    border-radius: 18px;
`

const ContentArea = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 10px 0 0;
    height: 100px;
    width: 100%;
`

const ItemTitle = styled.div`
    font-size: 17px;
    font-weight: 700;
`

const ItemDescription = styled.span`
    font-size: 16px;
    font-weight: 300;
    overflow-x: hidden;
`

const UserInfo = styled.div`
    display: flex;
    margin: auto 0 0 0;
`

const Location = styled.span`
    font-size: 14px;
    font-weight: 500;
`

export default Item;

