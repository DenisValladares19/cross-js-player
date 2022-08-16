import { MusicContext } from '@root/context/MusicContext'
import { useContext } from 'react'

const useAudio = () => {
    const { audio } = useContext(MusicContext)

    return audio
}

export default useAudio
