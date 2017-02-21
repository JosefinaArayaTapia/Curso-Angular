import {ModuleWithProviders} from "@angular/core";
import {Routes,RouterModule} from "@angular/router";

import { FavoritosListComponent } from './components/favoritos-list.component';
import { FavoritoDetailComponent } from './components/favorito-detail.component';
import { FavoritoAddComponent } from './components/favorito-add.component';



const appRoutes: Routes = [
  { path: ''   , component:FavoritosListComponent},
  { path: 'marcador/:id', component: FavoritoDetailComponent},
  { path: 'crear-marcador', component: FavoritoAddComponent},
  { path: '**' , component:FavoritosListComponent}

];

 export const appRoutingProviders: any[] = [];
 export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
