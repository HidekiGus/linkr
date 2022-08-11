import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { Link ,useNavigate } from "react-router-dom";

export default function Timeline() {
    return (
        <Container>
            <TopBar>
                <h1>linkr</h1>
            </TopBar>
            <PostsContainer>
                <h1>
                    timeline
                </h1>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
            </PostsContainer>
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: green;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

const TopBar = styled.div`
    height: 70px;
    width: 100vw;
    background-color: #151515;
    top: 0;
    left: 0;
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    h1 {
        font-size: 49px;
        padding-left: 20px;
        color: #FFFFFF;
    }
`   

const PostsContainer = styled.div`
    width: 600px;
    min-height: calc(100vh -70px);
    height: auto;
    background-color: red;
    margin-top: 470px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;

    h1 {
        font-size: 40px;
        color: #FFFFFF;
    }
`

const Post = styled.div`
    height: 200px;
    width: 100%;

    background-color: blue;
    margin-bottom: 20px;

`