import { useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import BottomMenu from './BottomMenu'
import Header from './Header'
import Reproductor from '@components/Reproductor/Index'

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
            <AnimatePresence>
                {(pathname === '/search' ? false : !props.hiddenHeader) && (
                    <Header />
                )}
            </AnimatePresence>
            <Main
                hiddenHeader={props.hiddenHeader || pathname === '/search'}
                hiddenBottomMenu={props.hiddenBottomMenu}
            >
                {props.children}
            </Main>
            {!props.hiddenBottomMenu && <BottomMenu />}
            <Reproductor />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    position: relative;
    overflow: hidden;
`

const Main = styled.div<Omit<LayoutProps, 'children'>>`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: ${({ hiddenHeader, hiddenBottomMenu }) =>
        calculateHeight(hiddenHeader, hiddenBottomMenu)};
    overflow-y: auto;
    padding: 0 20px;
    overflow-x: hidden;
`

export default Layout
