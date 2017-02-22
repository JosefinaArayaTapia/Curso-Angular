import{Component,OnInit}from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {FavoritoService} from "../services/favorito.service";
import {Favorito} from "../models/favorito";
@Component({

	selector: 'favorito-add',
	templateUrl: 'app/views/favorito-add.html',
	providers: [FavoritoService]
})


export class FavoritoAddComponent implements OnInit {

  public titleSection: string;
  public favorito: Favorito;
  constructor(
     private favoritoService: FavoritoService,
     private _route: ActivatedRoute,
     private _router: Router
   ) {
     this.titleSection = "Crear favorito"
   }

  ngOnInit() {
      this.favorito = new Favorito("", "", "");
  }

  public onSubmit() {
   	this.favoritoService.addFavorito(this.favorito).subscribe(
    response => {
			console.log(response.favorito);
       if (response.favorito) {
				 console.log(response.favorito);
				 this.favorito = response.favorito;
				 console.log("id del favorito: "+this.favorito._id);
         this._router.navigate(['/marcador', this.favorito._id]);
       } else {
				 console.log("No Pudo guardar nada ");
       }
     },
     error => {

     }
   );
 }
}
