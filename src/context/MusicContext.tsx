import { ActionSearch, StateSearch } from '@root/interfaces/StateSearch'
import searchReducer from '@root/reducers/searchReducer'
import { createContext, Dispatch, FC, useContext, useReducer } from 'react'

interface MusicContextData {
    search: StateSearch
    dispatchSearch: Dispatch<ActionSearch>
}

const initialSearch: StateSearch = {
    search: '',
    listItems: [],
}

const initialMusicContext = {
    search: initialSearch,
    dispatchSearch: (action: ActionSearch) => {},
}

const MusicContext = createContext<MusicContextData>(initialMusicContext)

interface MusicProviderProps {
    children: JSX.Element | JSX.Element[]
}

const MusicProvider: FC<MusicProviderProps> = ({ children }) => {
    const [search, dispatchSearch] = useReducer(searchReducer, initialSearch)

    return (
        <MusicContext.Provider value={{ search, dispatchSearch }}>
            {children}
        </MusicContext.Provider>
    )
}

const useMusicContext = () => {
    const context = useContext(MusicContext)

    if (!context) {
        throw new Error('useMusicContext must be used within a MusicProvider')
    }

    return context
}

export { MusicProvider, useMusicContext }
