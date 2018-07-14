import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PowerBIModule } from 'angular2-powerbi';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BIComponent } from './bi/bi.component';



const appRoutes: Routes = [
  {
    path: 'bi',
    component: BIComponent,
    data: { title: 'Power BI' }
  },
  {
    path: '',
    redirectTo: '/bi',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BIComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    PowerBIModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
