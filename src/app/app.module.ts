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
import { PropertyBindingComponent } from './tutorials/property-binding/property-binding.component';
import { EventBindingComponent } from './tutorials/event-binding/event-binding.component';
import { TwowayBindingComponent } from './tutorials/twoway-binding/twoway-binding.component';
import { FormsModule } from '@angular/forms';
import { ParentCompComponent } from './tutorials/parent-comp/parent-comp.component';
import { ChildCompComponent } from './tutorials/child-comp/child-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
    NavBarComponentComponent,
    SidebarComponent,
    ServicesComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    ParentCompComponent,
    ChildCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
