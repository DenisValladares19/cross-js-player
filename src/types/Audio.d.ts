export {}
declare global {
    interface Window {
        AudioContext: typeof AudioContext
        webkitAudioContext: typeof AudioContext
    }
}
