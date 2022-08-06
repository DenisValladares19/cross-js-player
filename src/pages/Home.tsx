import { motion } from 'framer-motion'

const Home = () => {
    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 1, type: 'spring' }}
        >
            Home
        </motion.div>
    )
}

export default Home
