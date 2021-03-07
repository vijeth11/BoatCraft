import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GalleryComponent } from './gallery/gallery.component';
import { DesignsComponent } from './designs/designs.component';
import { ServiceComponent } from './service/service.component';
import { DesignDetailComponent } from './design-detail/design-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    DesignsComponent,
    ServiceComponent,
    DesignDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfrastructureModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
