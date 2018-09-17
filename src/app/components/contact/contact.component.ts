import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'contact',
  templateUrl: './contact.component.html'

})

export class ContactComponent implements OnInit {
  title = 'Contact';
  emailContacto: string;
  ngOnInit(){
    console.log("ContactComponent cargado");
  }

  guardarEmail(){
    localStorage.setItem('emailContacto', this.emailContacto);
    console.log(localStorage.getItem('emailContacto') );
  }
}
