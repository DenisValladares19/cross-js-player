import { LoadingOutlined } from '@ant-design/icons'
import { FC, useEffect, useRef } from 'react'
import styled from 'styled-components'

interface InifinityScrollProps {
    children: JSX.Element | JSX.Element[] | null
    fetchMore?: () => void
    hasMore?: boolean
    isLoading?: boolean
    className?: string
    setValue?: (value: boolean) => void
}

const InfinityScroll: FC<InifinityScrollProps> = (props) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        ref.current?.addEventListener('scroll', handleScroll)

        return () => {
            ref.current?.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = ref.current!

        if (scrollTop + clientHeight >= scrollHeight) {
            if (props.hasMore && !props.isLoading) {
                console.log('fetchMore')
                if (props.setValue) {
                    props.setValue(false)
                }

                if (props.fetchMore) {
                    props.fetchMore()
                }

                setTimeout(() => {
                    ref.current!.scrollTop = scrollTop - 50
                }, 500)
            }
        }
    }

    console.log(
        'InfinityScroll [hasMore] => ',
        props.hasMore,
        ' [isLoading] => ',
        props.isLoading
    )

    return (
        <div className={props?.className} ref={ref}>
            {props.children}

            {props.isLoading && (
                <Icon>
                    <LoadingOutlined />
                </Icon>
            )}
        </div>
    )
}

const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;

    color: var(--font-color);
    font-size: 24px;
`

export default InfinityScroll
