import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import ReactTooltip from 'react-tooltip';

import { Link ,useNavigate } from "react-router-dom";
export default function Login(e){
    const navigate = useNavigate();
    const [email,setEmail]=useState('')
    const [senha,setSenha]=useState('')
    const [token,setToken]=useState('')
    const [disable, setDisable] = useState(false);
    async function login(e){
        if(email=='' ||senha ==''){
            alert('preencha todos os campos')
            return
        }
        e.preventDefault();
        try{
            const resposta=await axios.post('http://localhost:4000/signin',{
                 email:email, password:senha
            })
            setToken(resposta.data)
            console.log(resposta.data)
            navigate("/timeline")    
       }catch(e){
        console.log(e)
            if(e.response.data ==undefined){
            alert('servidor off')
            setDisable(false)
            }else{
                alert(e.response.data)
                setDisable(false)
            }
          
       }
    }
    return(
        
        <Container>
            <Text>
                <H1 data-tip="hello world">Linkr </H1>
                <P >save, share and discover</P>
                <P>the best links on the web</P>
            </Text>
            <BoxLogin>
            <form onSubmit={login}>
             <Box>
             <Input type={'text'} value={email}  onChange={(e) => setEmail(e.target.value)} placeholder='e-mail'></Input>
             </Box>
             <Box>
             <Input type={'text'}  placeholder='password'  value={senha} onChange={(e) => setSenha(e.target.value)}></Input>
             </Box>
             <Box>
             <Button  disabled={disable} >Login</Button>
             </Box>
             <Box1>
                <P1 onClick={()=>navigate("/signup")  }> First time? Create an account!</P1>
             </Box1>
          
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
const Box1 = styled.div`
    margin-left:30px;
    margin-bottom:5px;
    width: 300px;
    height: 35px;
   
   
 
   
    
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
	top: 40vh;
    
`;  
const H1 = styled.h1`
  font-size:100px;
  color:white;
    
`;  
const P = styled.p`
  font-size:25px;
  color:white;
    
`; 
const P1 = styled.p`
  font-size:15px;
  margin-left:55px;
  color:white;
    
`; 
   
