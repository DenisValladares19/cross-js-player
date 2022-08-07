interface ResponseApi<T> {
    status: number
    message: string
    data: T
}

export default ResponseApi
