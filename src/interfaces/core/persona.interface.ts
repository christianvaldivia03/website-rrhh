import { List } from "./list.interface";

export interface Persona {
  id_persona: number;
  tipo_per: string;
  tipo_doc_per: number;
  nro_doc_per: string;
  ape_pat_per?: string;
  ape_mat_per?: string;
  nomb_per: string;
  direc_per?: string;
  sex_per?: string;
  fech_nac_per?: string;
  id_pais_nac?: number;
  aud_fech_crea: string;
  est_civil_per: any;
  id_ubigeo_nac: any;
  nro_ruc: any;
  id_pais_emisor_doc?: number;
  list_tipo_doc_per: List ;
  list_id_pais_nac?: List ;
  list_id_pais_emisor_doc?: List ;
}
