import styled from "styled-components";
import { useState, useEffect  } from "react";
import axios from "axios";
import Div from "./Div.js";
import Header from "../Header/Header.js";
import Hashtag from "./Hashtag";
import { Link ,useNavigate } from "react-router-dom";
import ReactTooltip from 'react-tooltip';
import jooj from "./jooj.png";
import PostInsert from "../PostInsert.js";


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
                    <PostInsert/>
                    {posts === null && error === null ? <h1>Loading</h1> : 
                        posts === null && error !== null ? <h1>An error occured while trying to fetch the posts, please refresh the page</h1> :
                            posts.length === 0 ? <h1>There are no posts yet</h1> :
                                posts.map((post, index) => { return (
                                    <Post key={index} onClick={() => window.open(post.userPostLink)}>
                                        <PostUserPicture src={post.userImage}/>
                                        <PostTextBoxes>
                                            <PostUserName>{post.userName}</PostUserName>
                                            <PostUserText>{post.userPostDescription}</PostUserText>
                                            <PostSnippetContainer>
                                                <PostSnippetDescription>
                                                    <PostSnippetDescriptionH1>
                                                        {post.metadataTitle}
                                                    </PostSnippetDescriptionH1>
                                                    <PostSnippetDescriptionH2 isLink={false}>
                                                        {post.metadataDescription}
                                                    </PostSnippetDescriptionH2>
                                                    <PostSnippetDescriptionH2 isLink={true}>
                                                        {post.userPostLink}
                                                    </PostSnippetDescriptionH2>
                                                </PostSnippetDescription>
                                                <PostSnippetImage>
                                                    <img src={post.metadataImage} />
                                                </PostSnippetImage>
                                            </PostSnippetContainer>
                                        </PostTextBoxes>
                                        
                                    </Post>
                                )})
                    }
                </PostsContainer>
            </Body>
            <Header></Header>
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
    width: 610px;
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
    margin: 10px 20px 220px;
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

const PostSnippetContainer = styled.div`
    width: 480px;
    height: 150px;
    border-radius: 11px;
    border: 1px solid #4d4d4d;

    display: flex;
    flex-direction: row;
    overflow: hidden;

    cursor: pointer;
`

const PostSnippetDescription = styled.div`
    width: calc(100% - 150px);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
`

const PostSnippetDescriptionH1 = styled.div`
    width: 90%;
    height: 25%;
    font-size: 16px;
    line-height: 20px;
    color: #CECECE;
`

const PostSnippetDescriptionH2 = styled.div`
    width: 90%;
    height: fit-content;
    max-height: 30%;
    font-size: 11px;
    line-height: 13px;
    color: ${(props) => props.isLink ? "#CECECE" : "#9B9595"};
`

const PostSnippetImage = styled.div`
    width: 150px;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        max-width: 100%;
        max-height: 100%;
    }
`