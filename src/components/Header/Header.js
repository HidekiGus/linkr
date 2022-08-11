import styled from "styled-components";
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";

import { BiSearchAlt } from 'react-icons/bi';
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';

export default function Header() {
    const [hidden, setHidden] = useState(true);

    function toggleHidden() {
        if (hidden) {
            setHidden(false);
        } else {
            setHidden(true);
        }
    }

    return (
        <Container>
            <Logo>linkr</Logo>
            <SearchBar>
                <SBInput placeholder="Search for people" />
                <SearchButton onClick={() => console.log("Procurar")}>
                    <SBIcon />
                </SearchButton>
            </SearchBar>
            <Menu>
                <ToggleIcon onClick={toggleHidden} hidden={hidden ? "0deg" : "180deg"} />
                <ProfileImage alt="foto de perfil" src="https://i.ytimg.com/vi/RTFJsGtJEtY/maxresdefault.jpg" />
                <ToggleMenu display={hidden ? "none" : "flex"} />
            </Menu>
        </Container>
    )
}

function ToggleMenu({ display }) {
    const navigate = useNavigate();

    function logOut() {
        localStorage.removeItem("localUser");
        navigate("/");
    }

    return (
        <MenuContainer display={display} >
            <h1 onClick={logOut}>Logout</h1>
        </MenuContainer>
    )
}

const Container = styled.div`
    width: 100%;
    height: 72px;
    padding: 24px;
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
    padding: 10px;
    border: 0 solid transparent;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    background: #FFFFFF;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 19px;

    &:placeholder {
        font-family: 'Lato', sans-serif;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        
    }
`;

const SearchButton = styled.button`
    width: 45px;
    height: 45px;
    background: #FFFFFF;
    border: 0 solid transparent;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const SBIcon = styled(BiSearchAlt)`
    width: 26px;
    height: 26px;
    color: #C6C6C6;
`;

const Menu = styled.div`
    width: 100px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ToggleIcon = styled(IoIosArrowUp)`
    width: 26px;
    height: 26px;
    color: #FFFFFF;
    cursor: pointer;
    transform: rotate(${props => props.hidden});
`;

const ProfileImage = styled.img`
    width: 53px;
    height: 53px;
    border-radius: 50%;
`;

const MenuContainer = styled.div`
    width: 125px;
    height: fit-content;
    background: #171717;
    border-bottom-left-radius: 20px;
    position: fixed;
    top: 72px;
    right: 0px;
    display: ${props => props.display};
    justify-content: center;
    align-items: center;

    h1 {
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        font-size: 17px;
        color: #FFFFFF;
        padding: 18px;
        cursor: pointer;
    }
`;