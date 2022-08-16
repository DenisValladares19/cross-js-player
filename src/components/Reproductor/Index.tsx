import { motion } from 'framer-motion'
import { useState } from 'react'
import styled from 'styled-components'
import { DownOutlined } from '@ant-design/icons'
import Image from '@components/Image'
import ProgressBar from './ProgressBar'
import Controls from './Controls'
import PlayList from './PlayList'
import usePlayList from '@hooks/usePlayList'
import useApi from '@hooks/useApi'

const variants = {
    visible: {
        y: 0,
        transition: {
            duration: 1,
            type: 'lineal',
        },
    },
    hidden: {
        y: '100vh',
        transition: {
            duration: 1,
            type: 'lineal',
        },
    },
}

const Index = () => {
    const { statePlayList, setShow } = usePlayList()
    const [stateData, fetchData] = useApi()

    return (
        <Wrapper
            initial={{ y: '100vh' }}
            variants={variants}
            animate={statePlayList.showReproductor ? 'visible' : 'hidden'}
        >
            <ContainerTitle>
                <DownOutlined
                    className="icon"
                    onClick={() => setShow(!statePlayList.showReproductor)}
                />
                <div className="title">Reproduciendo</div>
            </ContainerTitle>

            <Image
                className="picture"
                alt="Portada"
                src="https://www.lahiguera.net/musicalia/artistas/bad_bunny/disco/12153/bad_bunny_un_verano_sin_ti-portada.jpg"
            />

            <div className="container-info">
                <div className="title">Un verano sin ti</div>
                <div className="author">Bad Bunny</div>
            </div>

            <ProgressBar
                className="time"
                currentTime={0.1}
                duration={3.3}
                progress={20}
            />

            <Controls />

            <PlayList />
        </Wrapper>
    )
}

const Wrapper = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: var(--primary-color);
    color: var(--font-color);
    padding: 20px;

    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;

    .picture {
        margin-top: 20px;
        width: 100%;
        height: calc(100vh - 390px);
    }

    .container-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;

        .title {
            font-size: 18px;
            font-weight: bold;
            line-height: 25px;
        }

        .author {
            font-size: 14px;
            line-height: 23px;
        }
    }

    .time {
        margin-top: 20px;
    }
`

const ContainerTitle = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    height: 30px;
    padding: 20px 0;

    .title {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        color: var(--font-color);
    }

    .icon {
        padding: 5px 0px;
        cursor: pointer;
        font-size: 16px;
    }
`
export default Index
