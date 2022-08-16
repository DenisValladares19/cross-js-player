import { MusicContext } from '@root/context/MusicContext'
import {
    ItemPlayList,
    TypeActionPlayList,
} from '@root/interfaces/StatePlayList'
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

    const setItem = (item: ItemPlayList): void => {
        dispatch({
            type: TypeActionPlayList.ADD_SINGLE_ITEM,
            payload: {
                item,
            },
        })
    }

    return {
        statePlayList: state,
        dispatchPlayList: dispatch,
        setShow,
        setItem,
    }
}

export default usePlayList
