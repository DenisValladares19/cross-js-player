import { Item } from './ResultSearch'

export interface StatePlayList {
    list: Item[]
}

export enum TypeActionPlayList {
    ADD_PLAYLIST = 'ADD_PLAYLIST',
    ADD_SINGLE_ITEM = 'ADD_SINGLE_ITEM',
    REMOVE_PLAYLIST = 'REMOVE_PLAYLIST',
    CLEAR_PLAYLIST = 'CLEAR_PLAYLIST',
}

export interface ActionPlayList {
    type: TypeActionPlayList
    payload: {
        list?: Item[]
        item?: Item
    }
}
