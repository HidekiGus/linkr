import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import reqRoot from './reqRoot.js';

export default function SignUp() {
    const navigate = useNavigate();
    const [user, setUser] = useState({email: "", password: "", name: "", image: ""});
    const [disable, setDisable] = useState(false);

    function checkFields(event) {
        event.preventDefault();
        setDisable(true)

        if(!user.email || !user.password || !user.name) {
            setDisable(false)
            return alert(`Para prosseguir é necessário preencher\n${user.email ? '' : ' e-mail.'}${user.password ? '' : ' password.'}${user.name ? '' : ' username.'}`)
        }

        if(!user.image) {
            if(!window.confirm('Tem certeza que quer continuar sem imagem?\n\nLembre-se,\nnão será possível mudar isso posteriormente!')) {
                setDisable(false)
                return
            }
        }
        sendNewUser()
    }

    async function sendNewUser() {
        try {
            await axios.post(`${reqRoot}signup`, user);
            navigate('/')
        } catch (error) {
            setDisable(false)
            if(error.response.status === 409) {
                return alert('E-mail já cadastrado!')
            }
            console.log(error)
        }
    }

    return (
        <Container>
            <Brand>
                <div>
                    <h1>linkr</h1>
                    <p>save, share and discover</p>
                    <p>the best links on the web</p>
                </div>
            </Brand>
            <Form>
                <form onSubmit={checkFields}>
                    <input placeholder="e-mail" type="email" value={user.email} onChange={e => setUser({...user, email: e.target.value})} />
                    <input placeholder="password" type="password" value={user.password} onChange={e => setUser({...user, password: e.target.value})} />
                    <input placeholder="username" value={user.name} onChange={e => setUser({...user, name: e.target.value})} />
                    <input placeholder="picture url" value={user.image} onChange={e => setUser({...user, image: e.target.value})} />
                    <Button disabled={disable} typeof="submit">Sign Up</Button>
                </form>
                <Link to="/">
                    <p>Switch back to log in</p>
                </Link>
            </Form>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    min-height: 100vh;
    background-color: #333333;
    font-weight: 700;

    h1 {
        font-size: 106px;
        margin-bottom: 30px;
    }

    @media(max-width: 800px) {
        flex-direction: column;
        text-align: center;

        h1 {
            font-size: 76px;
            margin-bottom: 15px;
        }
    }
`
const Brand = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #151515;
    color: #ffffff;
    width: 100%;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 15px;

    p {
        font-size: 43px;
        margin-bottom: 15px;
    }

    @media(max-width: 800px) {
        p {
            font-size: 23px;
            margin-bottom: 7px;
        }
    }
`
const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    padding: 55px;

    form {
        display: flex;
        flex-direction: column;
        width: 430px;
    }

    input {
        height: 65px;
        font-size: 27px;
        border: none;
        border-radius: 6px;
        margin-bottom: 13px;
        padding-left: 17px;
        font-weight: 700;
    }

    button {
        background-color: #1877F2;
        color: #FFFFFF;
        height: 65px;
        font-size: 27px;
        border: none;
        border-radius: 6px;
        margin-bottom: 15px;
        font-weight: 700;
    }

    p {
        color: #FFFFFF;
        font-size: 20px;
        text-decoration: underline;
        font-weight: 400;
    }

    @media(max-width: 800px) {
        padding: 50px 23px 0px 23px;

        form {
            width: 100%;
        }

        input, button {
            font-size: 22px;
            height: 55px;
        }

        p {
            font-size: 17px;
        }
    }
`
const Button = styled.button`
    opacity: ${props => props.disabled ? 0.3 : 1};

&:hover {
    cursor: ${props => props.disabled ? 'default' : 'pointer'};
}
`