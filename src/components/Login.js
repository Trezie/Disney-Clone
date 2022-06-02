import React from 'react'
import styled from 'styled-components'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, signIn } from "../firebase";
//import { signIn } from '../firebase';
//import { getAuth }  from "../firebase";
import ReactDOM from 'react-dom';


  


const provider = new GoogleAuthProvider();
//const auth = getAuth();



function Login() {
  return (
    <Container>
        <CTA>
            <CTALogoOne src='/images/hde6.png.crdownload'/>
            <SignUp onClick={signIn}>
                SIGN UP HERE
            </SignUp>
            <Description>
            Raya And The Last Dragon is available on Disney+ Premier Access. To get Premier Access, you need to already have a subscription to Disney+, which you can get directly from Disney for $8 per month or $80 per year.

            </Description>
            <CTALogoTwo src='/images/cta-logo-two.png'/>
        </CTA>

    </Container>
  )
}

export default Login


const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
    align-items: top;
    

    &:before {
        background-attachment: fixed;
        background-size: cover;
        background-position: top;
        background-repeat: no-repeat;
        background: url("/images/login-background.jpg");
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        opacity: 0.7;
        
    } 
  
  
  
`

const CTA = styled.div`
 
  max-width: 650px;
  margin: 170px 40px;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`

const CTALogoOne = styled.img`
  
  width: 100%;
  height: 200px;
  object-fit: cover;
  
`
const SignUp = styled.a`
font-weight: bold;
background-color: #0063e5;
padding: 20px 0;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
color: #f9f9f9;
font-size: 18px;
cursor: pointer;
transition: all 250ms;
letter-spacing: 1.50px;
margin-top: 8px;
margin-buttom: 12px;

&:hover {
  background: #00483ee;
}
`

const Description = styled.p`
  font-size: 13px;
  letter-spaciing: 1.5px;
  text-align: center;
  line-height: 1.5;
`

const CTALogoTwo = styled.img`
  width: 100%;
  padding: 0 10px;
`