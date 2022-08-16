import { Item } from './ResultSearch'

export interface StatePlayList {
    list: ItemPlayList[]
    showReproductor: boolean
}

export interface ItemPlayList {
    isActive: boolean
    item: Item
}

export enum TypeActionPlayList {
    ADD_PLAYLIST = 'ADD_PLAYLIST',
    ADD_SINGLE_ITEM = 'ADD_SINGLE_ITEM',
    REMOVE_PLAYLIST = 'REMOVE_PLAYLIST',
    CLEAR_PLAYLIST = 'CLEAR_PLAYLIST',
    SET_SHOW_REPRODUCTOR = 'SET_SHOW_REPRODUCTOR',
}

export interface ActionPlayList {
    type: TypeActionPlayList
    payload: {
        list?: ItemPlayList[]
        item?: ItemPlayList
        showReproductor?: boolean
    }
}
