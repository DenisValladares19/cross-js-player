import { MusicContext } from '@root/context/MusicContext'
import { useContext } from 'react'

const usePlayList = () => {
    const { playList } = useContext(MusicContext)

    return playList
}

export default usePlayList
