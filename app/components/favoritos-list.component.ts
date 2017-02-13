import{Component,OnInit}from '@angular/core';
import {FavoritoService} from "../services/favorito.service";
import {Favorito} from "../models/favorito";

@Component({

	selector: 'favoritos-list',
	templateUrl: 'app/views/favoritos-list.html',
	providers: [FavoritoService]
})


export class FavoritosListComponent implements OnInit{

	public title:string;
	public favoritos:Favorito[];
	constructor(private _favoritoService: FavoritoService) {
		this.title ='Lista de Favoritos';
	}
	ngOnInit(){
			console.log("FavoritosListComponent Cargado ! ");
			this._favoritoService.getFavoritos().subscribe(
					result => {
						console.log(result);
						this.favoritos= result.favoritos;

						if(!this.favoritos){
							alert('No existen Favoritos');
						}
					},
					error =>{

					}
			);
	}
}
