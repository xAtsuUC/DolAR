import DolAR from "../..";
import DolarUtil from "../../lib/DolarUtils";
import DolarSiService from "../../lib/DolarSiService";

export default class PreciosDolar extends DolAR {
	dolarUtil: DolarUtil;
	service: DolarSiService;
	constructor() {
		super();
		this.dolarUtil = this.getDolarUtil();
		this.service = this.getService();
	}

	public async getPreciosDolar() {
		let arr:PreciosDolarData[] = [];
		let v = await this.service.getInfo();
		let obj = v.cotiza.Dolar;
		Object.keys(obj).forEach((key) => {
			let vr = obj[key];
			return arr.push({
				nombre: vr?.nombre?._text,
				compra: this.dolarUtil.formatNumber(vr?.compra?._text),
				venta: this.dolarUtil.formatNumber(vr?.venta?._text)
			});
		});

        return arr
	}

    public async getPrincipales() {
        let arr:PreciosDolarData[] = [];
		let v = await this.service.getInfo();
		let obj = v.cotiza.valores_principales;
		Object.keys(obj).forEach((key) => {
			let vr = obj[key];
			return arr.push({
				nombre: vr?.nombre?._text,
				compra: this.dolarUtil.formatNumber(vr?.compra?._text),
				venta: this.dolarUtil.formatNumber(vr?.venta?._text),
                fecha: this.dolarUtil.formatDate(),
                horario: vr?.horario?._text ?? "No disponible",
                direccion: vr?.direccion?._text ?? "No disponible"
			});
		});

        return arr
    }
}

export interface PreciosDolarData {
    nombre: string;
    compra: string;
    venta: string;
    horario?: string;
    direccion?: string;
    fecha?: string;
}