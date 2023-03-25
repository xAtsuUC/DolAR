import Bancos from "./controller/Bancos";
import BRCA from "./controller/BCRA";
import Indices from "./controller/Indices";
import Dolar from "./controller/monedas/Dolar";
import Euro from "./controller/monedas/Euro";
import Real from "./controller/monedas/Real";
import DolarSiService from "./lib/DolarSiService";
import DolarUtil from "./lib/DolarUtils";

class DolAR {

    public getBancos() {
        return new Bancos()
    }

    public getService() {
        return new DolarSiService()
    }

    public getDolarUtil() {
        return new DolarUtil()
    }

    public getBCRA() {
        return new BRCA()
    }

    public getIndices() {
        return new Indices()
    }

    public getDolar() {
        return new Dolar()
    }

    public getEuro() {
        return new Euro()
    }

    public getReal() {
        return new Real()
    }
}

export default DolAR;

