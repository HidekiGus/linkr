import styled from "styled-components";
import { useState, useEffect  } from "react";
import axios from "axios";
import Div from "./Div.js";
import Header from "../Header/Header.js";
import Hashtag from "./Hashtag";
import { Link ,useNavigate } from "react-router-dom";
import ReactTooltip from 'react-tooltip';
import jooj from "./jooj.png";
export default function Timeline(){
    const texto =`teste ${10}`
    const [pesq,setPesq]=useState('')
   
    const [res,setRes]=useState([])
    const [get,getRes]=useState([])
    const caixa=['t','e','s','t','e']
    async function pesquisa(){
        if(pesq.length <3){
            return
        }
       
    
     
        try{
            const resposta=await axios.get(`http://localhost:4000/timeline/?nome=${pesq}`,{
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
    useEffect(() => {
        async function getpg1(){
         try{
            const promessa=await axios.get('http://localhost:4000/hashtagsTrending')      
            getRes(promessa.data)
            console.log(promessa.data)
           
         }catch(e){
            console.log('ruim no getpg1')
         }
        }
         getpg1()
        
         }, []);
         
    return(
        //  <button  data-tip = {texto} >Curtidas</button>
        //  < ReactTooltip  / >
        <Container>
            
         
            <button  data-tip = {texto} >Curtidas</button>
            <Linkr>
                <LinkrTitulo>
                <p>trending</p>
                </LinkrTitulo> 
                <Linha></Linha>
                
                {get.map((ns)=>{
            return(
                <>
                   <Hashtag nome={ns.nome} > </Hashtag>
                </>
                )
            })}
            
            </Linkr>
            < ReactTooltip  / >
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
            <Header></Header>
        </Container>
        
    )
}
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color:#333333;
    position: relative;
`;
const Linkr = styled.div`
    width: 20vw;
    height: 250px;
    background-color:#151515;
    border-radius:10px;
    position: fixed;
	top: 155px;
	right: 0px;
`;
const P = styled.p`
   color:white;
`;
const LinkrTitulo = styled.div`
    width: 20vw;
    height: 40px;
    font-size:30px;
    border-radius:10px;
    color:white;
`;
const Linha= styled.div`
    height: 2px;
    background-color:#333333;
    margin-bottom:10px;
`;
const Teste = styled.div`
    width: 20vw;
    height: 150px;
    background-color:red;
    position: fixed;
	top: 55px;
	right: 513px;

  
`;
const Teste1 = styled.div`
    width: 20vw;
    height: 150px;
    background-color:red;
    position: fixed;
	top: 55px;
	right: 513px;
    display:none;

  
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