import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


/** Modules */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

/** Components */
import { InputComponent } from './input-component/input.component';
import { CardComponent } from './card/card/card.component';

@NgModule({
  declarations: [
    InputComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule
  ],
  exports : [
    InputComponent,
    CardComponent
  ]
})
export class CommonComponentsModule { }