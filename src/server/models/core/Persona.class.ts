import { List } from "./List.class";

export class Persona {
  id_persona?: number;

  tipo_per?: string;

  tipo_doc_per?: number;

  nro_doc_per?: string;

  ape_pat_per?: string;

  ape_mat_per?: string;

  nomb_per?: string;

  direc_per?: string;

  sex_per?: string;

  fech_nac_per?: Date;

  id_pais_nac?: number;

  aud_fech_crea?: Date;

  est_civil_per?: string;

  // id_ubigeo_nac?: number;

  nro_ruc?: string;

  // id_pais_emisor_doc?: number;

  list_tipo_doc_per?: List;
  
  list_id_pais_nac?: List;
  
  list_id_pais_emisor_doc?: List;

  constructor(data: Partial<Persona>) {
    Object.assign(this, data);
    this.tipo_doc_per = Number(data.tipo_doc_per) ?? undefined;
    this.id_pais_nac = Number(data.id_pais_nac) ?? undefined;
    // this.id_ubigeo_nac = Number(data.id_ubigeo_nac) ?? undefined;
    // this.id_pais_emisor_doc = Number(data.id_pais_emisor_doc) ?? undefined;
    this.id_persona = Number(data.id_persona) ?? undefined;
  }
}
