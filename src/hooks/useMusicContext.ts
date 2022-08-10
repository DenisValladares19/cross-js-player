import { MusicContext } from '@root/context/MusicContext'
import { useContext } from 'react'

const useMusicContext = () => {
    const context = useContext(MusicContext)

    if (!context) {
        throw new Error('useMusicContext must be used within a MusicProvider')
    }

    return context
}

export default useMusicContext
