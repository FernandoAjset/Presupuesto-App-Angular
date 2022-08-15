import { Egreso } from "./egreso.model";


export class EgresoServicio{
    egresos: Egreso[]=[
        new Egreso("Transporte",1200),
        new Egreso("Medicina",400)
    ];

    eliminarRegistro(egreso: Egreso){
        const indice:number = this.egresos.indexOf(egreso);
        this.egresos.splice(indice,1);
    }
}