export const formatDecimal = (
    value: number,
    decimalPlaces: number = 2
): string => {
    if (!value) {
        return '0'
    }

    if (isNaN(value) || !isFinite(value)) {
        return '0'
    }

    if (isNaN(Number(value))) {
        return '0'
    }

    return value.toFixed(decimalPlaces)
}
