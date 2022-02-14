import { Component } from '@angular/core';
import { UtenteService } from './utente.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
  personas:any=[];

  constructor(private datos: UtenteService) {}


  ngOnInit() {


      console.log(this.datos);

      console.log(Object.keys(this.datos));

       this.personas = this.datos;


  }


  }

