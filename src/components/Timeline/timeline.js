import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import Div from "./Div.js";
import Header from "../Header/Header.js";
import { Link ,useNavigate } from "react-router-dom";
import jooj from "./jooj.png";
import { ReactTagify } from "react-tagify";


export default function Timeline(){
    const [pesq,setPesq]=useState('');
    const [chave,setChave]=useState('teste');
    const [res,setRes]=useState([]);
    const caixa=['t','e','s','t','e'];
    const [ posts, setPosts ] = useState(null);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const promise = axios.get("http://localhost:4000/posts");
        promise.then((res) => setPosts(res.data));
        promise.catch((err) => setError(err));
    }, []);

    console.log(posts);

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
                    {posts === null && error === null ? <h1>Loading</h1> : 
                        posts === null && error !== null ? <h1>An error occured while trying to fetch the posts, please refresh the page</h1> :
                            posts.length === 0 ? <h1>There are no posts yet</h1> :
                                posts.map((post, index) => { return (
                                    <Post key={index}>
                                        <PostUserPicture src={post.image}/>
                                        <PostTextBoxes>
                                            <PostUserName>{post.name}</PostUserName>
                                            <PostUserText>{post.description}</PostUserText>
                                        </PostTextBoxes>
                                    </Post>
                                )})
                    }
                    <Post>
                        <PostUserPicture src={jooj}/>
                        <PostTextBoxes>
                            <PostUserName>Joãozinho Joãozão</PostUserName>
                            <PostUserText>XANGARINGA xungaringa ringa ringa xangari xunga xaringa xarangara xangara</PostUserText>
                        </PostTextBoxes>
                    </Post>
                </PostsContainer>
            </Body>
        
        </Container>
        
    )
}
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
`;

const Body = styled.div`
    width: 100vw;
    height: fit-content;

    background-color:#333333;
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
    min-height: 300px;
    height: auto;
    width: 100%;

    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: 16px;
    margin: 10px 0;

    background-color: #171717;

    input {
        width: 80%;
        height: 40px;
    }
`

const PostUserPicture = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 27px;
    margin: 10px auto 220px;
`

const PostUserName = styled.div`
    height: 20px;
    width: 95%;
    color: #FFFFFF;
    font-size: 20px;
`

const PostUserText = styled.div`
    min-height: 30px;
    height: auto;
    width: 95%;
    color: #B7B7B7;
    font-size: 17px;

    margin: 15px 0;
`

const PostTextBoxes =  styled.div`
    height: 100%;
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
`

const Snippet = styled.div`
    width: 95%;
    height: 150px;
    background-color: white;
`