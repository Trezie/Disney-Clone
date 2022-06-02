import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
function Movies() {
  return (
    <Container>
        <h4>Recommended For You</h4>
        <Content>
            <Wrap>
                <Link to={'/detail'}>
                    <img src="images/bao1.webp"/>               
                </Link>
                
            </Wrap>
            <Wrap>
                <Link to={'/detailsenchanto'}>
                    <img src="images/enchanto1.webp"/>          
                </Link>               
            </Wrap>
            <Wrap>
                <Link to={'/detailsfrozen'}>
                    <img src="images/frozen.jpeg"/>  
                </Link>               
            </Wrap>
            <Wrap>
                <Link to={'/detailshercules'}>
                    <img src="images/hercules3.jpeg"/>
                </Link>                
            </Wrap>
            <Wrap>
                <Link to={'/detailsmickey'}>
                    <img src="images/mickey2.jpeg"/>
                </Link>                
            </Wrap>
            <Wrap>
                <Link to={'/detailsmoana'}>
                    <img src="images/moana2.jpeg"/>
                </Link>               
            </Wrap>
            <Wrap>
                <Link to={'/detailsmulan'}>
                    <img src="images/mulan.webp"/>
                </Link>                 
            </Wrap>
            <Wrap>
                <Link to={'/detailspocahontas'}>
                    <img src="images/pocahunters1.png"/>
                </Link>                  
            </Wrap>
            <Wrap>
                <Link to={'/detailsnowhite'}>
                    <img src="images/snowhite1.webp"/>
                </Link>                  
            </Wrap>
            <Wrap>
                <Link to={'/detailstangled'}>
                    <img src="images/rap3.jpeg"/>
                </Link>                  
            </Wrap>
            <Wrap>
                <Link to={'/detailslittlemermaid'}>
                    <img src="images/little.jpeg"/>
                </Link>                  
            </Wrap>
            <Wrap>
                <Link to={'/detailscinderella'}>
                    <img src="images/cinderella.jpeg"/>
                </Link>                  
            </Wrap>
        </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`
    margin: 30px;
`
const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrap = styled.div`
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;


    img {
      width: 100%;
      height: 280px;
      object-fit: cover;
      
    }

    &:hover {
        transform: scale(1.05);
        border: 3px solid rgba(249, 249, 249, 0.6);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    }

`