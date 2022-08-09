import { MoreOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const CardDisplay = () => {
    return (
        <Wrapper>
            <div className="container-info">
                <img src="" alt="Portada" />
                <div className="container-item">
                    <div className="title">Me porto bonito</div>
                    <div className="description">Bad bunny</div>
                </div>
            </div>
            <div className="icon">
                <MoreOutlined />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    margin: 5px 0;

    .container-info {
        display: flex;
        align-items: center;
        height: 100%;

        img {
            width: 45px;
            height: 45px;
            object-fit: cover;
        }
    }

    .container-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 10px;

        .title {
            font-size: 14px;
            font-weight: bold;
            color: var(--font-color);
            margin-bottom: 0px;
            line-height: 20px;
        }

        .description {
            font-size: 12px;
            color: var(--font-color);
            margin-top: 0px;
            line-height: 20px;
        }
    }

    .icon {
        padding: 10px;
        color: var(--font-color);
        cursor: pointer;
        font-size: 20px;
        font-weight: bold;
    }
`

export default CardDisplay
