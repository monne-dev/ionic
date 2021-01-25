import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  public tasks = [
    { val: 'Sortir les poubelles', isChecked: false },
    { val: 'Faire les courses', isChecked: false },
    { val: 'Prendre rdv pédiatre', isChecked: false },
    { val: 'Faire carte grise', isChecked: false },
    { val: 'Mettre de l\'essence', isChecked: false }
  ];

  newTask: any = {};

  submitTask(): void{
    this.tasks.push(this.newTask);
    console.log('je vérifie');

    this.newTask = {};
  }
  public deleteTask(index:number) {
    this.tasks.splice(index, 1);
    console.log('coucou');
  }
}
