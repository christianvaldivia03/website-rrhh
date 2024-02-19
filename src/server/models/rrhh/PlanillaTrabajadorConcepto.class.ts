import { Concepto } from ".";

export class PlanillaTrabajadorConcepto {
  id_planilla?: number;
  id_persona?: number;
  id_corr_trab?: number;
  id_concepto?: number;
  monto_concepto?: number;

  concepto?: Concepto;

  constructor(data: Partial<PlanillaTrabajadorConcepto>) {
    Object.assign(this, data);
  }
}
