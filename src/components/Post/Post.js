import styled from 'styled-components';

export default function Post({ post, action }) {
    return (
        <PostContainer onClick={action}>
            <PostUserPicture src={post.userImage} />
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

        </PostContainer>
    )
}

const PostContainer = styled.div`
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

const PostTextBoxes = styled.div`
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