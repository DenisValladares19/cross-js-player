export type typeFilter =
    | 'lowpass'
    | 'highpass'
    | 'bandpass'
    | 'lowshelf'
    | 'highshelf'
    | 'peaking'
    | 'notch'
    | 'allpass'

const getAudioContext = () => {
    if (typeof window !== 'undefined') {
        AudioContext = window.AudioContext || window.webkitAudioContext
        return new AudioContext()
    }
    return null
}
const createFilter = (type: typeFilter, frecuency: number, vol: number) => {
    const audioContext = getAudioContext()
    if (audioContext) {
        const filter = audioContext.createBiquadFilter()
        filter.type = type
        filter.frequency.value = frecuency
        filter.gain.value = vol

        if (type === 'peaking') {
            filter.Q.value = 1.4
        }

        return filter
    }
    return null
}

const createGain = (vol: number) => {
    const audioContext = getAudioContext()
    if (audioContext) {
        const gain = audioContext.createGain()
        gain.gain.value = vol
        return gain
    }
    return null
}

export { createFilter, createGain, getAudioContext }
