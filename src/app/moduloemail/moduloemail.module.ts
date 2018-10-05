//importar modulos necesarios para crear modulos
import  {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//importar componentes
import { GuardarEmailComponent } from './components/guardar-email/guardar-email.component';
import { MostrarEmailComponent } from './components/mostrar-email/mostrar-email.component';
import { MainEmailComponent } from './components/main-email/main-email.component';

//decoraar ngModule para cargar los componentes y la configuracion del modulo
@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [
        GuardarEmailComponent,
        MostrarEmailComponent,
        MainEmailComponent
    ],
    exports: [MainEmailComponent]
})
export class ModuloEmailModule{}