import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { ProfilInfoComponent } from './profil-info/profil-info.component';






const routes: Routes = [
  {path: '', component: ProfilInfoComponent},
  {path: '', component: MySkillsComponent},
  {path: '', component: MyWorkComponent},
  {path: 'impressum', component: ImpressumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
