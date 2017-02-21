import{Component,OnInit}from '@angular/core';
import { Router,ActivatedRoute,Params} from '@angular/router';
import {FavoritoService} from "../services/favorito.service";
import {Favorito} from "../models/favorito";
@Component({

	selector: 'favorito-add',
	templateUrl: 'app/views/favorito-add.html',
	providers: [FavoritoService]
})


export class FavoritoAddComponent{




}
