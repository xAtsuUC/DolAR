class DolarUtil {

    /**
     * Obten una fecha con un formato especifico
     * @param {Date} date La fecha a aplicar el formato dd/mm/yyyy hh:mm.ss
     * @returns {string} La fecha con el formato aplicado
     * @example
     * console.log(formatDate()) // La fecha de hoy con el formato
     * console.log(formatDate(new Date(1679697415))) // 3/24/2023 7:36:55 PM
     */
    public formatDate(date?: Date): string {
        (!date) ? date = new Date() : date;
        return date.toLocaleDateString() + " " + date.toLocaleTimeString();
    }

    /**
     * Aplica un formato a un numero de tal modo que con un string devuelve un numero
     * @param value El valor a formatear
     * @param decimalPlaces La cantidad de decimales a usar
     * @returns El numero ya formateado
     * @example
     * console.log(formatNumber('123,45')) // '123.45'
     * console.log(formatNumber('123.430,45', 3)) // '123430.450'
     */
    public formatNumber(value:string, decimalPlaces?:number):string {
        let decimals = decimalPlaces || 2;
        let convertedValue = parseFloat(value.replace('.', '').replace(',', '.'))
        return !isNaN(convertedValue) ? convertedValue.toFixed(decimals) : 'No cotiza'
    }

    /**
     * Devuelve un objeto que contiene los valores de la cotización anual por mes.
     * @param evolucionAnual evolucionAnual Objeto que contiene el valor de cada mes del año.
     * @returns El objeto con los valores de la cotización de cada mes
     */
    public getEvolucion(evolucionAnual:object):EvolutionData {
        const now = new Date()
        const mesActual = now.getMonth() + 1

        let meses = []
        for (let i = 1; i <= Object.keys(evolucionAnual).length; i++) {
            meses.push({
                "anio": (i < mesActual ? now.getFullYear() : now.getFullYear() - 1).toString(),
                "mes": i.toString(),
                "valor": this.formatNumber(evolucionAnual[Object.keys(evolucionAnual)[i - 1]]._text).toString()
            })
        }
        meses = meses.sort((a, b) => a.anio - b.anio)

        const valores = {
            fecha: this.formatDate(),
            meses
        }

        return valores
    }
}

interface MonthlyEvolutionData {
    anio: string,
    mes: string,
    valor: string
}

interface EvolutionData {
    fecha: string,
    meses: MonthlyEvolutionData[]
}

export default DolarUtil;
export { MonthlyEvolutionData, EvolutionData }