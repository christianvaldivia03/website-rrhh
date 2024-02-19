export class PlanillaTipo {
  id_tipo_planilla?: number;

  cod_tipo_pla?: string;

  nomb_tipo_pla?: string;

  est_tipo_pla?: number;

  constructor(data: Partial<PlanillaTipo>) {
    Object.assign(this, data);
  }
}
