import { Item } from './ResultSearch'

export interface StateSearch {
    search: string | undefined
    listItems: Item[] | undefined
}

export enum TypeActionSearch {
    'CHANGE_SEARCH' = 'CHANGE_SEARCH',
    'SET_LIST_ITEMS' = 'SET_LIST_ITEMS',
    'CLEAN' = 'CLEAN',
}

export interface ActionSearch {
    type: TypeActionSearch
    payload?: {
        search?: string
        listItems?: Item[]
    }
}
