import { Component, OnInit } from '@angular/core';
import { UtenteService } from '../utente.service';

@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styleUrls: ['./nombre.component.css']
})
export class NombreComponent implements OnInit {
    personas:any=[];

    constructor(private datos: UtenteService) { }

    ngOnInit(): void {
      this.personas = this.datos;
    }


}
