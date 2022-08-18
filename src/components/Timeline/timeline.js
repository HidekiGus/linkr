import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Div from "./Div.js";
import Header from "../Header/Header.js";
import Hashtag from "../Hashtag/Hashtag.js";
import Post from "../Post/Post.js";
import { Link, useNavigate } from "react-router-dom";
import ReactTooltip from 'react-tooltip';
import jooj from "./jooj.png";
import PostInsert from "../PostInsert.js";
import reqRoot from "../../utils/reqRoot.js";
import generateHeader from "../../utils/TokenHeaders.js";
import UserContext from "../../contexts/UserContext.js";

export default function Timeline(props) {
    const {id,setId} =props
    const [posts, setPosts] = useState(null);
    const [error, setError] = useState(null);
    const [trending, setTrending] = useState([]);
    const { user } = useContext(UserContext);
    const config = generateHeader(user);

    useEffect(() => {
        const promise = axios.get(`${reqRoot}/posts`, config);
        promise.then((res) => setPosts(res.data));
        promise.catch((err) => setError(err));
    }, []);

    useEffect(async () => {
        try {
            const promessa = await axios.get(`${reqRoot}/hashtagsTrending`, config);
            setTrending(promessa.data);
        } catch (err) {
            console.log('getTrendingHashtags: ' + err);
        }
    }, []);

    return (
        <Container>
            <Background />
          

            {/*<button data-tip={texto} >Curtidas</button> */}
            <Linkr>
                <LinkrTitulo>
                    <p>trending</p>
                </LinkrTitulo>
                <Linha></Linha>

                {trending.map((ns) => {
                    return (
                        <>
                            <Hashtag nome={ns.nome} id={ns.id}> </Hashtag>
                        </>
                    )
                })}

            </Linkr>
            < ReactTooltip />
            <Body>
                <PostsContainer>
                    <TimelineTextContainer>
                        timeline
                    </TimelineTextContainer>
                    <PostInsert />
                    {posts === null && error === null ? <h1>Loading...</h1> :
                    posts === null && error !== null ? <h1>An error occured while trying to fetch the posts, please refresh the page</h1> :
                    posts.length === 0 ? <h1>There are no posts yet</h1> :
                    posts.map((post, index) => <Post post={post} key={index} action={() => window.open(post.userPostLink)} />)}
                </PostsContainer>
            </Body>
            <Header setId={setId}/>
        </Container>

    )
}

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: #333333;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
`;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
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
const Linha = styled.div`
    height: 2px;
    background-color:#333333;
    margin-bottom:10px;
`;

const Body = styled.div`
    width: 100vw;
    height: fit-content;
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