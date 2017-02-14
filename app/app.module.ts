import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from "@angular/http";
import { routing,appRoutingProviders} from "./app.routing";


import { AppComponent }  from './app.component';
import { FavoritosListComponent } from './components/favoritos-list.component';
import { FavoritoDetailComponent } from './components/favorito-detail.component';


@NgModule({
  imports:      [
  					BrowserModule ,
  					FormsModule,
            HttpModule,
            routing
  				],
  declarations: [
  					AppComponent ,
  					FavoritosListComponent,
            FavoritoDetailComponent
  				],
  providers:    [ appRoutingProviders],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
