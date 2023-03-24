import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mon application';
  nom:string = "Jean";
  verif:boolean=true;
  elem:number=1;
  etudiants: any[] = [
    {"nom":"Dupret", "prenom":"Victoria", "age":18},
    {"nom":"Delfino", "prenom":"Victor", "age":20},
    {"nom":"Durant", "prenom":"Louis", "age":16},
    {"nom":"Demont", "prenom":"Lucas", "age":22}

    
  ]

}
