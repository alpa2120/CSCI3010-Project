import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { RouterModule } from '@angular/router';
import { SectionTemplateComponent } from './section-template/section-template.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SectionTemplateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'section', component: SectionTemplateComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
