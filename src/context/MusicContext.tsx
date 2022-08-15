import { ActionSearch, StateSearch } from '@root/interfaces/StateSearch'
import searchReducer from '@root/reducers/searchReducer'
import { createContext, Dispatch, FC, useReducer } from 'react'

interface MusicContextData {
    search: [StateSearch, Dispatch<ActionSearch>]
}

const initialSearch: StateSearch = {
    search: '',
    listItems: [],
}

const search: [StateSearch, Dispatch<ActionSearch>] = [
    initialSearch,
    (action: ActionSearch) => {},
]

const initialMusicContext = {
    search,
}

const MusicContext = createContext<MusicContextData>(initialMusicContext)

interface MusicProviderProps {
    children: JSX.Element | JSX.Element[]
}

const MusicProvider: FC<MusicProviderProps> = ({ children }) => {
    const [search, dispatchSearch] = useReducer(searchReducer, initialSearch)

    return (
        <MusicContext.Provider value={{ search: [search, dispatchSearch] }}>
            {children}
        </MusicContext.Provider>
    )
}

export { MusicProvider, MusicContext }
