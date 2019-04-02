import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewCharacterComponent } from '../new-character/new-character.component';
import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api'

@NgModule({
   declarations: [
      AppComponent,
      NewCharacterComponent,
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      InputTextModule,
      AccordionModule,
      DropdownModule,
      RatingModule,
      ToastModule,
   ],
   exports: [
      NewCharacterComponent,
      InputTextModule,
      AccordionModule,
      DropdownModule,
      RatingModule,
      ToastModule,
   ],
   providers: [
    MessageService,
   ],
   bootstrap: [
      AppComponent,
   ]
})
export class AppModule { }
