import{Component}from '@angular/core';

@Component({

selector: 'favoritos-list',
templateUrl: 'app/views/favoritos-list.html'
})


export class FavoritosListComponent {

	public title:string;
	public favoritos:Array<string>;
	public favoritosVisibles : boolean;
	public color:string;
	
	constructor() {
		this.title ='Lista de Favoritos';
		this.favoritos = ['fav1','fav2','fav3','fav4'];
		this.favoritosVisibles = false;
	}

	showFavoritos(s:string){

		this.favoritosVisibles=true;
	}
	hideFavoritos(){

		this.favoritosVisibles=false;
	}
	changeColor(){

		this.color="red";
	}

}