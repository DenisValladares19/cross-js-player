import { MoreOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'
import { FC } from 'react'
import styled from 'styled-components'
import CustomImage from './Image'

interface CardDisplayProps {
    imageSrc: string
    title: string
    author: string
    videoId: string
}

const CardDisplay: FC<CardDisplayProps> = (props) => {
    const { author, imageSrc, title } = props
    return (
        <Wrapper>
            <div className="container-info">
                <CustomImage className="portada" src={imageSrc} alt={title} />
                <div className="container-item">
                    <div className="title">{title}</div>
                    <div className="description">{author}</div>
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

        .portada {
            width: 45px;
            height: 45px;
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
