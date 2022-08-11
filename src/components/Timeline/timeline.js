import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import Div from "./Div.js";
import { Link ,useNavigate } from "react-router-dom";
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
           
        </Container>
        
    )
}
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color:#333333;
    position: relative;
  
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