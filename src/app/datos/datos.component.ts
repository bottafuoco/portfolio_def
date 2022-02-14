import { Component, OnInit } from '@angular/core';
import { UtenteService } from '../utente.service';
@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
  personas:any=[];
  constructor(private datos: UtenteService) { }

  ngOnInit(): void {
    this.personas = this.datos;
  }

}
