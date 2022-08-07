import { useEffect, useReducer } from 'react'
import typeStateFetch from '@root/interfaces/TypeStateFetch'
import ResponseApi from '@root/interfaces/ResponseApi'

const initialState: typeStateFetch = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
    data: null,
}

interface typeAction {
    type: 'INIT' | 'SUCCESS' | 'ERROR'
    payload?: any
}

const reducerApi = (
    state: typeStateFetch,
    action: typeAction
): typeStateFetch => {
    switch (action.type) {
        case 'INIT':
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
                isError: false,
            }

        case 'SUCCESS':
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: false,
                message: action.payload.messgae,
                data: action.payload.data,
            }

        case 'ERROR':
            return {
                ...state,
                isError: true,
                isLoading: false,
                isSuccess: false,
                message: action.payload.message,
            }

        default:
            return {
                ...state,
            }
    }
}

interface typeRequest {
    method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH'
    url: string
    data?: any
}

const useApi = (value: string | typeRequest) => {
    const [state, dispatch] = useReducer(reducerApi, initialState)

    useEffect(() => {
        if (value) {
            if (typeof value === 'string') {
                request({
                    url: value,
                    method: 'GET',
                    data: {},
                })
            } else {
                request(value)
            }
        }
    }, [])

    const request = async (config: typeRequest) => {
        try {
            dispatch({ type: 'INIT' })
            if (['POST', 'PUT'].includes(config.method)) {
                config.data = JSON.stringify(config.data || {})
            }

            const response = await fetch(config.url, {
                body: config.data,
                method: config.method,
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const data: ResponseApi<any> = await response.json()

            if (data.status === 200) {
                dispatch({
                    type: 'SUCCESS',
                    payload: {
                        data: data.data,
                        message: data.message,
                    },
                })
            } else {
                dispatch({ type: 'ERROR', payload: { message: data.message } })
            }
        } catch (error) {
            dispatch({
                type: 'ERROR',
                payload: {
                    message: 'Algo salio mal, vuelve a intetar mas tarde',
                },
            })
        }
    }

    return [state, request]
}

export default useApi
