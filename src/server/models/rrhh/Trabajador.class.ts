import { Persona } from "../core";

export class Trabajador {
  id_persona?: number;
  id_corr_trab?: number;
  cod_trab?: string;
  estado_trabajador?: number;
  id_tipo_trabajador?: number;
  id_situacion_educativa?: number;
  id_ocupacion?: number;
  has_discapacidad?: boolean;
  id_condicion_laboral?: number;
  renta_quinta_exo?: boolean;
  sujeto_a_regimen?: boolean;
  sujeto_a_jornada?: boolean;
  sujeto_a_horario?: boolean;
  periodo_remuneracion?: number;
  situacion?: number;
  id_situacion_especial?: number;
  tipo_pago?: number;
  id_tipo_cuent_banco?: number;
  id_banco_sueldo?: number;
  num_cuenta_banco_sueldo?: string;
  num_cuenta_banco_sueldo_cci?: string;
  id_banco_cts?: number;
  num_cuenta_banco_cts?: string;
  fech_ingreso?: Date;
  id_doc_ingreso?: number;
  fech_doc_ingreso?: Date;
  num_doc_ingreso?: string;
  mot_ingreso?: string;
  fech_registro_sis?: Date;
  fech_salida?: Date;
  id_motivo_salida?: number;
  id_tipo_prestador?: number;
  fech_ingreso_salud?: Date;
  id_regimen_salud?: number;
  num_regimen_salud?: string;
  id_entidad_salud?: number;
  fech_ingreso_pension?: Date;
  id_regimen_pension?: number;
  id_regimen_pension_estado?: number;
  cuspp?: string;
  is_cod_generado_sys?: boolean;
  id_persona_registro?: number;
  id_filefoto?: number;
  persona?: Persona;

  constructor(data: Partial<Trabajador>) {
    Object.assign(this, data);
    this.id_persona = Number(data.id_persona) ?? undefined;
    this.id_corr_trab = Number(data.id_corr_trab) ?? undefined;
    this.estado_trabajador = Number(data.estado_trabajador) ?? undefined;
    this.id_tipo_trabajador = Number(data.id_tipo_trabajador) ?? undefined;
    this.id_situacion_educativa =
      Number(data.id_situacion_educativa) ?? undefined;
    this.id_ocupacion = Number(data.id_ocupacion) ?? undefined;
    this.id_condicion_laboral = Number(data.id_condicion_laboral) ?? undefined;
    this.periodo_remuneracion = Number(data.periodo_remuneracion) ?? undefined;
    this.situacion = Number(data.situacion) ?? undefined;
    this.id_situacion_especial =
      Number(data.id_situacion_especial) ?? undefined;
    this.tipo_pago = Number(data.tipo_pago) ?? undefined;
    this.id_tipo_cuent_banco = Number(data.id_tipo_cuent_banco) ?? undefined;
    this.id_banco_sueldo = Number(data.id_banco_sueldo) ?? undefined;
    this.id_banco_cts = Number(data.id_banco_cts) ?? undefined;
    this.id_doc_ingreso = Number(data.id_doc_ingreso) ?? undefined;
    this.id_motivo_salida = Number(data.id_motivo_salida) ?? undefined;
    this.id_tipo_prestador = Number(data.id_tipo_prestador) ?? undefined;
    this.id_regimen_salud = Number(data.id_regimen_salud) ?? undefined;
    this.id_entidad_salud = Number(data.id_entidad_salud) ?? undefined;
    this.id_regimen_pension = Number(data.id_regimen_pension) ?? undefined;
    this.id_regimen_pension_estado =
      Number(data.id_regimen_pension_estado) ?? undefined;
    this.id_persona_registro = Number(data.id_persona_registro) ?? undefined;
    this.id_filefoto = Number(data.id_filefoto) ?? undefined;
  }
}
