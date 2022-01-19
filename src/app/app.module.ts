import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { PricingComponent } from './pricing/pricing.component';
import { PriocingAbtComponent } from './priocing-abt/priocing-abt.component';
import { FounderComponent } from './founder/founder.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeaturesComponent } from './features/features.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LsCompOneComponent } from './ls-comp-one/ls-comp-one.component';
import { LsCompTwoComponent } from './ls-comp-two/ls-comp-two.component';
import { ViewParentComponent } from './view-parent/view-parent.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ParentViewComponent } from './parent-view/parent-view.component';
import { ChildViewComponent } from './child-view/child-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    FooterComponent,
    PricingComponent,
    PriocingAbtComponent,
    FounderComponent,
    NavbarComponent,
    FeaturesComponent,
    ParentComponent,
    ChildComponent,
    LsCompOneComponent,
    LsCompTwoComponent,
    ViewParentComponent,
    ViewChildComponent,
    ParentViewComponent,
    ChildViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
