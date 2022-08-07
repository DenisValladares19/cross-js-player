import styled from 'styled-components'

// assets
import avatar from '@assets/img/avatar.png'

const Avatar = () => {
    return (
        <Wrapper>
            <img src={avatar} alt="Avatar" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: var(--secondary-color);
    border: 2px solid var(--font-color);
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export default Avatar
