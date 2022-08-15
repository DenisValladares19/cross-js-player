import {
    ActionSearch,
    StateSearch,
    TypeActionSearch,
} from '@root/interfaces/StateSearch'
import { Dispatch } from 'react'

export const initialSearch: StateSearch = {
    search: '',
    listItems: [],
}

export const search: [StateSearch, Dispatch<ActionSearch>] = [
    initialSearch,
    (action: ActionSearch) => {},
]

function searchReducer(state: StateSearch, action: ActionSearch) {
    switch (action.type) {
        case TypeActionSearch.CHANGE_SEARCH:
            return {
                ...state,
                search: action.payload?.search,
            }
        case TypeActionSearch.SET_LIST_ITEMS:
            return {
                ...state,
                listItems: action.payload?.listItems,
            }
        case TypeActionSearch.CLEAN:
            return {
                ...state,
                listItems: [],
                search: '',
            }

        default:
            return state
    }
}

export default searchReducer
