import DolAR from "../..";
import DolarUtil from "../../lib/DolarUtils";
import DolarSiService from "../../lib/DolarSiService";
import { PreciosDolarData } from "./Dolar";

export default class Real extends DolAR {
    dolarUtil: DolarUtil;
    service: DolarSiService;
    constructor() {
        super();
        this.dolarUtil = this.getDolarUtil();
        this.service = this.getService();
    }

    public async getPreciosReal() {
		let arr:PreciosDolarData[] = [];
		let v = await this.service.getInfo();
		let obj = v.cotiza.Real;
		Object.keys(obj).forEach((key) => {
			let vr = obj[key];
			return arr.push({
				nombre: vr?.nombre?._text,
				compra: this.dolarUtil.formatNumber(vr?.compra?._text),
				venta: this.dolarUtil.formatNumber(vr?.venta?._text),
                horario: vr?.horario?._text ?? "No disponible",
                direccion: vr?.direccion?._text ?? "No disponible",
                fecha: this.dolarUtil.formatDate()
			});
		});

        return arr
	}
}