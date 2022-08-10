import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './layout'

// pages are imported here
import Home from '@pages/Home'
import Search from '@pages/Search'
import Local from '@pages/Local'
import Equalizer from '@pages/Equalizer'
import { MusicProvider } from './context/MusicContext'

function App() {
    return (
        <Router>
            <MusicProvider>
                <Layout>
                    <AnimatePresence>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/search" element={<Search />} />
                            <Route path="local" element={<Local />} />
                            <Route path="equalizer" element={<Equalizer />} />
                        </Routes>
                    </AnimatePresence>
                </Layout>
            </MusicProvider>
        </Router>
    )
}

export default App
