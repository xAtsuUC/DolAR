import DolAR from ".."
import DolarSiService from "../lib/DolarSiService"
import DolarUtil from "../lib/DolarUtils"

export default class Indices extends DolAR {
    dolarUtil: DolarUtil;
    service: DolarSiService;

    constructor() {
        super();
        this.dolarUtil = this.getDolarUtil();
        this.service = this.getService();
    }

    public async getIndicesBRAE() {
        let v = await this.service.getInfo();
        
        let bolsa: any[] = [];
        let obj = v.cotiza.Bolsa_Ar;
        Object.keys(obj).forEach((key) => {
            let vr = obj[key];
            return bolsa.push({
                nombre: vr?.nombre?._text,
                compra: this.dolarUtil.formatNumber(vr?.compra?._text),
                venta: this.dolarUtil.formatNumber(vr?.venta?._text),
                agencia: this.dolarUtil.formatNumber(vr?.porcentaje?._text),
                fecha: this.dolarUtil.formatDate()
            });
        });

        let riesgo: any[] = [];
        let objr = v.cotiza.Riesgo_pais;
        Object.keys(objr).forEach((key) => {
            let vr = objr[key];
            return riesgo.push({
                nombre: vr?.nombre?._text,
                compra: this.dolarUtil.formatNumber(vr?.compra?._text),
                venta: this.dolarUtil.formatNumber(vr?.venta?._text),
                agencia: this.dolarUtil.formatNumber(vr?.porcentaje?._text),
                fecha: vr?.fecha?._text
            });
        });

        let agro: any[] = [];
        let obja = v.cotiza.Agro;
        Object.keys(obja).forEach((key) => {
            let vr = obja[key];
            return agro.push({
                nombre: vr?.nombre?._text,
                compra: this.dolarUtil.formatNumber(vr?.compra?._text),
                venta: this.dolarUtil.formatNumber(vr?.venta?._text),
                agencia: this.dolarUtil.formatNumber(vr?.porcentaje?._text),
                fecha: this.dolarUtil.formatDate()
            });
        });

        let energia: any[] = [];
        let obje = v.cotiza.Energia;
        Object.keys(obje).forEach((key) => {
            let vr = obje[key];
            return energia.push({
                nombre: vr?.nombre?._text,
                compra: this.dolarUtil.formatNumber(vr?.compra?._text),
                venta: this.dolarUtil.formatNumber(vr?.venta?._text),
                agencia: this.dolarUtil.formatNumber(vr?.porcentaje?._text),
                fecha: this.dolarUtil.formatDate()
            });
        });
    }
}