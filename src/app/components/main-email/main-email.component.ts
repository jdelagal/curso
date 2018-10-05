import { Component, DoCheck, OnInit } from '@angular/core';


@Component({
  selector: 'main-email',
  template: `
    <h2>{{title}}</h2>
    <mostrar-email></mostrar-email>
    <guardar-email></guardar-email>
  `
})

export class MainEmailComponent {
  title = 'Modulo de emails';
  emailContacto: string;

}
