import React from 'react';
import styled from "styled-components";
import { store } from '../app/store';
import {auth, provider } from "../firebase";
import { Link } from "react-router-dom"
import ReactDOM from 'react-dom';
//import selectUserName from "../features/user/userSlice"
//import selectUserPhoto from "../features/user/userSlice"
import { setSignOut } from '../features/user/userSlice';
import { useSelector } from "react-redux"




const state = store.getState();

/*export const displayUsername = () => {
  const state = store.getState();

  const username = selectUsername(state);

  console.log("Username:", username);

  return username;

};*/

function Header() {
  //const userName = useSelector(selectUserName);
  //const userPhoto = useSelector(selectUserPhoto);     

  /*const signOut = () => {
    auth.signOut()
    .then(()=>{
      dispatch(setSignOut)
    })
  }*/
  
  

  return (
    <Nav>
        <Logo src="/images/logo.svg" />
          <>
              <NavMenu>
                <a>
                  <img src="images/home-icon.svg" />
                  <span>Home</span>
                </a>

                <a>
                  <img src="images/search-icon.svg" />
                  <span>Search</span>
                </a>

                <a>
                  <img src="images/watchlist-icon.svg" />
                  <span>Watchlist</span>
                </a>

                <a>
                  <img src="images/original-icon.svg" />
                  <span>Originals</span>
                </a>

                <a>
                  <img src="images/movie-icon.svg" />
                  <span>Movies</span>
                </a>

                <a>
                  <img src="images/series-icon.svg" />
                  <span>Series</span>
                </a>

              </NavMenu>
                                                                                                                                                                                                                                                                        
          </>
        
            <Wrap>
                <Link to={'/login'}>
                  <Login>Sign Up</Login> 
                </Link>                  
            </Wrap>
        
    </Nav>    
  )
    
}





const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
 

`

const Logo = styled.img`
  width: 80px;
  

`

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  align-items: center;

  
  a{
    display: flex;
    align-items: center;
    padding: 0 20px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content:"";
        background: white;
        height: 2px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
      }
    }

    &:hover{
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
      
    }
  }
`

const UserImg = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  cursor: pointer;
  

`
const Login = styled.button`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0, 2);
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &: hover {
    background-color: #f9f9f9;
    border: 4px solid rgb(249, 249, 249, 0.8);
  }

`
const Wrap = styled.div`
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;


`

export default Header