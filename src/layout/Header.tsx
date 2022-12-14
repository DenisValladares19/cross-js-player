import styled from 'styled-components'
import { motion } from 'framer-motion'

// assets
import searchIcon from '@assets/icon/search.svg'
import Avatar from '@components/Avatar'

const Header = () => {
    return (
        <Wrapper>
            <div className="name-app">Cross Js</div>
            <div className="container-avatar">
                <div className="search">
                    <img src={searchIcon} alt="Buscar" />
                </div>
                <Avatar />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled(motion.div)`
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
        padding: 0 10px;
        height: 100%;
        cursor: pointer;
    }
`

export default Header
