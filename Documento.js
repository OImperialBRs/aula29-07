import { Pessoa } from "./pessoa.js";

export class Documento{
    private _ano:   Date[];
    private _placa: string[];
    private _exProprietario: Pessoa;
    private _carroceria: string[];
    private _renavam: number;
}

constructor(ano: Date, placa: string[], proprietario: Pessoa, carroceria: string[], renavam: number){
    this._ano = ano;
    this._placa = placa;
    this._exProprietario = exProprietario;
    this._carroceria = carroceria;
    this._renavam = renavam;
}

get ano(){
    return this._ano;
}

set ano(ano: string){
    this._ano = ano;
}

get placa(){
    return this._placa;
}

set placa(placa: string){
    this._placa = placa
}

get exProprietario(){
    return this._exProprietario;
}

set exProprietario(exProprietario: Pessoa){
    this._exProprietario = exProprietario;
}

get carroceria(){
    return this._carroceria;
}

set carroceria(carroceria: string){
    this._carroceria = carroceria;
}

get renavam(){
    return this._renavam;
}

set renavam(renavam: number){
    this._renavam = renavam;
}