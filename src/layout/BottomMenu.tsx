import styled from 'styled-components'

// assets
import homeIcon from '@assets/icon/home.svg'
import searchIcon from '@assets/icon/search.svg'
import folderIcon from '@assets/icon/folder.svg'
import eqIcon from '@assets/icon/eq.svg'

const BottomMenu = () => {
    return (
        <Wrapper>
            <div className="item">
                <img src={homeIcon} alt="Inicio" />
                <p>Inicio</p>
            </div>

            <div className="item">
                <img src={searchIcon} alt="Buscar" />
                <p>Buscar</p>
            </div>

            <div className="item">
                <img src={folderIcon} alt="Local" />
                <p>Local</p>
            </div>

            <div className="item">
                <img src={eqIcon} alt="Ecualizador" />
                <p>Ecualizador</p>
            </div>
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
        }

        :hover {
            background-color: var(--primary-color);
            cursor: pointer;
        }
    }
`

export default BottomMenu
