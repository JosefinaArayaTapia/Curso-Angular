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
var FavoritoDetailComponent = (function () {
    function FavoritoDetailComponent(_favoritoService, _route, _router) {
        this._favoritoService = _favoritoService;
        this._route = _route;
        this._router = _router;
    }
    FavoritoDetailComponent.prototype.ngOnInit = function () {
        console.log("Favorito-detail.Component Cargado ! ");
        this.getFavorito();
    };
    FavoritoDetailComponent.prototype.getFavorito = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._favoritoService.getFavorito(id).subscribe(function (result) {
                _this.favorito = result.favorito;
                console.log(_this.favorito);
                if (!_this.favorito) {
                    _this._router.navigate(['/']);
                }
            }, function (error) {
            });
        });
    };
    return FavoritoDetailComponent;
}());
FavoritoDetailComponent = __decorate([
    core_1.Component({
        selector: 'favorito-detail',
        templateUrl: 'app/views/favorito-detail.html',
        providers: [favorito_service_1.FavoritoService]
    }),
    __metadata("design:paramtypes", [favorito_service_1.FavoritoService,
        router_1.ActivatedRoute,
        router_1.Router])
], FavoritoDetailComponent);
exports.FavoritoDetailComponent = FavoritoDetailComponent;
//# sourceMappingURL=favorito-detail.component.js.map