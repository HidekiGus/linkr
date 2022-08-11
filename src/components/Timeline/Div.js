import styled from "styled-components";
export default function Div(pros){
    const {nome,img} =pros
    
    return(
        <>
            <Box>
           <Img src={img}></Img>
            <div>{nome}</div>
            </Box>
           
        </>
    )
}
const Img = styled.img`
border-radius:50px;
`;
const Box = styled.div`
  display:flex;
  width: 30px;
    height: 30px;
   
`;