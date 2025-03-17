import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/AboutComponent/about.component';
import { FooterComponent } from './components/FooterComponent/footer.component';
import { NavBarComponentComponent } from './components/nav-bar-component/nav-bar-component.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ServicesComponent } from './components/services/services.component';
import { CustomModule } from './modules/custom.module';
import { InterpolationComponent } from './tutorials/interpolation/interpolation.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
    NavBarComponentComponent,
    SidebarComponent,
    ServicesComponent,
    InterpolationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
