import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import Div from "./Div.js";
import Header from "../Header/Header.js";
import { Link ,useNavigate } from "react-router-dom";
import jooj from "./jooj.png";


export default function Timeline(){
    const [pesq,setPesq]=useState('')
    const [chave,setChave]=useState('teste')
    const [res,setRes]=useState([])
    const caixa=['t','e','s','t','e']
    async function pesquisa(){
        if(pesq.length <3){
            return
        }
       
        setChave('teste1')
     
        try{
            const resposta=await axios.get(`http://localhost:5000/timeline/?nome=${pesq}`,{
                pesq
            })
            setRes(resposta.data)
           
            //navigate("/pg1")    
       }catch(e){
        console.log(e)
            if(e.response.data ==undefined){
            alert('servidor off')
            }else{
                alert(e.response.data)
            }
          
       }
    
    }
    return(
        
        <Container>
            <Header />
            <Body>
                <PostsContainer>
                <TimelineTextContainer>
                    timeline
                </TimelineTextContainer>
                <UserPublish>
                    <UserPicture src={jooj} />
                    <UserTextBoxes>
                        <UrlInputBox placeholder="http://..."/>
                        <TextInputBox />
                    </UserTextBoxes>
                </UserPublish>
                    <Post></Post>
                    <Post></Post>
                    <Post></Post>
                    <Post></Post>
                </PostsContainer>
            </Body>
        
        </Container>
        
    )
}
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color:#333333;
    position: relative;
`;

const Body = styled.div`
    width: 100vw;
    height: auto;
    min-height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    z-index: 0;
`

const PostsContainer = styled.div`
    width: 600px;
    min-height: calc(100vh -70px);
    height: auto;
    background-color: red;
    padding-top: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    position: relative;
`

const TimelineTextContainer = styled.div`
    height: 120px;
    width: 100%;
    background-color: aqua;

    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const UserPublish = styled.div`
    height: 200px;
    width: 100%;

    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: 16px;

    input {
        width: 80%;
        height: 40px;

    }

`

const UserPicture = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 27px;
    margin: 10px auto 130px;
`

const UserTextBoxes = styled.div`
    height: 100%;
    width: 85%;
`

const UrlInputBox = styled.input`
    height: 30px;
    width: 95%;
    background-color: #EFEFEF;
    border: 1px solid #EFEFEF;
    border-radius: 5px;

    ::placeholder {
        color: #949494;
        padding-left: 10px;
    }
`

const TextInputBox = styled.input`
    height: 70px;
    width: 95%;
    background-color: #EFEFEF;
    border: 1px solid #EFEFEF;
    border-radius: 5px;
    margin-top: 20px;

    ::placeholder {
        color: #949494;
        padding-left: 10px;
    }
`

const Post = styled.div`
    min-height: 200px;
    height: auto;
    width: 100%;

    background-color: blue;
    margin-bottom: 20px;

`