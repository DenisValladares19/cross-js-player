import { motion } from 'framer-motion'

import SongCard from '@components/SongCard'

interface ISong {
    imgSong: string
    titleSong: string
    artistSong: string
    durationSong: string
    onClick: (song: any) => void
}

const Songs: ISong[] = [
    {
        imgSong:
            'https://thewichitan.com/wp-content/uploads/2022/05/Bad-Bunny-Un-Verano-Sin-Ti-1.jpeg',
        titleSong: 'Song 1',
        artistSong: 'Artist 1',
        durationSong: '3:00',
        onClick: () => {},
    },
    {
        imgSong:
            'https://thewichitan.com/wp-content/uploads/2022/05/Bad-Bunny-Un-Verano-Sin-Ti-1.jpeg',
        titleSong: 'Song 2',
        artistSong: 'Artist 2',
        durationSong: '3:00',
        onClick: () => {},
    },
]

const Home = () => {
    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 1, type: 'spring' }}
        >
            <SongCard songs={Songs} />
        </motion.div>
    )
}

export default Home
