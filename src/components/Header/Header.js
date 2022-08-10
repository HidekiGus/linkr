import styled from "styled-components";
import { useState, useContext } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

export default function Header() {
    return (
        <Container>
            <Logo>linkr</Logo>
            <SearchBar>
                <SBInput />
                <SearchButton>
                    <SBIcon />
                </SearchButton>
            </SearchBar>
            <Menu>
                <ToggleIcon />
                <ProfileImage />
                <ToggleMenu />
            </Menu>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 72px;
    margin: auto 24px;
    background: #151515;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
`;

const Logo = styled.h1`
    font-family: 'Passion One', cursive;
    font-weight: 700;
    font-size: 50px;
    color: #FFFFFF;
`;

const SearchBar = styled.div`
    width: 570px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const SBInput = styled.input`
    width: 535px;
    height: 100%;
    border: 0 solid transparent;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    background: #FFFFFF;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 19px;
`;

const SearchButton = styled.button`
    width: 45px;
    height: 45px;
    border: 0 solid transparent;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
`;

const SBIcon = styled(BiSearchAlt)`
    
`