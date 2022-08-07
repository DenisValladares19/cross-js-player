import { createContext, useContext, useState } from 'react'

interface typeCache {
    [key: string]: any
}

interface typeContext {
    cache: typeCache[] | undefined
    setCache: (value: typeCache[]) => void | undefined
}

interface PropsCacheProvider {
    children: JSX.Element | JSX.Element[]
}

const initial: typeContext = {
    cache: [],
    setCache: () => {},
}
const CacheContext = createContext(initial)

export const CacheProvider = (props: PropsCacheProvider) => {
    const [cache, setCache] = useState<typeCache[]>()
    return (
        <CacheContext.Provider value={{ cache, setCache }}>
            {props.children}
        </CacheContext.Provider>
    )
}

export const useCache = () => {
    const { cache, setCache } = useContext(CacheContext)
    return { cache, setCache }
}
