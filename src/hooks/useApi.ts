import { useReducer } from 'react'
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

    const request = async (value: typeRequest) => {
        try {
            dispatch({ type: 'INIT' })
            if (['POST', 'PUT'].includes(value.method)) {
                value.data = JSON.stringify(value.data || {})
            }

            const response = await fetch(value.url, {
                body: value.data,
                method: value.method,
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
