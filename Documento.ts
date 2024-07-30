import { Pessoa } from "./Pessoa";
const date1 = new Date ('2024-12-31');
export class Documento{
    private _ano: Date;
    private _placa: string;
    private _exProprietario: Pessoa;
    private _carroceria: string;
    private _renavam: number;
    private _dataLicenciamento: Date;
    private _statusDocumento: string;

    constructor(_ano:Date, placa:string, _exProprietario:Pessoa, _carroceria:string, _renavam:number, _dataLicenciamento:Date, _statusDocumento:string){};

    get_ano(){
        return this._ano;
    }

    set_ano(_ano:Date){
        this._ano=_ano;
    }

    get_placa(){
        return this._placa;
    }

    set_placa(_placa:string){
        this._placa=_placa;
    }

    get_exProprietario(){
        return this._exProprietario;
    }

    set_exProprietario(_exProprietario:Pessoa){
        this._exProprietario=_exProprietario;
    }

    get_carroceria(){
        return this._carroceria;
    }

    set_carroceria(_carroceria:string){
        this._carroceria=_carroceria;
    }

    get_renavam(){
        return this._renavam;
    }

    set_renavam(_renavam:number){
        this._renavam=_renavam;
    }

    get_dataLicenciamento(){
        return this._dataLicenciamento;
    }

    set_dataLicenciamento(_dataVencimento:Date){
        this._dataLicenciamento=_dataVencimento;
    }

    get_statusDocumento(){
        return this._statusDocumento;
    }

    set_statusDocumento(_dataLicenciamento:Date){
        if(_dataLicenciamento<date1){
            this._statusDocumento="Atrasado";
        }
        else
        this._statusDocumento="Regularizado";
    }
}





