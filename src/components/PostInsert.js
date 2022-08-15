import axios from "axios";
import { useContext, useState } from "react";
import styled from "styled-components"
import UserContext from "../contexts/UserContext.js";
import reqRoot from "../utils/reqRoot.js";
import generateHeader from "../utils/TokenHeaders.js";

export default function PostInsert(img) {
    const { user } = useContext(UserContext);
    const [post, setPost] = useState({link: "", description: ""});
    const [disable, setDisable] = useState(false);
    const [hashtags, setHashtags] = useState([]);
    const config = generateHeader(user);

    function checkPost(event) {
        event.preventDefault();
        setDisable(true);

        if(!post.link) {
            setDisable(false);
            return alert('É necessário preencher o link.')
        }
        getHashtags();
    }

    function getHashtags() {
        const segregate = post.description.split(" ");

        for(let i = 0; i < segregate.length; i++) {
            if(segregate[i].startsWith("#")) {
                hashtags.push(segregate[i])
            }
        }
        sendPost();
    }

    async function sendPost() {
        try {
            await axios.post(`${reqRoot}/post`, {...post, userId: 1}, config);
            await axios.post(`${reqRoot}/hashtag`, {hashtags: hashtags}, config);
            
            setDisable(false);
            setHashtags([]);
            setPost({link: "", description: ""});
        } catch (error) {
            setDisable(false)
            alert('Houve um erro ao publicar seu link')
            console.log(error)
        }
    }

    return (
        <NewPostBox>
            <div>
                <img src={img} alt='img' />
            </div>
            <div>
                <p>What are you going to share today?</p>
                <form onSubmit={checkPost}>
                    <input disabled={disable} placeholder="http://..." value={post.link} onChange={e => setPost({...post, link: e.target.value})} />
                    <textarea disabled={disable} placeholder="Awesome article about #javascript" value={post.description} onChange={e => setPost({...post, description: e.target.value})} />
                    <button disabled={disable} typeof="submit">{disable ? 'Publishing...' : 'Publish'}</button>
                </form>
            </div>
        </NewPostBox>
    )
}

const NewPostBox=styled.div`
    background-color: #FFFFFF;
    display: flex;
    height: 210px;
    width: 610px;
    padding: 16px 18px;
    border-radius: 16px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    div:nth-child(2) {
        width: 100%;
    }

    img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        margin-right: 18px;
        object-fit: cover;
    }

    p {
        color: #707070;
        font-weight: 300;
        font-size: 20px;
        margin: 5px 0px;
    }

    form {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        width: 100%;
    }

    input, textarea {
        margin-bottom: 5px;
        background-color: #EFEFEF;
        height: 30px;
        padding-left: 13px;
    }

    textarea {
        height: 66px;
        margin-top: 8px;
        resize: none;
        padding-top: 8px;
    }

    button {
        background-color: #1877F2;
        color: #FFFFFF;
        font-weight: 700;
        width: 110px;
        height: 30px;
        align-self: flex-end;
    }

    input, button, textarea {
        border-radius: 5px;
        border: none;
        font-size: 15px;
    }
`