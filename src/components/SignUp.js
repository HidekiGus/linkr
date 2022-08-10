import { useState } from "react";
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function SignUp() {
    const [user, setUser] = useState({email: "", password: "", name: "", image: ""});

    function checkFields(event) {
        event.preventDefault();

        if(!user.email || !user.password || !user.name) {
            return alert('Para prosseguir é necessário preencher corretamente o e-mail, password e username')
        }

        if(!user.image) {
            if(!window.confirm('Tem certeza que quer continuar sem imagem?\n\nLembre-se,\nnão será possível mudar isso posteriormente!')) {
                return
            }
        }
        sendNewUser();
    }

    function sendNewUser(event) {
        console.log('oi')
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
                    <input required placeholder="e-mail" type="email" value={user.email} onChange={e => setUser({...user, email: e.target.value})} />
                    <input required placeholder="password" type="password" value={user.password} onChange={e => setUser({...user, password: e.target.value})} />
                    <input required placeholder="username" value={user.name} onChange={e => setUser({...user, name: e.target.value})} />
                    <input placeholder="picture url" value={user.image} onChange={e => setUser({...user, image: e.target.value})} />
                    <button typeof="submit">Sign Up</button>
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

    h1 {
        font-size: 106px;
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
    box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);

    p {
        font-size: 43px;
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
    }

    button {
        background-color: #1877F2;
        color: #FFFFFF;
        height: 65px;
        font-size: 27px;
        border: none;
        border-radius: 6px;
        margin-bottom: 15px;
    }

    p {
        color: #FFFFFF;
        font-size: 20px;
        text-decoration: underline;
    }
`