import { Documento } from "./Documento";
import { Fabricante } from "./Fabricante";

export class Veiculo{
    private _documento: Documento[];
    private _modelo: string;
    private _fabricante: Fabricante[];
    private _cor: string;
    private _quilometragem: number;

    constructor (documento: Documento[], modelo: string, fabricante: Fabricante[], cor: string, quilometragem: Number){
        this._documento = documento;
        this._modelo = modelo;
        this._fabricante = fabricante;
        this._cor = cor;
        this._quilometragem = quilometragem;
    }

    get documento (){
        return this._documento;
    }
    adicionarDocumento(documento: Documento){
        this._documento.push(documento);
    }
    get modelo(){
        return this._modelo;
    }
    set modelo(modelo: string){
        this._modelo = modelo;
    }
    get fabricante(){
        return this._fabricante;
    }
    adicionarfabricante(fabricante: Fabricante){
        this._fabricante.push(fabricante);
    }
    get cor(){
        return this._cor;
    }
    set cor(cor: string){
        this._cor = cor;
    }
    get quilometragem(){
        return this._quilometragem;
    }
    set quilometragem(quilometragem: Number){
        this._quilometragem = quilometragem

    }
}