export interface Homenagem {
  nome: string;
  data_nasc: string;
  cidade_nasc: string;
  data_falec: string;
  cidade_falec: string;
  memoria: string;
  biografia: string;
  foto: File | string | undefined | null;
  user: number;
}

export interface ListaHomenagem {
  id: number;
  nome: string;
  data_nasc: string;
  cidade_nasc: string;
  data_falec: string;
  cidade_falec: string;
  memoria: string;
  biografia: string;
  foto: string;
  user: number;
}

