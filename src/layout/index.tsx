import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import BottomMenu from './BottomMenu'
import Header from './Header'

interface LayoutProps {
    children: JSX.Element | JSX.Element[]
    hiddenHeader?: boolean
    hiddenBottomMenu?: boolean
}

type flagProps = boolean | undefined

const calculateHeight = (
    hiddenHeader: flagProps,
    hiddenBottomMenu: flagProps
) => {
    if (hiddenHeader && hiddenBottomMenu) {
        return '100vh'
    }

    if (hiddenHeader) {
        return 'calc(100vh - 60px)'
    }

    if (hiddenBottomMenu) {
        return 'calc(100vh - 104px)'
    }

    return 'calc(100vh - 104px - 60px)'
}

const Layout = (props: LayoutProps) => {
    const { pathname } = useLocation()

    return (
        <Wrapper>
            {(pathname === '/search' ? false : !props.hiddenHeader) && (
                <Header />
            )}
            <Main
                hiddenHeader={props.hiddenHeader || pathname === '/search'}
                hiddenBottomMenu={props.hiddenBottomMenu}
            >
                {props.children}
            </Main>
            {!props.hiddenBottomMenu && <BottomMenu />}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`

const Main = styled.div<Omit<LayoutProps, 'children'>>`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: ${({ hiddenHeader, hiddenBottomMenu }) =>
        calculateHeight(hiddenHeader, hiddenBottomMenu)};
    overflow-y: auto;
    padding: 0 20px;
`

export default Layout
