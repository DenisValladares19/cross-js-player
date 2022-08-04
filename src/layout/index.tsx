import styled from 'styled-components'
import BottomMenu from './BottomMenu'
import Header from './Header'

interface LayoutProps {
    children: JSX.Element | JSX.Element[]
}

const Layout = (props: LayoutProps) => {
    return (
        <Wrapper>
            <Header />
            <Main></Main>
            <BottomMenu />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`

const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: calc(100vh - 60px - 104px);
`

export default Layout
