"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var favorito_service_1 = require("../services/favorito.service");
var FavoritosListComponent = (function () {
    function FavoritosListComponent(_favoritoService) {
        this._favoritoService = _favoritoService;
        this.title = 'Lista de Favoritos';
    }
    FavoritosListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("FavoritosListComponent Cargado ! ");
        this._favoritoService.getFavoritos().subscribe(function (result) {
            console.log(result);
            _this.favoritos = result.favoritos;
            if (!_this.favoritos) {
                alert('No existen Favoritos');
            }
        }, function (error) {
        });
    };
    return FavoritosListComponent;
}());
FavoritosListComponent = __decorate([
    core_1.Component({
        selector: 'favoritos-list',
        templateUrl: 'app/views/favoritos-list.html',
        providers: [favorito_service_1.FavoritoService]
    }),
    __metadata("design:paramtypes", [favorito_service_1.FavoritoService])
], FavoritosListComponent);
exports.FavoritosListComponent = FavoritosListComponent;
//# sourceMappingURL=favoritos-list.component.js.map