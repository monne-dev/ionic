import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // -- Déclaration de variable
  title = 'Mes Contacts';

  // -- Création d'un petit tableau
  contacts = [
    {name: 'Hugo'},
    {name: 'Alfred'},
    {name: 'Jean'},
    {name: 'Edouard'},
  ];

  constructor() {}

}
