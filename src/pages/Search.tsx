import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ResultSearch, Item } from '@root/interfaces/ResultSearch'

// components and hooks
import Avatar from '@components/Avatar'
import Input from '@components/Input'
import useApi from '@hooks/useApi'

// assets
import backIcon from '@assets/icon/back.svg'
import { deleteRepeteInArray } from '@helpers/array-utils'

const Search = () => {
    const [search, setSearch] = useState<string>()
    const { data, fetchData } = useApi<ResultSearch>()
    const [results, setResults] = useState<Item[]>([])
    const [delayTimer, setDelayTimer] = useState<NodeJS.Timeout>()

    useEffect(() => {
        return () => {
            clearTimeout(delayTimer)
        }
    }, [])

    useEffect(() => {
        console.log('estado => ', data)

        if (!data.isLoading && data.isSuccess) {
            console.log('data => ', data)
            if (data.data && data.data.items.length > 0) {
                // let newResult = [...results, ...data.data?.items]
                // setResults(deleteRepeteInArray(newResult, 'id', 'videoId'))
                setResults([...data.data.items])
            }
        }
    }, [data])

    const handleSearch = (value: string) => {
        clearTimeout(delayTimer)
        setSearch(value)
        setDelayTimer(
            setTimeout(() => {
                fetchData(`search?q=${value}`)
            }, 1000)
        )
    }

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
                        setValue={handleSearch}
                        loading={data?.isLoading}
                    />
                </div>
                <Avatar />
            </div>

            {JSON.stringify(results)}
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
