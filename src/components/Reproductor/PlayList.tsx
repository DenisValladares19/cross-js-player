import { motion } from 'framer-motion'
import styled from 'styled-components'
import CardDrag from './CardDrag'

const PlayList = () => {
    return (
        <Wrapper>
            <div className="container-indicator">
                <div className="indicator"></div>
            </div>

            <CardDrag
                author="Bad bunny"
                title="Un verano si ti"
                imageSrc="https://www.lahiguera.net/musicalia/artistas/bad_bunny/disco/12153/bad_bunny_un_verano_sin_ti-portada.jpg"
                videoId="algun id"
            />
        </Wrapper>
    )
}

const Wrapper = styled(motion.div)`
    width: 100%;
    background-color: var(--secondary-color);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    height: 60px;
    padding: 0px 20px;

    .container-indicator {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 8px;
        margin-bottom: 5px;

        .indicator {
            width: 20px;
            height: 3px;
            background-color: var(--font-color);
            border-radius: 5px;
        }
    }
`
export default PlayList
