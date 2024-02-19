export class Mes {
  id_mes?: number;
  nomb_mes?: string;
  nomb_cort_mes?: string;
  constructor(data: Partial<Mes>) {
    Object.assign(this, data);
  }
}
