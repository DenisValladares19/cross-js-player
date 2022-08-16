export interface Frecuency {
    vol: number
    frecuency: number
}

export interface StateAudio {
    context: AudioContext | null
    ecualizer: (BiquadFilterNode | null)[]
    gainLow: GainNode | null
    gainHigh: GainNode | null
    lowFilter: BiquadFilterNode | null
    highFilter: BiquadFilterNode | null
    frecuencies: Frecuency[] | null
    activeEffect: boolean | null
    volHigh: number | null
    volLow: number | null
    frecHigh: number | null
    frecLow: number | null
}

export enum TypeActionAudio {
    'SET_ACTIVE_EFFECT' = 'SET_ACTIVE_EFFECT',
    'SET_CONTEXT' = 'SET_CONTEXT',
    'SET_EQUALIZER' = 'SET_EQUALIZER',
    'SET_GAIN_LOW' = 'SET_GAIN_LOW',
    'SET_GAIN_HIGH' = 'SET_GAIN_HIGH',
    'SET_LOW_FILTER' = 'SET_LOW_FILTER',
    'SET_HIGH_FILTER' = 'SET_HIGH_FILTER',
    'SET_FRECUENCIES' = 'SET_FRECUENCIES',
    'RESET_FRECUENCIES' = 'RESET_FRECUENCIES',
    'SET_VOL_HIGH' = 'SET_VOL_HIGH',
    'SET_VOL_LOW' = 'SET_VOL_LOW',
    'SET_FREC_HIGH' = 'SET_FREC_HIGH',
    'SET_FREC_LOW' = 'SET_FREC_LOW',
}

export interface ActionAudio {
    type: TypeActionAudio
    payload?: {
        context?: AudioContext
        ecualizer?: BiquadFilterNode[]
        gainLow?: GainNode
        gainHigh?: GainNode
        lowFilter?: BiquadFilterNode
        highFilter?: BiquadFilterNode
        frecuencies?: Frecuency[]
        activeEffect?: boolean
        volHigh?: number
        volLow?: number
        frecHigh?: number
        frecLow?: number
    }
}
