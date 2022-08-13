import axios from 'axios';
import styled from 'styled-components';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../Header/Header.js';
import reqRoot from '../../utils/reqRoot';
import UserContext from '../../contexts/UserContext.js';
import generateHeader from '../../utils/TokenHeaders.js';

export default function HashtagPage() {
    const [posts, setPosts] = useState([]);
    const { hashtag } = useParams()
    const { user } = useContext(UserContext);
    const config = generateHeader(user);

    useEffect(() => {
        try {
            const promise = await axios.get(`${reqRoot}/hashtag/${hashtag}`, config);
            setPosts(promise.data);
        } catch (err) {
            console.log(err.response);
        }
    })

    return (
        <>
            <Header />
            essa é uma página que mostra os posts com uma hashtag
        </>
    )
}