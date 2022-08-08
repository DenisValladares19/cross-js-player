/**
 * Funcion para eliminar objetos repetidos en un array
 * debes de pasar por parametros una lista
 * debes pasar la key por la cual quieres filtrar o la key
 * que esta repetida para asi poder eliminarla
 * @param {Array} lista Lista con objetos repetidos
 * @param {String} firstKey
 * @param {String} secondKey
 * @returns {Array<Object>}
 */
export function deleteRepeteInArray<T>(
    lista: T[],
    firstKey: string = '',
    secondKey: string = ''
) {
    try {
        if (!(Array.isArray(lista) && lista.length > 0))
            throw new Error('lista debe de ser un array, y no debe estar vacia')
        let list: any[] = lista.map((item: any) => {
            if (firstKey !== '' && secondKey !== '') {
                return [item[firstKey][secondKey], item]
            } else if (firstKey !== '') {
                return [item[firstKey], item]
            } else {
                return [JSON.stringify(item), item]
            }
        })

        let mapList = new Map<string, T>(list)
        return [...mapList.values()]
    } catch (error) {
        console.error(error)
        return []
    }
}
