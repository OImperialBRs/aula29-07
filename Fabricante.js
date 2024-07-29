export class Fabricante{
    private _razaoSocial: string;
    private _nomeEmpresa: string;
    private _cnpj: Number;
    private _origem: String;

    constructor (razaoSocial: string[], nomeEmpresa: string[], cnpj: Number, origem: string[]){
        this._razaoSocial = razaoSocial;
        this._nomeEmpresa = nomeEmpresa;
        this._cnpj = cnpj;
        this._origem = origem;
    }
    get razaoSocial(){
        return this.razaoSocial;
    }
    set razaoSocial(razaoSocial: string){
        this._razaoSocial = razaoSocial;
    }


    get nomeEmpresa(){
        return this.nomeEmpresa;
    }
    set nomeEmpresa(nomeEmpresa: string){
        this._nomeEmpresa = nomeEmpresa;
    }

    get cnpj(){
        return this.cnpj;
    }
    set cnpj(cnpj: string){
        this._cnpj = cnpj;
    }

    get origem(){
        return this.origem;
    }
    set origem(origem: string){
        this._origem = origem;
    }


}