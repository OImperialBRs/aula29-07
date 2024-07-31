import { Veiculo } from "./Veiculo";
import { Documento } from "./Documento";
import { Pessoa } from "./Pessoa";

let pessoa1 = new Pessoa("", 0o6216602136, new Date(""));
pessoa1.set_nome("Kadu");
pessoa1.set_cpf(0o6216602136);
pessoa1.set_dataNascimento(new Date ("1997-08-23"));

let documento1 = new Documento(new Date(""), "", pessoa1, "", 123456, new Date(""), "");
documento1.set_ano(new Date ("2015-01-01"));
documento1.set_placa("KRK8F50");
documento1.set_exProprietario(pessoa1);
documento1.set_carroceria("Hatch");
documento1.set_renavam(123456);
documento1.set_dataLicenciamento(new Date("2023-01-01"));
documento1.set_statusDocumento(new Date("2023-01-01"));

let carro1 = new Veiculo(documento1, " ", " ", 50000, " ");
carro1.set_documento(documento1);
carro1.set_cor("preto");
carro1.set_modelo("HB20");
carro1.set_nivelDeUso(100000);
console.log(carro1);


let pessoa2 = new Pessoa("", 0o6216602136, new Date(""));
pessoa2.set_nome("PEDRO");
pessoa2.set_cpf(00200100365);
pessoa2.set_dataNascimento(new Date ("200-08-04"));

let documento2 = new Documento(new Date(""), "", pessoa1, "", 123456, new Date(""), "");
documento2.set_ano(new Date ("2023-09-18"));
documento2.set_placa("FAKER789");
documento2.set_exProprietario(pessoa2);
documento2.set_carroceria("sedam");
documento2.set_renavam(654321);
documento2.set_dataLicenciamento(new Date("2023-10-01"));
documento2.set_statusDocumento(new Date("2024-10-01"));

let carro2 = new Veiculo(documento2, " ", " ", 50000, " ");
carro2.set_documento(documento2);
carro2.set_cor("laranja");
carro2.set_modelo("mclata");
carro2.set_nivelDeUso(100000);
console.log(carro2);