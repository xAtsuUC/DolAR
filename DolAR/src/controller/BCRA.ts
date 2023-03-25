import DolAR from "..";
import DolarSiService from "../lib/DolarSiService";
import DolarUtil from "../lib/DolarUtils";

class BRCA extends DolAR {
    dolarSiService: DolarSiService
    dolarUtil: DolarUtil
    constructor() {
        super();
        this.dolarSiService = this.getService();
        this.dolarUtil = this.getDolarUtil();
    }

    
    public async getReservas(): Promise<{ nombre: any; reserva: string; agencia: any; observaciones: any; fecha: string; }> {
        const data = await this.dolarSiService.getInfo();
        let bcra = data.cotiza.Reservas_y_circulante.casa394
        return {
            nombre: bcra.nombre._text,
            reserva: this.dolarUtil.formatNumber(bcra.compra._text),
            agencia: bcra.agencia._text,
            observaciones: bcra.observaciones._text ?? "",
            fecha: this.dolarUtil.formatDate()
        }

    }

    public async getCirculante() {
        const data = await this.dolarSiService.getInfo();
        let bcra = data.cotiza.Reservas_y_circulante.casa395
        return {
            nombre: bcra.nombre._text,
            reserva: this.dolarUtil.formatNumber(bcra.compra._text),
            agencia: bcra.agencia._text,
            observaciones: bcra.observaciones._text ?? "",
            fecha: this.dolarUtil.formatDate()
        }

    }
    
}

export default BRCA;