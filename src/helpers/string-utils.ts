export const truncate = (value: string, size: number = 100): string => {
    if (!value) {
        return ''
    }

    if (value.length <= size) {
        return value
    }

    return value.substring(0, size) + '...'
}
