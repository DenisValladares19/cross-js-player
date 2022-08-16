import { MusicContext } from '@root/context/MusicContext'
import { TypeActionPlayList } from '@root/interfaces/StatePlayList'
import { useContext } from 'react'

const usePlayList = () => {
    const { playList } = useContext(MusicContext)
    const [state, dispatch] = playList

    const setShow = (val: boolean | undefined): void => {
        dispatch({
            type: TypeActionPlayList.SET_SHOW_REPRODUCTOR,
            payload: {
                showReproductor: val,
            },
        })
    }

    return { statePlayList: state, dispatchPlayList: dispatch, setShow }
}

export default usePlayList
