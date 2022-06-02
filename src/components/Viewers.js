import React from 'react'
import styled from 'styled-components'

function Viewers() {
  return (
    <Container>
        <Wrap>
            <img src="/images/viewers-disney.png"/>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-pixar.png"/>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-marvel.png"/>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-starwars.png"/>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-national.png"/>
        </Wrap>
    </Container>
  )
}

export default Viewers

const Wrap = styled.div`
cursor: pointer;
border: 3px solid rgb(249, 249, 249, 0.1);
border-radius: 10px;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
        border-color: rgb(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 69%) 0px 40px 50px -16px,
        rgb(0 0 0 / 73%) 0px 30px 22px -10px;
       
    }

`

const Container = styled.div`
    margin: 30px;
    padding: 30px 0 26px 0;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

`