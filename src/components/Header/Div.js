import styled from "styled-components";
export default function Div(pros){
    const {nome,img,id,fechar} =pros
    let img2=img
    if(img==''){
        img2 ="https://i.ytimg.com/vi/RTFJsGtJEtY/maxresdefault.jpg"
    }
    
    return(
        <>
            <Box onClick={()=> fechar(id)}>
           <Img src={img2}></Img>
            <div>{nome}</div>
           
            </Box>
           
        </>
    )
}
const Img = styled.img`
border-radius:50px;
margin-right:5px;
margin-left:10px;
width: 35px;
height: 35px;
`;
const Box = styled.div`
  display:flex;

  width: 30px;
    height: 30px;
    margin-top:10px;
   
`;