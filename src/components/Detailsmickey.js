import React from 'react'
import styled from 'styled-components'

function Detailsmickey() {
  return (
    <Container>
        <Background>
            <img src="/images/mickey3.jpeg"/> 
        </Background>
        <ImageTitle>
            <img src="/images/mickeytitle-removebg-preview.png"/>
        </ImageTitle>    
        <Controls>
            <PlayButton>
                <img src='/images/play-icon-black.png'/>
                <span>PLAY</span>

            </PlayButton>
            <TrailerButton>
                <img src='/images/play-icon-white.png'/>
                <span>TRAILER</span>

            </TrailerButton>
            <AddButton>
                <span>+</span>

            </AddButton>
            <GroupWatchButton>
                <img src="/images/group-icon.png"/>

            </GroupWatchButton>
        </Controls>
        <SubTitle>
            2018 ▪️ 7m ▪️ Family, Fantasy, Kids, Animation

        </SubTitle>
        <Description>
            Mickey Mouse, the most popular character of Walt Disney’s animated cartoons and arguably the most popular cartoon star in the world.      
            
        </Description>
    </Container>    
  
  )
}

export default Detailsmickey

const Container = styled.div`
    min-height: calc(100vh -70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    box-sizing: border-box;
  

`
const Background = styled.div`

    position: fixed;
    top: 0;
    buttom: 0;
    right: 0;
    left: 0;
    z-index: -1;
    opacity: 0.8;
    


    img {
        height: 100vh;
        width: 100%;
        object-fit: cover;
        width: 100%;
        height: 100vh;
        background-size: auto;
        background-position: center;
        

    }


`

const ImageTitle = styled.div`
    margin-top: 30px;
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 250px;
    
    img{
        height: 100%;
        width: 100%;
        object-fit: contain;
        border-radius: 20px;

    }


`

const Controls = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: center;

`
const PlayButton = styled.button`
    height: 56px;
    padding: 0 24px;
    border-radius: 4px;
    cursor: pointer;
    letter-spacing: 1.8px;
    display: flex;
    align-items: center;
    margin-right: 22px;
    font-size: 15px;
    border: none;
    background: rgb (249, 249, 249); 

    &:hover {
        background: rgb(198, 198, 198);
    }


`
const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border:1px solid rgb(249, 249, 249);
    text-transform: uppercase;
    color: rgb(249, 249, 249);
  
`

const AddButton = styled.button`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    margin-right: 22px;

    span {
        font-size: 30px;
        color: white;
    }

`
const GroupWatchButton = styled.button`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;


`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;


`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    color: yellow;
    margin-top: 16px;
    max-width: 760px;

`