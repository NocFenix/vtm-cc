import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NewCharacterComponent } from '../new-character/new-character.component';
import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DiceRollerComponent } from '../dice-roller/dice-roller.component';
import { VtmInputRestrictDirective } from '../../directives/input-restrict.directive';

const appRoutes: Routes = [
  { path: 'new-character', component: NewCharacterComponent },
  { path: 'dice-roller', component: DiceRollerComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NewCharacterComponent,
    DiceRollerComponent,
    VtmInputRestrictDirective,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    InputTextModule,
    AccordionModule,
    DropdownModule,
    RatingModule,
    ToastModule,
    RouterModule,
  ],
  exports: [
    NewCharacterComponent,
    InputTextModule,
    AccordionModule,
    DropdownModule,
    RatingModule,
    ToastModule,
    RouterModule,
    VtmInputRestrictDirective,
  ],
  providers: [
    MessageService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
