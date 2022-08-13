import axios from 'axios';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../Header/Header.js';
import reqRoot from '../../utils/reqRoot';

export default function HashtagPage() {
    const [posts, setPosts] = useState([]);
    const { hashtag } = useParams()

    useEffect(() => {
        try {
            const promise = await axios.get(`${reqRoot}/hashtag/${hashtag}`);
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