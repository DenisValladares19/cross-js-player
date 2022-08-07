import { LoadingOutlined } from '@ant-design/icons'
import styled from 'styled-components'

interface InputProps {
    loading?: boolean
    value?: any
    setValue?: (value: any) => void
    placeHolder?: string
    type?: 'text' | 'number' | 'tel' | 'email'
}

const Input = (props: InputProps) => {
    return (
        <Wrapper>
            <input
                placeholder={props.placeHolder}
                value={props.value ? props.value : null}
                onChange={(e) =>
                    props.setValue ? props.setValue(e.target.value) : null
                }
                type={props.type ? props.type : 'text'}
            />
            {props.loading && <Icon />}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--secondary-color);
    height: 35px;
    border-radius: 20px;
    padding: 5px 20px;
    width: 100%;

    input {
        height: 100%;
        background-color: transparent;
        outline: none;
        border: none;
        color: var(--font-color);
        font-size: 16px;
        width: 100%;
    }
`

const Icon = styled(LoadingOutlined)`
    margin-left: 10px;
`

export default Input
