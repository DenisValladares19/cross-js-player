import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Item, ResultSearch } from '@root/interfaces/ResultSearch'
import { truncate } from '@helpers/string-utils'
import { TypeActionSearch } from '@root/interfaces/StateSearch'

// components and hooks
import Avatar from '@components/Avatar'
import Input from '@components/Input'
import useApi from '@hooks/useApi'
import EmptySearchImage from '@components/EmptySearchImage'
import CardDisplay from '@components/CardDisplay'
import useWindowSize from '@hooks/useWindowSize'
import useMusicContext from '@hooks/useMusicContext'
import InfinityScroll from '@components/InfinityScroll'

// assets
import backIcon from '@assets/icon/back.svg'
import { deleteRepeteInArray } from '@helpers/array-utils'

const Search = () => {
    const { data, fetchData } = useApi<ResultSearch>()
    const [delayTimer, setDelayTimer] = useState<NodeJS.Timeout>()
    const { width: widthWindow } = useWindowSize()
    const { search, dispatchSearch } = useMusicContext()
    const [isLoadMore, setIsLoadMore] = useState<boolean>(false)
    const [nextPage, setNextPage] = useState<string>('')

    useEffect(() => {
        return () => {
            clearTimeout(delayTimer)
        }
    }, [])

    useEffect(() => {
        if (!data.isLoading && data.isSuccess) {
            if (data.data && data.data.items.length > 0) {
                setNextPage(data.data.nextPageToken)
                if (isLoadMore && search.listItems) {
                    const temp = [...search.listItems, ...data.data.items]
                    dispatchSearch({
                        type: TypeActionSearch.SET_LIST_ITEMS,
                        payload: {
                            listItems: deleteRepeteInArray(
                                temp,
                                'id',
                                'videoId'
                            ),
                        },
                    })

                    if (delayTimer) {
                        setDelayTimer(undefined)
                    }
                } else {
                    dispatchSearch({
                        type: TypeActionSearch.SET_LIST_ITEMS,
                        payload: { listItems: data.data.items },
                    })
                }
            }
        } else if (!data.isLoading && data.isError) {
            dispatchSearch({
                type: TypeActionSearch.SET_LIST_ITEMS,
                payload: { listItems: [] },
            })
        }
    }, [data])

    const handleSearch = (value: string) => {
        setIsLoadMore(false)
        clearTimeout(delayTimer)
        dispatchSearch({
            type: TypeActionSearch.CHANGE_SEARCH,
            payload: { search: value },
        })

        if (!value || value === '') {
            dispatchSearch({
                type: TypeActionSearch.SET_LIST_ITEMS,
                payload: { listItems: [] },
            })
        }
        setDelayTimer(
            setTimeout(() => {
                fetchData(`search?q=${value}`)
            }, 1000)
        )
    }

    const handleNextPage = () => {
        // !TODO: Pendiente porque hay un bug se hacen bastante peticiones a la vez
        console.log('handleNextPage [pendiente por bug]')
        // clearTimeout(delayTimer)
        // setDelayTimer(
        //     setTimeout(() => {
        //         setIsLoadMore(true)
        //         fetchData(`search?q=${search.search}&nextPageToken=${nextPage}`)
        //     }, 500)
        // )
    }

    const getSizetitle = (width: number | undefined): number => {
        if (!width) {
            return innerWidth / 12
        }
        return width / 12
    }

    const getHasError = (): boolean => {
        if (!search.listItems) {
            return false
        }

        if (!data.data?.pageInfo.totalResults) {
            return false
        }
        const { totalResults, resultsPerPage } = data.data.pageInfo
        const total = search.listItems.length + resultsPerPage

        return total < totalResults
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
                        value={search.search || ''}
                        setValue={handleSearch}
                        loading={!isLoadMore && data?.isLoading}
                    />
                </div>
                <Avatar />
            </div>
            {search.listItems && search.listItems.length > 0 && (
                <InfinityScroll
                    className="container-cards"
                    hasMore={getHasError()}
                    fetchMore={handleNextPage}
                    isLoading={isLoadMore && data.isLoading}
                    setValue={setIsLoadMore}
                >
                    {search.listItems.map((item: Item) => (
                        <CardDisplay
                            author={item.snippet.channelTitle}
                            title={truncate(
                                item.snippet.title,
                                getSizetitle(widthWindow)
                            )}
                            imageSrc={item.snippet.thumbnails.medium.url}
                            videoId={item.id.videoId}
                            key={item.id.videoId}
                        />
                    ))}
                </InfinityScroll>
            )}

            {search.listItems && search.listItems.length === 0 ? (
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
    height: calc(100vh - 60px);

    .container-cards {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: calc(100% - 74px - 60px);
        overflow-y: auto;
        &::-webkit-scrollbar {
            display: none;
        }
    }

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
