import { PlanillaTrabajadorConcepto } from ".";
import { List, Persona } from "../core";

export class PlanillaTrabajador {
  id_planilla?: number;
  id_persona?: number;
  id_corr_trab?: number;

  id_tipo_persona_pla?: number;

  id_estado_persona_pla?: number;

  id_regimen_salud?: number;

  id_regimen_pension?: number;

  id_regimen_pension_estado?: number;

  planillaTrabajadorConcepto?: PlanillaTrabajadorConcepto[];

  list_id_regimen_pension?: List;

  list_id_regimen_salud?: List;

  list_id_regimlist_id_regimen_pension_estadoen_salud?: List;

  persona?: Persona;

  constructor(data: Partial<PlanillaTrabajador>) {
    Object.assign(this, data);
  }
}
