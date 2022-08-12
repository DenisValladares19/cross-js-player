import {
    CaretRightFilled,
    StepBackwardOutlined,
    StepForwardOutlined,
} from '@ant-design/icons'
import styled from 'styled-components'

const Controls = () => {
    return (
        <Wrapper>
            <StepBackwardOutlined className="previus" />
            <div className="button">
                <CaretRightFilled className="play" />
            </div>
            <StepForwardOutlined className="next" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px 0px;

    .button {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        background-color: var(--secondary-color);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 50px;

        .play {
            margin-left: 10px;
        }
    }

    .previus,
    .next {
        font-size: 40px;
        cursor: pointer;
    }

    .previus {
        margin-right: 15px;
    }

    .next {
        margin-left: 15px;
    }
`

export default Controls
