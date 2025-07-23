import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './components/grid/grid.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GridComponent,
    ButtonComponent,
    CardComponent,
    FormFieldComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    GridComponent,
    ButtonComponent,
    CardComponent,
    FormFieldComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
