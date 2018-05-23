import { Empleado } from './empleado.model';

export class Proyecto {
    proyectoId : number;
    nombre :string;
    empresa : string;
    presupuesto : number;
    tecnologias: string;
    fechaInicio : string;
    estadoActual : string;
    empleados : Empleado[];
}
