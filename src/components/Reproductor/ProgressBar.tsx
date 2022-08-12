import { formatDecimal } from '@helpers/number-utils'
import { FC } from 'react'
import styled from 'styled-components'

interface Props {
    className?: string
    currentTime: number
    duration: number
    progress: number
}

const ProgressBar: FC<Props> = (props) => {
    return (
        <Wrapper {...props}>
            <div className="progress-bar">
                <div className="progress"></div>
            </div>

            <div className="container-time">
                <div className="text">{formatDecimal(props.currentTime)}</div>
                <div className="text duration">
                    {formatDecimal(props.duration)}
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div<Props>`
    width: 100%;
    display: flex;
    flex-direction: column;

    .progress-bar {
        width: 100%;
        height: 5px;
        background-color: var(--secondary-color);
        border-radius: 2px;
        box-sizing: border-box;
    }

    .progress {
        width: ${(props) => props.progress}%;
        height: 100%;
        background-color: var(--font-color);
        position: relative;

        ::after {
            content: '';
            position: absolute;
            right: -6px;
            top: -3px;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: var(--font-color);
        }
    }

    .container-time {
        display: flex;
        justify-content: space-between;

        .text {
            font-size: 14px;
        }

        .duration {
            text-align: right;
        }
    }
`

export default ProgressBar
