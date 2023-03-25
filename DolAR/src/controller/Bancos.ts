import DolAR from ".."
import DolarSiService from "../lib/DolarSiService"
import DolarUtil from "../lib/DolarUtils"

/**
 * @class Bancos test
 */
class Bancos extends DolAR {
    dolarSiService: DolarSiService
    dolarUtil: DolarUtil
    casasID: { 0: string; 1: string; 2: string; 3: string; 4: string; 5: string; 6: string }

    constructor() {
        super()
        this.dolarSiService = this.getService()
        this.dolarUtil = this.getDolarUtil()
        this.casasID = {
            0: 'Capital_Federal',
            1: 'Mar_del_Plata',
            2: 'Rosario',
            3: 'Mendoza',
            4: 'Cordoba',
            5: 'La_Plata',
            6: 'Tucuman'
          };
    }

    public getPreciosDolar = async (sector:number, casa:string, res) => {
        try {

            const data = await this.dolarSiService.getInfo()
            const nd = data.cotiza
            res.send(data.cotiza[this.casasID[sector]["casa"+casa]])
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    
    public get casas() {
        return this.casasID
    }
    
}

export default Bancos;