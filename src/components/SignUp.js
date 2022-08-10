import styled from "styled-components"

export default function SignUp() {
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
                <form>
                    <input placeholder="e-mail" />
                    <input placeholder="password" />
                    <input placeholder="username" />
                    <input placeholder="picture url" />
                    <button>Sign Up</button>
                </form>
                <p>Switch back to log in</p>
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
        font-size: 20px;
        text-decoration: underline;
    }
`