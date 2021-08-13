import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ProfilInfoComponent } from './profil-info/profil-info.component';






const routes: Routes = [
  {path: '', component: ProfilInfoComponent},
  {path: 'impressum', component: ImpressumComponent},
  {path: 'datenschutz', component: DatenschutzComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
