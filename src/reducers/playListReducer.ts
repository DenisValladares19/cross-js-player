import { Dispatch } from 'react'
import {
    StatePlayList,
    ActionPlayList,
    TypeActionPlayList,
} from './../interfaces/StatePlayList'

export const playList: StatePlayList = {
    list: [],
    showReproductor: true,
}

export const InitialPlayList: [StatePlayList, Dispatch<ActionPlayList>] = [
    playList,
    (action: ActionPlayList) => {},
]

export function playListReducer(
    state: StatePlayList,
    action: ActionPlayList
): StatePlayList {
    switch (action.type) {
        case TypeActionPlayList.ADD_PLAYLIST:
            return {
                ...state,
                list: action.payload.list || [],
            }

        case TypeActionPlayList.ADD_SINGLE_ITEM: {
            if (
                state.list.find(
                    (item) =>
                        item.id.videoId === action.payload.item?.id.videoId
                )
            ) {
                return state
            }

            if (!action.payload.item) {
                return state
            }

            return {
                ...state,
                list: [...state.list, action.payload.item],
            }
        }

        case TypeActionPlayList.REMOVE_PLAYLIST:
            return {
                ...state,
                list: state.list.filter((item) => {
                    if (action.payload.item) {
                        return (
                            item.id.videoId !== action.payload.item.id.videoId
                        )
                    }
                    return true
                }),
            }

        case TypeActionPlayList.CLEAR_PLAYLIST:
            return {
                ...state,
                list: [],
            }

        case TypeActionPlayList.SET_SHOW_REPRODUCTOR:
            return {
                ...state,
                showReproductor: action.payload.showReproductor ?? false,
            }

        default:
            return state
    }
}
