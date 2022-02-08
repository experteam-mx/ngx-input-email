import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { InputMaskModule } from '@ngneat/input-mask';

import { NgxInputEmailComponent } from './ngx-input-email.component';



@NgModule({
  declarations: [
    NgxInputEmailComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputMaskModule
  ],
  exports: [
    NgxInputEmailComponent
  ]
})
export class NgxInputEmailModule { }
