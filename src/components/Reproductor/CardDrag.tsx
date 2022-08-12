import CustomImage from '@components/Image'
import { FC } from 'react'
import styled from 'styled-components'

import dragIcon from '@assets/icon/drag.svg'

interface CardDragProps {
    imageSrc: string
    title: string
    author: string
    videoId: string
    showIcon?: boolean
}
const CardDrag: FC<CardDragProps> = (props) => {
    const { author, imageSrc, title, showIcon } = props
    return (
        <Wrapper>
            <div className="icon">
                {showIcon && <img src={dragIcon} alt="drag" />}
            </div>

            <div className="container">
                <CustomImage className="portada" src={imageSrc} alt={title} />
                <div className="container-item">
                    <div className="title">{title}</div>
                    <div className="description">{author}</div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    margin-bottom: 15px;

    .container {
        display: flex;
        align-items: center;
        height: 100%;

        .portada {
            width: 35px;
            height: 35px;
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
        padding: 0px 10px;

        img {
            width: 25px;
        }
    }
`

export default CardDrag
