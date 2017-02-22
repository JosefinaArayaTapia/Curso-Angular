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
var router_1 = require("@angular/router");
var favorito_service_1 = require("../services/favorito.service");
var favorito_1 = require("../models/favorito");
var FavoritoAddComponent = (function () {
    function FavoritoAddComponent(favoritoService, _route, _router) {
        this.favoritoService = favoritoService;
        this._route = _route;
        this._router = _router;
        this.titleSection = "Crear favorito";
    }
    FavoritoAddComponent.prototype.ngOnInit = function () {
        this.favorito = new favorito_1.Favorito("", "", "");
    };
    FavoritoAddComponent.prototype.onSubmit = function () {
        var _this = this;
        this.favoritoService.addFavorito(this.favorito).subscribe(function (response) {
            console.log(response.favorito);
            if (response.favorito) {
                console.log(response.favorito);
                _this.favorito = response.favorito;
                console.log("id del favorito: " + _this.favorito._id);
                _this._router.navigate(['/marcador', _this.favorito._id]);
            }
            else {
                console.log("No Pudo guardar nada ");
            }
        }, function (error) {
        });
    };
    return FavoritoAddComponent;
}());
FavoritoAddComponent = __decorate([
    core_1.Component({
        selector: 'favorito-add',
        templateUrl: 'app/views/favorito-add.html',
        providers: [favorito_service_1.FavoritoService]
    }),
    __metadata("design:paramtypes", [favorito_service_1.FavoritoService,
        router_1.ActivatedRoute,
        router_1.Router])
], FavoritoAddComponent);
exports.FavoritoAddComponent = FavoritoAddComponent;
//# sourceMappingURL=favorito-add.component.js.map