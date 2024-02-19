import { PlanillaTrabajador } from ".";
import { Mes } from "../core";
import { PlanillaTipo } from "./planillatipo.class";
import { EmployeeType } from "./trabajadortipo.entity";

export class Planilla {
  id_planilla?: number;
  id_planilla_plantilla?: number;
  id_tipo_planilla?: number;
  id_tipo_trabajador?: number;
  id_estado_personal_pla?: number;
  id_clasificador?: number;
  est_planilla?: number;
  id_anio?: number;
  id_mes?: string;
  num_planilla?: string;
  tit_planilla?: string;
  obs_planilla?: string;
  id_persona_registro?: number;
  id_persona_proceso?: number;
  id_persona_transf?: number;
  id_persona_cierre?: number;
  fech_cierre_pla?: Date | null;
  sys_fech_registro?: Date;
  fech_transf?: Date | null;

  planillatrabajador?: PlanillaTrabajador[];
  mes?: Mes;

  planillatipo?: PlanillaTipo;

  trabajadortipo?: EmployeeType;

  constructor(data: Partial<Planilla>) {
    Object.assign(this, data);
  }
}
