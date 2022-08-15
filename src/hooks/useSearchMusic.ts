import { MusicContext } from '@root/context/MusicContext'
import { useContext } from 'react'

const useSearchMusic = () => {
    const { search } = useContext(MusicContext)

    return search
}

export default useSearchMusic
