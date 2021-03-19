import { CareerComponent } from './career/career.component';
import { DesignDetailComponent } from './design-detail/design-detail.component';
import { ServiceComponent } from './service/service.component';
import { DesignsComponent } from './designs/designs.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"career", component:CareerComponent},
  {path:"services", component: ServiceComponent},
  {path:"designs", component: DesignsComponent},
  {path:"designs/:id", component: DesignDetailComponent},
  {path:"photos", component: GalleryComponent},
  {path:"contact", component:ContactComponent},
  {path:"about", component:AboutComponent},
  {path:"home",component:HomeComponent},
  {path:"**", redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
