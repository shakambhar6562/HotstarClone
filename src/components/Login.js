import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <Content>
            <Logo1 src='./images/cta-logo-one.svg' />
            <Signup>GET ALL THERE</Signup>
            <Description>Get Premier Access to Raya and tje last dragon for free 
                witha a disney+ subscription.As of 03/26/21 the price will increase grab now at $1..
                </Description>
            <Logo2 src='./images/cta-logo-two.png'/>
        </Content>
    </Container>
  )
}

export default Login
const Container=styled.div`
    position:relative;
    height:calc(100vh - 70px);
    display:flex;
    align-items:top;
    justify-content:center;

    &:before {
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        position:absolute;
        content:"";
        top:0;
        bottom:0;
        left:0;
        right:0;
        background-image:url("/images/login-background.jpg");
        z-index:-1;
        opacity:0.7;
        

    }

`
const Content=styled.div`
    max-width: 650px;
    padding:80px 40px;
    width:80%;
    display:flex;
    flex-direction:column;
    margin-top:100px;
    align-items:center;
    

`
const Logo1=styled.img `
    

`
const Signup=styled.a `
    width:100%;
    background-color:#0063e5;
    font-weight:bold;
    padding:17px 0;
    color:#f9f9f9;
    border-radius:4px;
    text-align:center;
    border:1px solid black;
    cursor:pointer;
    transition: all 250ms;
    letter-spacing:1.5px;
    margin-top: 8px;
    margin-bottom:12px;

    &:hover{
        background: #0483ee;

    }

`
const Description=styled. p `
    font-size:11px;
    letter-spacing:1.5px;
    text-align:center;
    line-height:1.5;

`
const Logo2=styled.img `
    width:90%;
`