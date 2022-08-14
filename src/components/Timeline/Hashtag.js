import styled from "styled-components";
export default function hashtag(props){
    const {nome} =props
    
    return(
        <>
            <Box>
          
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