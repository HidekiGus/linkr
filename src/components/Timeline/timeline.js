import styled from "styled-components";
import { useState, useEffect  } from "react";
import axios from "axios";
import Div from "./Div.js";
import hashtag from "./Hashtag";
import { Link ,useNavigate } from "react-router-dom";
import ReactTooltip from 'react-tooltip';
export default function Timeline(){
    const texto =`teste ${10}`
    const [pesq,setPesq]=useState('')
    const [chave,setChave]=useState('teste')
    const [res,setRes]=useState([])
    const [get,getRes]=useState([])
    const caixa=['t','e','s','t','e']
    async function pesquisa(){
        if(pesq.length <3){
            return
        }
       
        setChave('teste1')
     
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
        
        <Container>
            <Barra>
                <p>links</p>
                <Input type='text' onKeyUp={pesquisa} value={pesq} onChange={(e) => setPesq(e.target.value)}></Input>
              
                <div>
                    <p>foto</p>
                </div>
                <div className={chave}>
                {res.map((ns)=>{
            return(
                <>
                   <Div nome={ns.name} img={ns.image}> </Div>
                </>
                )
            })}
                </div>
            </Barra>
            <button  data-tip = {texto} >Curtidas</button>
            <Linkr>
                <LinkrTitulo>
                <p>trending</p>
                </LinkrTitulo> 
                <Linha></Linha>
                <P>
                {get.map((ns)=>{
            return(
                <>
                   <Div nome={ns.nome} > </Div>
                </>
                )
            })}
            </P>
            </Linkr>
            < ReactTooltip  / >
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
const Barra = styled.div`
    width: 100vw;
    height: 70px;
    display:flex;
    position: relative;
    justify-content:space-between;
    align-items:center;
    background-color:#171717;
    p{
        color:white;
    }
  
`;
const Input = styled.input`
    width: 25vw;
    height: 35PX;
   
  
`;