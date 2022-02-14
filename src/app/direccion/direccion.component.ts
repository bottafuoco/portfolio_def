import { Component, OnInit } from '@angular/core';
import { UtenteService } from '../utente.service';
@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css']
})
export class DireccionComponent implements OnInit {
  personas:any=[];

  constructor(private datos: UtenteService) { }

  ngOnInit(): void {
    this.personas = this.datos;
  }

}
