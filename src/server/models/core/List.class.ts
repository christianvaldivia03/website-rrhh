export class List {
  id_lista?: number;
  entidad?: string;
  cod_lista?: string;
  desc_lista?: string;
  estado_lista?: number;

  constructor(data: Partial<List>) {
    Object.assign(this, data);
    this.id_lista = Number(data.id_lista) ?? undefined;
    this.estado_lista = Number(data.estado_lista) ?? undefined;
  }
}
