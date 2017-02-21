import{Component,OnInit}from '@angular/core';
import { Router,ActivatedRoute,Params} from '@angular/router';
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
      this.favorito = new Favorito("", "", "", "");
    }

    public onSubmit() {
   console.log(this.favorito);
   this.favoritoService.addFavorito(this.favorito).subscribe(
     response => {
       if (!response.favorito) {
         //alert('Error en el servidor');
       } else {
         this.favorito = response.favorito;
         this._router.navigate(['/marcador', this.favorito._id]);
       }
     },
     error => {

     }
   );
 }



}
