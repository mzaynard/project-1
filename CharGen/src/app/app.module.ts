import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
//import { CharDataComponent } from './char-data/char-data.component';

const appRoutes: Routes = [
  {path:'background', component: BackgroundComponent},
  {path:'', component: BackgroundComponent},
  {path:'**', component: BackgroundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent
//    CharDataComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot (
      appRoutes
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

//let character = new CharDataComponent;

export class AppModule { }
