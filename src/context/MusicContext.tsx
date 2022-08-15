import { ActionAudio, StateAudio } from '@root/interfaces/StateAudio'
import { ActionPlayList, StatePlayList } from '@root/interfaces/StatePlayList'
import { ActionSearch, StateSearch } from '@root/interfaces/StateSearch'
import { createContext, Dispatch, FC, useReducer } from 'react'
import {
    audioReducer,
    initialAudio,
    intial as StateAudioInitial,
} from '@root/reducers/audioReducer'
import {
    InitialPlayList,
    playListReducer,
    playList as StatePlayListInitial,
} from '@root/reducers/playListReducer'
import searchReducer, {
    initialSearch as StateSearchInitial,
    search as InitialStateContext,
} from '@root/reducers/searchReducer'

interface MusicContextData {
    search: [StateSearch, Dispatch<ActionSearch>]
    playList: [StatePlayList, Dispatch<ActionPlayList>]
    audio: [StateAudio, Dispatch<ActionAudio>]
}

const initialMusicContext = {
    search: InitialStateContext,
    playList: InitialPlayList,
    audio: initialAudio,
}

const MusicContext = createContext<MusicContextData>(initialMusicContext)

interface MusicProviderProps {
    children: JSX.Element | JSX.Element[]
}

const MusicProvider: FC<MusicProviderProps> = ({ children }) => {
    const [audio, dispatchAudio] = useReducer(audioReducer, StateAudioInitial)
    const [search, dispatchSearch] = useReducer(
        searchReducer,
        StateSearchInitial
    )
    const [playList, dispatchPlayList] = useReducer(
        playListReducer,
        StatePlayListInitial
    )

    return (
        <MusicContext.Provider
            value={{
                search: [search, dispatchSearch],
                playList: [playList, dispatchPlayList],
                audio: [audio, dispatchAudio],
            }}
        >
            {children}
        </MusicContext.Provider>
    )
}

export { MusicProvider, MusicContext }
