import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {
  info2:any=[];


  constructor(
    private http: HttpClient) {
     http.get("https://randomuser.me/api").subscribe((resp) => {
      this.info2=resp;
    });

    }
}
