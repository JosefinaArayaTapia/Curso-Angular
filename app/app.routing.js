"use strict";
var router_1 = require("@angular/router");
var favoritos_list_component_1 = require("./components/favoritos-list.component");
var favorito_detail_component_1 = require("./components/favorito-detail.component");
var appRoutes = [
    { path: '', component: favoritos_list_component_1.FavoritosListComponent },
    { path: 'marcador/:id', component: favorito_detail_component_1.FavoritoDetailComponent },
    { path: '**', component: favoritos_list_component_1.FavoritosListComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map