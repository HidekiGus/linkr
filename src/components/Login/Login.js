import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

import { Link ,useNavigate } from "react-router-dom";
export default function Login(){
    const navigate = useNavigate();
    const [email,setEmail]=useState('')
    const [senha,setSenha]=useState('')
    const [token,setToken]=useState('')
    async function login(e){
        e.preventDefault();
        try{
            const resposta=await axios.post('http://localhost:5000/signin',{
                 email:email, password:senha
            })
            setToken(resposta.data)
            //navigate("/pg1")    
       }catch(e){
        console.log(e)
            alert(e)
            alert('deu ruim meu amigo __-')
       }
    }
    return(
        
        <Container>
            <Text>
                <H1>Linkr </H1>
                <P>save, share and discover</P>
                <P>the best links on the web</P>
            </Text>
            <BoxLogin>
            <form >
             <Box>
             <Input type={'text'} value={email}  onChange={(e) => setEmail(e.target.value)} placeholder='e-mail'></Input>
             </Box>
             <Box>
             <Input type={'text'}  placeholder='password'  value={senha} onChange={(e) => setSenha(e.target.value)}></Input>
             </Box>
             <Box>
             <Button  onClick={login}>Login</Button>
             </Box>
          
             </form>
            </BoxLogin>
        </Container>
        
    )
    
}
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color:#151515;
    position: relative;
  
`;
const BoxLogin =styled.div`
    width:400px;
    height:100vh;
    background-color:#333333;
    position: absolute;
	right: 0px;
	bottom: 0px;
    display:flex;
    align-items:center;
    flex-direction:center;
   

`;
const Input = styled.input`
    width: 300px;
    height: 35px;
    border-radius:5px;
`;
const Box = styled.div`
    margin-left:30px;
    margin-bottom:5px
    
`;
const Button = styled.button`
     width: 300px;
    height: 35px;
    background-color:#1877f2;
    border-radius:5px;
`;
const Text = styled.div`
 
   width:400px;
   height:400px;
   position: absolute;
	left: 20vw;
	top: 28vh;
    
`;  
const H1 = styled.h1`
  font-size:100px;
  color:white;
    
`;  
const P = styled.p`
  font-size:25px;
  color:white;
    
`; 
   
