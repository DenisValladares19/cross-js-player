interface typeStateFetch<T extends Object> {
    isLoading: boolean
    isSuccess: boolean
    isError: boolean
    message: string | undefined | null
    data: T | null | undefined
}

export default typeStateFetch
