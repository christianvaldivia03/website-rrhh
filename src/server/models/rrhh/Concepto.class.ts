export class Concepto {
  id_concepto?: number;

  cod_con?: string;

  nomb_conc?: string;

  tipo_conc?: number;

  fech_reg_conc?: Date;

  id_sub_tipo_conc?: number;

  afecto_essalud?: boolean;

  afecto_previsional?: boolean;

  afecto_impuesto?: boolean;

  bonif_ext?: boolean;

  est_conc?: number;

  constructor(data: Partial<Concepto>) {
    Object.assign(this, data);
  }
}
