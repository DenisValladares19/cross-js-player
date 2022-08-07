import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useState } from 'react'

// components
import Avatar from '@components/Avatar'
import Input from '@components/Input'

// assets
import backIcon from '@assets/icon/back.svg'

const Search = () => {
    const [search, setSearch] = useState<string>()
    return (
        <Wrapper
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 1, type: 'spring' }}
        >
            <div className="container-search">
                <div className="back">
                    <img src={backIcon} alt="Atras" />
                </div>
                <div className="input-search">
                    <Input
                        placeHolder="Buscar canción, artista..."
                        value={search}
                        setValue={setSearch}
                    />
                </div>
                <Avatar />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled(motion.div)`
    .container-search {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 40px 0;
    }

    .back {
        cursor: pointer;
    }

    .input-search {
        width: calc(100% - 60px);
    }
`

export default Search
