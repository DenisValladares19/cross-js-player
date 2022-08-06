import styled from 'styled-components'

// assets
import homeIcon from '@assets/icon/home.svg'
import searchIcon from '@assets/icon/search.svg'
import folderIcon from '@assets/icon/folder.svg'
import eqIcon from '@assets/icon/eq.svg'
import { Link, useLocation } from 'react-router-dom'

const BottomMenu = () => {
    const { pathname } = useLocation()

    return (
        <Wrapper>
            <Link to="/">
                <div className={`item ${pathname === '/' ? 'active' : ''}`}>
                    <img src={homeIcon} alt="Inicio" />
                    <p>Inicio</p>
                </div>
            </Link>

            <Link to="/search">
                <div
                    className={`item ${pathname === '/search' ? 'active' : ''}`}
                >
                    <img src={searchIcon} alt="Buscar" />
                    <p>Buscar</p>
                </div>
            </Link>

            <Link to="/local">
                <div
                    className={`item ${pathname === '/local' ? 'active' : ''}`}
                >
                    <img src={folderIcon} alt="Local" />
                    <p>Local</p>
                </div>
            </Link>

            <Link to="/equalizer">
                <div
                    className={`item ${
                        pathname === '/equalizer' ? 'active' : ''
                    }`}
                >
                    <img src={eqIcon} alt="Ecualizador" />
                    <p>Ecualizador</p>
                </div>
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 60px;
    background-color: var(--secondary-color);

    a {
        height: 100%;
    }

    .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 5px 15px;
        height: 100%;

        img {
            width: 20px;
            height: 20px;
        }

        p {
            font-size: 12px;
            font-weight: 400;
            color: var(--font-color);
            text-decoration: none;
        }

        :hover {
            cursor: pointer;
        }
    }

    .active {
        background-color: var(--primary-color);
    }
`

export default BottomMenu
