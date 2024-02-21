import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

const roteamento: Routes = [
    {
      path:'',
      component:HomeComponent,
    },

    {
      path:'developerPage',
      component:ContentComponent,
    }

];

@NgModule({
  imports: [RouterModule.forRoot(roteamento)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
