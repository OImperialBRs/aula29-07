"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
var Veiculo = /** @class */ (function () {
    function Veiculo(_documento, _modelo, _cor, quilometragem, nivelDeUso) {
    }
    ;
    Veiculo.prototype.get_documento = function () {
        return this._documento;
    };
    Veiculo.prototype.set_documento = function (_documento) {
        this._documento = _documento;
    };
    Veiculo.prototype.get_modelo = function () {
        return this._modelo;
    };
    Veiculo.prototype.set_modelo = function (_modelo) {
        this._modelo = _modelo;
    };
    Veiculo.prototype.get_cor = function () {
        return this._cor;
    };
    Veiculo.prototype.set_cor = function (_cor) {
        this._cor = _cor;
    };
    Veiculo.prototype.get_quilometragem = function () {
        return this._quilometragem;
    };
    Veiculo.prototype.set_quilometragem = function (_quilometragem) {
        this._quilometragem = _quilometragem;
    };
    Veiculo.prototype.get_nivelDeUso = function () {
        return this._nivelDeUso;
    };
    Veiculo.prototype.set_nivelDeUso = function (_quilometragem) {
        if (_quilometragem <= 30000) {
            this._nivelDeUso = "Baixo Km";
        }
        else if (_quilometragem <= 70000) {
            this._nivelDeUso = "Médio Km";
        }
        else
            (_quilometragem > 70000);
        {
            this._nivelDeUso = "Alto Km";
        }
    };
    return Veiculo;
}());
exports.Veiculo = Veiculo;
