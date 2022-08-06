import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

// assets
import homeIcon from '@assets/icon/home.svg'
import searchIcon from '@assets/icon/search.svg'
import folderIcon from '@assets/icon/folder.svg'
import eqIcon from '@assets/icon/eq.svg'

const BottomMenu = () => {
    const { pathname } = useLocation()

    return (
        <Wrapper layout>
            <Link to="/" key="/">
                <motion.div
                    className={`item ${pathname === '/' ? 'active' : ''}`}
                    initial={{ opacity: 0.5 }}
                    transition={{ duration: 1 }}
                    animate={{
                        opacity: 1,
                    }}
                >
                    <img src={homeIcon} alt="Inicio" />
                    <p>Inicio</p>
                </motion.div>
            </Link>

            <Link to="/search" key="/search">
                <motion.div
                    className={`item ${pathname === '/search' ? 'active' : ''}`}
                    initial={{ opacity: 0.5 }}
                    transition={{ duration: 1 }}
                    animate={{
                        opacity: 1,
                    }}
                >
                    <img src={searchIcon} alt="Buscar" />
                    <p>Buscar</p>
                </motion.div>
            </Link>

            <Link to="/local" key="/local">
                <motion.div
                    className={`item ${pathname === '/local' ? 'active' : ''}`}
                    initial={{ opacity: 0.5 }}
                    transition={{ duration: 1 }}
                    animate={{
                        opacity: 1,
                    }}
                >
                    <img src={folderIcon} alt="Local" />
                    <p>Local</p>
                </motion.div>
            </Link>

            <Link to="/equalizer" key="equalizer">
                <motion.div
                    className={`item ${
                        pathname === '/equalizer' ? 'active' : ''
                    }`}
                    initial={{ opacity: 0.5 }}
                    transition={{ duration: 1 }}
                    animate={{
                        opacity: 1,
                    }}
                >
                    <img src={eqIcon} alt="Ecualizador" />
                    <p>Ecualizador</p>
                </motion.div>
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled(motion.div)`
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
        transition: background-color 0.3s ease-in-out;

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
