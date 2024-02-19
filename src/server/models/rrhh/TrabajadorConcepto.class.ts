export class TrabajadorConcepto {
  id_persona?: number;
  id_corr_trab?: number;
  id_concepto?: number;
  monto_concepto?: number;
  constructor(data: Partial<TrabajadorConcepto>) {
    Object.assign(this, data);
  }
}
