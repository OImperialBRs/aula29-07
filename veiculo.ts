import { Documento } from "./Documento";
export class Veiculo{
    private _documento: Documento;
    private _modelo: string;
    private _cor: string;
    private _quilometragem: number;
    private _nivelDeUso: string;
    
    constructor (_documento:Documento, _modelo:string, _cor:string, quilometragem:number, nivelDeUso:string){};

    get_documento(){
        return this._documento;
    }

    set_documento(_documento:Documento){
        this._documento=_documento;
    }

    get_modelo(){
        return this._modelo;
    }

    set_modelo(_modelo:string){
        this._modelo=_modelo;
    }

    get_cor(){
        return this._cor;
    }

    set_cor(_cor:string){
        this._cor=_cor;
    }

    get_quilometragem(){
        return this._quilometragem;
    }

    set_quilometragem(_quilometragem:number){
        this._quilometragem=_quilometragem;
    }

    get_nivelDeUso(){
        return this._nivelDeUso;
    }

    set_nivelDeUso(_quilometragem:number){
        if(_quilometragem<=30000){
        this._nivelDeUso="Baixo Km";
        }
        else if(_quilometragem<=70000){
            this._nivelDeUso="Médio Km";
            }
            else (_quilometragem>70000);{
                this._nivelDeUso="Alto Km";
                }
    }
}
