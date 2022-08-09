import { FC, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { LoadingOutlined, PictureOutlined } from '@ant-design/icons'

interface ImageProps {
    src: string
    alt: string
    className?: string
    width?: string
    height?: string
    loading?: boolean
}
const CustomImage: FC<ImageProps> = ({
    src,
    alt,
    className,
    width,
    height,
    loading: loadingProps,
}) => {
    const [loading, setLoading] = useState<boolean>()
    const [error, setError] = useState<boolean>()
    const [completed, setCompleted] = useState<boolean>()
    const ref = useRef<HTMLImageElement>(null)

    useEffect(() => {
        if (!completed && src) {
            setLoading(true)
            setError(false)
            hiddenImage()
            let img = new Image()
            img.onload = function () {
                setLoading(false)
                setCompleted(true)
                ref.current!.src = this!.src
                showImage()
            }

            img.onerror = function () {
                setLoading(false)
                setError(true)
                setCompleted(true)
            }

            img.src = src
        }

        if (!src) {
            setLoading(false)
            setError(true)
            setCompleted(false)
            hiddenImage()
        }
    }, [src])

    const hiddenImage = () => {
        if (ref.current) {
            ref.current.style.visibility = 'hidden'
            ref.current.style.width = '0px'
        }
    }

    const showImage = () => {
        if (ref.current) {
            ref.current.style.visibility = 'visible'
            ref.current.style.width = '100%'
        }
    }

    return (
        <Wrapper className={className} style={{ width, height }}>
            <img src={src} ref={ref} alt={alt} />
            {loading || loadingProps ? <LoadingOutlined /> : null}
            {!loading && error ? <PictureOutlined /> : null}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: var(--secondary-color);
    color: var(--font-color);
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export default CustomImage
