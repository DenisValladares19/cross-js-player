import styled from 'styled-components'

// assets
import searchIcon from '@assets/icon/search.svg'
import avatar from '@assets/img/avatar.png'

const Header = () => {
    return (
        <Wrapper>
            <div className="name-app">Cross Js</div>
            <div className="container-avatar">
                <div className="search">
                    <img src={searchIcon} alt="Buscar" />
                </div>
                <div className="avatar">
                    <img src={avatar} alt="Avatar" />
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    padding-top: 40px;
    padding-bottom: 40px;

    .name-app {
        font-size: 24px;
        font-weight: 600;
    }

    .container-avatar {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .search img {
        width: 20px;
        height: 20px;
    }

    .search {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 5px;
    }

    .avatar {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: var(--secondary-color);
        border: 2px solid var(--font-color);
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`

export default Header
