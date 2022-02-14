import { Component, OnInit } from '@angular/core';
import { UtenteService } from '../utente.service';
@Component({
  selector: 'app-credenciales',
  templateUrl: './credenciales.component.html',
  styleUrls: ['./credenciales.component.css']
})
export class CredencialesComponent implements OnInit {
  personas:any=[];

  constructor(private datos: UtenteService) { }

  ngOnInit(): void {
    this.personas = this.datos;
  }

}
