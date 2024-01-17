import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/page/home/home.component';
import { AboutComponent } from './shared/page/about/about.component';
import { ContactComponent } from './shared/components/contact/contact.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  /* con esta sintaxis rara puedo llamar el routing hijo - LAZYLOAD */
  { path: 'countries', loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule) },
  // { path: '**', redirectTo: 'countries' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
