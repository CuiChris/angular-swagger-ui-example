import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SwaggerUiComponent } from './swagger-ui/swagger-ui.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'specifications',
    component: SwaggerUiComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
