import styled from "styled-components";
import { useNavigate } from "react-router-dom";
export default function Hashtag(props){
    const navigate = useNavigate();
    const {nome,id} =props
    function pagina(){
        navigate('/hashtag/'+nome);
    }
  
    return(
        <>
            <Box onClick={pagina}>
          
            <div><p>#{nome}</p></div>
            </Box>
           
        </>
    )
}

const Box = styled.div`
  display:flex;
  width: 30px;
  
    height: 30px;
    p{
        color:white;
    }
    
   
`;