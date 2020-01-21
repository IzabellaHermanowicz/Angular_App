import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [{
  path: 'galleries',
  component: GalleriesComponent
}, {
  path: 'galleries/:galleryId',
  component: GalleryComponent
}, {
  path: 'dashboard',
  component: DashboardComponent
},{
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
