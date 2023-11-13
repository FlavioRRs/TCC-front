export default class Problem{
  nome: string;
  codigo: string;
  desc: string;
  crit: string;
  dir: string;
  aux: string;

  constructor(nome: string, codigo: string, desc: string, crit: string, dir: string, aux: string) {
    this.nome = nome;
    this.codigo = codigo;
    this.desc = desc;
    this.crit = crit;
    this.dir = dir;
    this.aux = aux
  }

}