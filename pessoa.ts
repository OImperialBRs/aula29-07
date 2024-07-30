import { constructor } from "typescript";

export class Pessoa{
    set_dataNascimento(arg0: Date) {
        throw new Error("Method not implemented.");
    }
    set_cpf(arg0: number) {
        throw new Error("Method not implemented.");
    }
    set_nome(arg0: string) {
        throw new Error("Method not implemented.");
    }
    export class Pessoa{
        private _nome: string;
        private _cpf: number;
        private _dataNascimento: Date;
    }

    constructor(nome: string, cpf: number, dataNascimento: Date){
        this._nome = nome;
        this._cpf = cpf;
        this._dataNascimento = dataNascimento;
    }

    get nome(){
        return this.nome;
    }

    set nome(nome: string){
        this._nome = nome;
    }

    get cpf(){
        return this._cpf;
    }

    set cpf(cpf: number){
        this._cpf = cpf;
    }

    get dataNascimento(){
        return this._dataNascimento;
    }

    set dataNascimento(dataNascimento: Date){
        this._dataNascimento = dataNascimento;
    } 
}