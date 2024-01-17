import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    SidebarComponent,
    ContactComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule, HttpClientModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    SidebarComponent,
    ContactComponent,
    SearchComponent
  ]
})
export class SharedModule { }
