"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Documento = void 0;
var date1 = new Date('2024-12-31');
var Documento = /** @class */ (function () {
    function Documento(_ano, placa, _exProprietario, _carroceria, _renavam, _dataLicenciamento, _statusDocumento) {
    }
    ;
    Documento.prototype.get_ano = function () {
        return this._ano;
    };
    Documento.prototype.set_ano = function (_ano) {
        this._ano = _ano;
    };
    Documento.prototype.get_placa = function () {
        return this._placa;
    };
    Documento.prototype.set_placa = function (_placa) {
        this._placa = _placa;
    };
    Documento.prototype.get_exProprietario = function () {
        return this._exProprietario;
    };
    Documento.prototype.set_exProprietario = function (_exProprietario) {
        this._exProprietario = _exProprietario;
    };
    Documento.prototype.get_carroceria = function () {
        return this._carroceria;
    };
    Documento.prototype.set_carroceria = function (_carroceria) {
        this._carroceria = _carroceria;
    };
    Documento.prototype.get_renavam = function () {
        return this._renavam;
    };
    Documento.prototype.set_renavam = function (_renavam) {
        this._renavam = _renavam;
    };
    Documento.prototype.get_dataLicenciamento = function () {
        return this._dataLicenciamento;
    };
    Documento.prototype.set_dataLicenciamento = function (_dataVencimento) {
        this._dataLicenciamento = _dataVencimento;
    };
    Documento.prototype.get_statusDocumento = function () {
        return this._statusDocumento;
    };
    Documento.prototype.set_statusDocumento = function (_dataLicenciamento) {
        if (_dataLicenciamento < date1) {
            this._statusDocumento = "Atrasado";
        }
        else
            this._statusDocumento = "Regularizado";
    };
    return Documento;
}());
exports.Documento = Documento;
