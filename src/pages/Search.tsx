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
import EmptySearchImage from '@components/EmptySearchImage'
import CardDisplay from '@components/CardDisplay'

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

            {results.length > 0
                ? results.map((item: Item) => (
                      <CardDisplay
                          author={item.snippet.channelTitle}
                          title={item.snippet.title}
                          imageSrc={item.snippet.thumbnails.medium.url}
                          videoId={item.id.videoId}
                      />
                  ))
                : null}

            {!results || results.length === 0 ? (
                <div className="container-empty">
                    <EmptySearchImage />
                    <div className="label-empty">
                        Que estamos buscando ahora.
                    </div>
                </div>
            ) : null}
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

    .container-empty {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: calc(100vh - 115px - 60px);

        .label-empty {
            font-size: 14px;
            opacity: 0.7;
            margin-top: 20px;
        }
    }
`

export default Search
