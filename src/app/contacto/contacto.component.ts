import { Component, OnInit } from '@angular/core';
import { UtenteService } from '../utente.service';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  personas:any=[];

  constructor(private datos: UtenteService) { }

  ngOnInit(): void {
    this.personas = this.datos;
  }

}
