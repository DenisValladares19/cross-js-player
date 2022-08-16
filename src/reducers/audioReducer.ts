import { createFilter, createGain, getAudioContext } from '@helpers/audio-utils'
import {
    ActionAudio,
    StateAudio,
    TypeActionAudio,
    Frecuency,
} from '@root/interfaces/StateAudio'
import { Dispatch } from 'react'

const ctx = getAudioContext()

const frecuencies: Frecuency[] = [
    { frecuency: 32, vol: 0 },
    { frecuency: 63, vol: 0 },
    { frecuency: 125, vol: 0 },
    { frecuency: 250, vol: 0 },
    { frecuency: 500, vol: 0 },
    { frecuency: 1000, vol: 0 },
    { frecuency: 2000, vol: 0 },
    { frecuency: 4000, vol: 0 },
    { frecuency: 8000, vol: 0 },
    { frecuency: 16000, vol: 0 },
]

const ecualizer: (BiquadFilterNode | null)[] = frecuencies.map((f) =>
    createFilter('peaking', f.frecuency, f.vol, ctx)
)

export let intial: StateAudio = {
    activeEffect: true,
    context: ctx,
    ecualizer,
    frecuencies,
    gainHigh: createGain(1, ctx),
    gainLow: createGain(1, ctx),
    highFilter: null,
    lowFilter: null,
    volHigh: 1,
    volLow: 1,
    frecHigh: 300,
    frecLow: 300,
}

intial.highFilter = createFilter(
    'highpass',
    intial.frecHigh ?? 300,
    intial.volHigh ?? 1,
    ctx
)

intial.lowFilter = createFilter(
    'lowpass',
    intial.frecLow ?? 300,
    intial.volLow ?? 1,
    ctx
)

export type typeAudioMusic = [StateAudio, Dispatch<ActionAudio>]

export const initialAudio: [StateAudio, Dispatch<ActionAudio>] = [
    intial,
    (action: ActionAudio) => {},
]

export function audioReducer(
    state: StateAudio,
    action: ActionAudio
): StateAudio {
    switch (action.type) {
        case TypeActionAudio.SET_ACTIVE_EFFECT:
            return {
                ...state,
                activeEffect:
                    action.payload?.activeEffect ?? state.activeEffect,
            }

        case TypeActionAudio.SET_CONTEXT:
            return {
                ...state,
                context: action.payload?.context ?? state.context,
            }

        case TypeActionAudio.SET_EQUALIZER:
            return {
                ...state,
                ecualizer: action.payload?.ecualizer ?? state.ecualizer,
            }

        case TypeActionAudio.SET_GAIN_LOW:
            return {
                ...state,
                gainLow: action.payload?.gainLow ?? state.gainLow,
            }

        case TypeActionAudio.SET_GAIN_HIGH:
            return {
                ...state,
                gainHigh: action.payload?.gainHigh ?? state.gainHigh,
            }

        case TypeActionAudio.SET_LOW_FILTER:
            return {
                ...state,
                lowFilter: action.payload?.lowFilter ?? state.lowFilter,
            }

        case TypeActionAudio.SET_HIGH_FILTER:
            return {
                ...state,
                highFilter: action.payload?.highFilter ?? state.highFilter,
            }

        case TypeActionAudio.SET_FRECUENCIES:
            return {
                ...state,
                frecuencies: action.payload?.frecuencies ?? state.frecuencies,
            }

        case TypeActionAudio.RESET_FRECUENCIES:
            return {
                ...state,
                frecuencies: [],
            }

        case TypeActionAudio.SET_VOL_HIGH:
            return {
                ...state,
                volHigh: action.payload?.volHigh ?? state.volHigh,
            }

        case TypeActionAudio.SET_VOL_LOW:
            return {
                ...state,
                volLow: action.payload?.volLow ?? state.volLow,
            }

        case TypeActionAudio.SET_FREC_HIGH:
            return {
                ...state,
                frecHigh: action.payload?.frecHigh ?? state.frecHigh,
            }

        case TypeActionAudio.SET_FREC_LOW:
            return {
                ...state,
                frecLow: action.payload?.frecLow ?? state.frecLow,
            }

        default:
            return state
    }
}
